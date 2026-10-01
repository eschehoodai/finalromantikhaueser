<?php
/**
 * Romantik Hotel Zum Lindengarten - Kontakt & Buchungsanfrage Mailer
 * 
 * Verarbeitet POST-Anfragen von Buchung.tsx und Kontakt.tsx
 * und versendet Benachrichtigungen an buchung@romantikhaeuser.de und eschehoodai@gmail.com
 */

// UTF-8 und JSON Response Header setzen
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight OPTIONS Request beantworten
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Nur POST erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Nur POST-Anfragen sind zulässig.'
    ]);
    exit;
}

// Daten einlesen (unterstützt JSON payload & Standard POST)
$rawInput = file_get_contents('php://input');
if (empty($rawInput) && php_sapi_name() === 'cli') {
    $rawInput = file_get_contents('php://stdin');
}
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

// Anti-Spam: Honeypot-Feld prüfen
if (!empty($data['website']) || !empty($data['honeypot'])) {
    // Bots silent ignorieren und Erfolgsmeldung zurückgeben
    echo json_encode([
        'success' => true,
        'message' => 'Vielen Dank für Ihre Anfrage.'
    ]);
    exit;
}

// Formular-Typ ermitteln
$formType = isset($data['form_type']) ? trim($data['form_type']) : '';
if (empty($formType)) {
    $formType = isset($data['anreise']) ? 'buchung' : 'kontakt';
}

// Bereinigung von Header-Injection (Zeilenumbrüche entfernen)
function sanitizeHeaderField($str) {
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], '', (string)$str));
}

$name = sanitizeHeaderField($data['name'] ?? '');
$email = sanitizeHeaderField($data['email'] ?? '');
$phone = sanitizeHeaderField($data['telefon'] ?? '');
$message = trim((string)($data['nachricht'] ?? ''));

// Pflichtfelder validieren
$errors = [];

if (empty($name)) {
    $errors[] = 'Bitte geben Sie Ihren Namen an.';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
}

if ($formType === 'buchung') {
    $anreise = sanitizeHeaderField($data['anreise'] ?? '');
    $abreise = sanitizeHeaderField($data['abreise'] ?? '');
    $erwachsene = sanitizeHeaderField($data['erwachsene'] ?? '2');
    $kinder = sanitizeHeaderField($data['kinder'] ?? '0');

    if (empty($anreise)) {
        $errors[] = 'Bitte geben Sie das Anreisedatum an.';
    }
    if (empty($abreise)) {
        $errors[] = 'Bitte geben Sie das Abreisedatum an.';
    }
} else {
    // Kontaktformular
    if (empty($message)) {
        $errors[] = 'Bitte geben Sie eine Nachricht ein.';
    }
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => implode(' ', $errors)
    ]);
    exit;
}

// Empfänger definieren
$to = 'buchung@romantikhaeuser.de, eschehoodai@gmail.com';

// Datum & Zeit für Protokoll
date_default_timezone_set('Europe/Berlin');
$dateStr = date('d.m.Y H:i:s');
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unbekannt';

// Betreff und Nachricht zusammenstellen
if ($formType === 'buchung') {
    $subject = 'Neue Buchungsanfrage von ' . $name . ' (Website)';
    
    $body = "=======================================================\n";
    $body .= "NEUE ALLGEMEINE BUCHUNGSANFRAGE\n";
    $body .= "Romantik Hotel Zum Lindengarten\n";
    $body .= "=======================================================\n\n";
    $body .= "KONTAKTDATEN DES GASTES:\n";
    $body .= "-------------------------------------------------------\n";
    $body .= "Name:            " . $name . "\n";
    $body .= "E-Mail:          " . $email . "\n";
    $body .= "Telefon:         " . ($phone !== '' ? $phone : 'Keine Angabe') . "\n\n";
    $body .= "REISEZEITRAUM & PERSONEN:\n";
    $body .= "-------------------------------------------------------\n";
    $body .= "Anreise:         " . $anreise . "\n";
    $body .= "Abreise:         " . $abreise . "\n";
    $body .= "Erwachsene:      " . $erwachsene . "\n";
    $body .= "Kinder:          " . $kinder . "\n\n";
    $body .= "NACHRICHT / WÜNSCHE DES GASTES:\n";
    $body .= "-------------------------------------------------------\n";
    $body .= ($message !== '' ? $message : 'Keine zusätzliche Nachricht') . "\n\n";
    $body .= "=======================================================\n";
    $body .= "Eingegangen am:  " . $dateStr . " Uhr\n";
    $body .= "IP-Adresse:      " . $clientIp . "\n";
} else {
    $subject = 'Neue Kontaktanfrage von ' . $name . ' (Website)';
    
    $body = "=======================================================\n";
    $body .= "NEUE KONTAKTANFRAGE\n";
    $body .= "Romantik Hotel Zum Lindengarten\n";
    $body .= "=======================================================\n\n";
    $body .= "KONTAKTDATEN:\n";
    $body .= "-------------------------------------------------------\n";
    $body .= "Name:            " . $name . "\n";
    $body .= "E-Mail:          " . $email . "\n";
    $body .= "Telefon:         " . ($phone !== '' ? $phone : 'Keine Angabe') . "\n\n";
    $body .= "NACHRICHT:\n";
    $body .= "-------------------------------------------------------\n";
    $body .= $message . "\n\n";
    $body .= "=======================================================\n";
    $body .= "Eingegangen am:  " . $dateStr . " Uhr\n";
    $body .= "IP-Adresse:      " . $clientIp . "\n";
}

// Mail-Header (MIME UTF-8 konform)
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$encodedSenderName = '=?UTF-8?B?' . base64_encode($name) . '?=';

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'Content-Transfer-Encoding: 8bit';
$headers[] = 'From: Romantik Hotel Website <buchung@romantikhaeuser.de>';
$headers[] = 'Reply-To: ' . $encodedSenderName . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$headerStr = implode("\r\n", $headers);

// E-Mail versenden
$sent = @mail($to, $encodedSubject, $body, $headerStr);

// Lokaler Entwicklungsmodus-Fallback:
// Wenn auf localhost kein SMTP-Server eingerichtet ist (z. B. Windows-Entwicklung):
$isLocalhost = (
    php_sapi_name() === 'cli' ||
    ($_SERVER['SERVER_NAME'] ?? '') === 'localhost' ||
    strpos($_SERVER['HTTP_HOST'] ?? '', 'localhost') !== false ||
    ($_SERVER['REMOTE_ADDR'] ?? '') === '127.0.0.1' ||
    ($_SERVER['REMOTE_ADDR'] ?? '') === '::1'
);

if (!$sent && $isLocalhost) {
    // Speichere die E-Mail lokal ab, damit Inhalt und Format überprüft werden können
    $logDir = __DIR__ . '/../mail_logs';
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0777, true);
    }
    $logEntry = "EMPFÄNGER: " . $to . "\n"
              . "BETREFF: " . $subject . "\n"
              . "REPLY-TO: " . $name . " <" . $email . ">\n"
              . "ZEITPUNKT: " . $dateStr . "\n"
              . "-------------------------------------------------------\n"
              . $body . "\n";
    @file_put_contents($logDir . '/last_mail.txt', $logEntry);
    
    // Für lokalen Test als erfolgreich markieren
    $sent = true;
}

if ($sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns schnellstmöglich bei Ihnen.'
    ]);
} else {
    // Falls auf dem Server kein lokaler Sendmail konfiguriert ist
    // Bei Produktivservern (Strato/All-Inkl/IONOS etc.) ist mail() aktiv.
    // Wir loggen den Vorfall serverseitig:
    error_log("Fehler beim Versenden der E-Mail für {$email}");
    
    // Fallback: Wenn mail() fehlschlägt (z.B. auf Windows Dev Umgebung ohne SMTP)
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Beim Senden ist ein Fehler aufgetreten. Bitte kontaktieren Sie uns direkt telefonisch unter 035844 70654 oder per E-Mail an buchung@romantikhaeuser.de.'
    ]);
}
