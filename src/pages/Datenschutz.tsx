import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Datenschutz() {
  useScrollReveal();

  return (
    <main>
      {/* HERO */}
      <section className="hero hero-sub" style={{ minHeight: '40vh' }}>
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('/bilder/romantik-hotel-abend.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Datenschutzerklärung</h1>
        </div>
      </section>

      {/* LEGAL CONTENT */}
      <section className="section">
        <div className="container-narrow legal-content">
          {/* Inhaltsverzeichnis */}
          <nav
            style={{
              marginBottom: '2.5rem',
              padding: '1.5rem',
              background: 'var(--surface-container)',
              borderRadius: 'var(--radius-lg, .5rem)',
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: '.75rem' }}>
              Inhaltsverzeichnis
            </p>
            <ol style={{ paddingLeft: '1.25rem', lineHeight: 2 }}>
              <li>
                <a href="#abschnitt1">Datenschutz auf einen Blick</a>
              </li>
              <li>
                <a href="#abschnitt2">Hosting</a>
              </li>
              <li>
                <a href="#abschnitt3">
                  Allgemeine Hinweise und Pflichtinformationen
                </a>
              </li>
              <li>
                <a href="#abschnitt4">Datenerfassung auf dieser Website</a>
              </li>
              <li>
                <a href="#abschnitt5">Analyse-Tools und Werbung</a>
              </li>
              <li>
                <a href="#abschnitt6">Plugins und Tools</a>
              </li>
              <li>
                <a href="#abschnitt7">eCommerce und Zahlungsanbieter</a>
              </li>
              <li>
                <a href="#abschnitt8">Eigene Dienste</a>
              </li>
            </ol>
          </nav>

          {/* 1 */}
          <h2 id="abschnitt1">1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </strong>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
            „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung
            entnehmen.
          </p>

          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong>
            <br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
            in ein Kontaktformular eingeben. Andere Daten werden automatisch oder
            nach Ihrer Einwilligung beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>

          <p>
            <strong>Wofür nutzen wir Ihre Daten?</strong>
            <br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden.
          </p>

          <p>
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
            <br />
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
            Datenverarbeitung erteilt haben, können Sie diese Einwilligung
            jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
            unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>

          <h3>Analyse-Tools und Tools von Drittanbietern</h3>
          <p>
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
            ausgewertet werden. Das geschieht vor allem mit sogenannten
            Analyseprogrammen. Detaillierte Informationen zu diesen
            Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
          </p>

          {/* 2 */}
          <h2 id="abschnitt2">2. Hosting</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <h3>Externes Hosting</h3>
          <p>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die
            auf dieser Website erfasst werden, werden auf den Servern des Hosters
            gespeichert. Hierbei kann es sich v.&nbsp;a. um IP-Adressen,
            Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
            Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
            eine Website generiert werden, handeln.
          </p>
          <p>
            <strong>Hoster:</strong> city-map Internetmarketing AG,
            Claus-von-Stauffenberg-Weg 5c, 21684 Stade
          </p>

          {/* 3 */}
          <h2 id="abschnitt3">3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
            sowie dieser Datenschutzerklärung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p>
            Lindengarten Kunath GmbH
            <br />
            Großschönauer Straße 21
            <br />
            02796 Jonsdorf
          </p>
          <p>
            Telefon: +49 (0) 35844 70654
            <br />
            E-Mail:{' '}
            <a href="mailto:buchung@romantikhaeuser.de">
              buchung@romantikhaeuser.de
            </a>
          </p>

          <h3>Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
            ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
            zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
            wir keine anderen rechtlich zulässigen Gründe für die Speicherung
            Ihrer personenbezogenen Daten haben.
          </p>

          <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h3>
          <p>
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
            wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1
            lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO. Im Falle einer
            ausdrücklichen Einwilligung in die Übertragung personenbezogener
            Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
            Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
          </p>

          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3>Widerspruchsrecht gegen die Datenerhebung (Art. 21 DSGVO)</h3>
          <p>
            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e
            oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die
            sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung
            Ihrer personenbezogenen Daten Widerspruch einzulegen.
          </p>

          <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehörde zu.
          </p>

          <h3>Recht auf Datenübertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
            oder an einen Dritten in einem gängigen, maschinenlesbaren Format
            aushändigen zu lassen.
          </p>

          <h3>Auskunft, Berichtigung und Löschung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
            das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
            personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
            der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
            Löschung dieser Daten.
          </p>

          <h3>Recht auf Einschränkung der Verarbeitung</h3>
          <p>
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen.
          </p>

          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an
            dem Schloss-Symbol in Ihrer Browserzeile.
          </p>

          {/* 4 */}
          <h2 id="abschnitt4">4. Datenerfassung auf dieser Website</h2>

          <h3>Cookies</h3>
          <p>
            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
            kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.
            Sie werden entweder vorübergehend für die Dauer einer Sitzung
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
            Endgerät gespeichert.
          </p>

          <h3>Einwilligung mit dem Lindengarten Cookie-Manager</h3>
          <p>
            Unsere Website nutzt ein eigenes, schlankes und datensparsames Einwilligungs-Management
            (Cookie-Banner), um Ihre datenschutzrechtliche Auswahl zu speichern.
            Dabei wird kein Profil angelegt und kein tracking-relevanter Dienst von Drittanbietern
            ausgeführt. Ihre Entscheidung (nur technisch notwendige Komponenten oder auch optionale externe
            Medien wie interaktive Karten) wird im lokalen Speicher (localStorage: <code>lindengarten_cookie_consent_v1</code>)
            Ihres Browsers abgelegt. Rechtsgrundlage für diese Speicherung ist Art. 6 Abs. 1 lit. c DSGVO
            i.&nbsp;V.&nbsp;m. § 25 Abs. 2 TDDDG (Erfüllung der gesetzlichen Nachweispflicht bzw. technisch
            unbedingt erforderlich).
          </p>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
            Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
            Anfrage inklusive aller daraus hervorgehenden personenbezogenen
            Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
            uns gespeichert und verarbeitet.
          </p>

          {/* 5 */}
          <h2 id="abschnitt5">5. Analyse-Tools und Werbung</h2>
          <p>
            Auf dieser Website werden bewusst <strong>keine</strong> externen Webanalyse-Dienste
            oder Werbe-Tracker (wie Google Analytics, Facebook-Pixel o.&nbsp;ä.) eingesetzt. Ihr
            Besuch und Ihr Nutzungsverhalten werden nicht zu Werbezwecken erfasst oder an Dritte
            weitergegeben.
          </p>

          {/* 6 */}
          <h2 id="abschnitt6">6. Plugins und Tools</h2>

          <h3>OpenStreetMap (Anfahrtskarte mit 2-Klick-Lösung)</h3>
          <p>
            Wir binden auf unserer Kontaktseite Kartenmaterial des Dienstes OpenStreetMap ein
            (OpenStreetMap Foundation, St John’s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, UK).
            Um Ihre Privatsphäre zu schützen, ist OpenStreetMap über eine datenschutzfreundliche
            2-Klick-Lösung eingebunden: Das Karten-Iframe wird standardmäßig blockiert und erst dann
            geladen, wenn Sie entweder im Cookie-Banner die Kategorie „Externe Medien“ akzeptiert haben
            oder auf der Kontaktseite aktiv auf „Karte laden“ klicken (Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO).
            Erst bei diesem Aufruf wird eine direkte Verbindung zu den Servern der OpenStreetMap Foundation
            aufgebaut und Ihre IP-Adresse übertragen. Weitere Informationen finden Sie in der
            Datenschutzerklärung von OpenStreetMap unter{' '}
            <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">
              https://wiki.osmfoundation.org/wiki/Privacy_Policy
            </a>.
          </p>

          <h3>Google Fonts</h3>
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Webfonts (Manrope und Noto Serif).
            Die Schriftarten dienen einer ansprechenden und einheitlichen Darstellung unseres Online-Angebots.
            Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>

          {/* 7 */}
          <h2 id="abschnitt7">7. eCommerce und Buchungsabwicklung</h2>

          <h3>DIRS21 Reservierungs- und Buchungssystem</h3>
          <p>
            Für die Online-Zimmerreservierung und Verfügbarkeitsabfrage nutzen wir das Buchungssystem
            DIRS21 der TourOnline AG, Borsigstraße 26, 73249 Wernau, Deutschland.
          </p>
          <p>
            Wenn Sie über unsere Website eine Zimmerverfügbarkeit abfragen oder eine Buchung durchführen,
            werden die hierfür erforderlichen Daten (u.&nbsp;a. Reisedaten, Zimmerkategorie, Name, Kontaktdaten
            sowie Zahlungsinformationen) direkt über die sichere Schnittstelle der TourOnline AG verarbeitet.
            Die Nutzung erfolgt zur Erfüllung eines Vertrages bzw. zur Durchführung vorvertraglicher Maßnahmen
            gemäß Art. 6 Abs. 1 lit. b DSGVO. Zwischen uns und der TourOnline AG besteht eine entsprechende
            Vereinbarung zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO. Weitere Informationen zum
            Datenschutz bei DIRS21 finden Sie unter{' '}
            <a href="https://www.dirs21.de/datenschutz/" target="_blank" rel="noopener noreferrer">
              https://www.dirs21.de/datenschutz/
            </a>.
          </p>

          <h3>Verarbeiten von Kunden- und Vertragsdaten</h3>
          <p>
            Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und
            Vertragsdaten zur Begründung, inhaltlichen Ausgestaltung und
            Änderung unserer Vertragsbeziehungen. Personenbezogene Daten über die
            Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten
            und nutzen wir nur, soweit dies erforderlich ist.
          </p>

          <h3>
            Datenübermittlung bei Vertragsschluss für Dienstleistungen und
            digitale Inhalte
          </h3>
          <p>
            Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies
            im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der
            Zahlungsabwicklung beauftragte Kreditinstitut.
          </p>

          {/* 8 */}
          <h2 id="abschnitt8">8. Eigene Dienste</h2>

          <h3>Umgang mit Bewerberdaten</h3>
          <p>
            Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben
            (z.&nbsp;B. per E-Mail, postalisch oder via
            Online-Bewerberformular). Im Folgenden informieren wir Sie über den
            Umfang, den Zweck und die Verwendung Ihrer im Rahmen des
            Bewerbungsprozesses erhobenen personenbezogenen Daten.
          </p>
        </div>
      </section>
    </main>
  );
}
