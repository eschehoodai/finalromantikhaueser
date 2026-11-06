import { useRef, useEffect } from 'react';

const PAUSE_DURATION_MS = 5 * 60 * 1000; // 5 Minuten Pause nach jedem Durchlauf

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3; // Halbe Lautstärke für angenehme Hintergrundmusik

    let cooldownTimer: ReturnType<typeof setTimeout> | null = null;
    let isInCooldown = false;
    let isPlaying = false;
    let pendingPlayAfterVisible = false;

    const playAudio = () => {
      if (!audio || isInCooldown) return;

      if (document.hidden) {
        pendingPlayAfterVisible = true;
        return;
      }

      const promise = audio.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            isPlaying = true;
            pendingPlayAfterVisible = false;
            // Sobald die Wiedergabe erfolgreich gestartet ist, entfernen wir die Interaktions-Listener,
            // damit Klicks und Scrollen den Song nicht immer wieder von vorne anstoßen.
            removeInteractionListeners();
          })
          .catch(() => {
            // Autoplay wurde noch vom Browser blockiert bis zur nächsten Benutzerinteraktion
            isPlaying = false;
          });
      }
    };

    const interactionEvents: (keyof WindowEventMap)[] = [
      'click',
      'touchstart',
      'touchend',
      'pointerdown',
      'mousedown',
      'keydown',
      'scroll',
      'wheel',
    ];

    const handleInteraction = () => {
      if (!isPlaying && !isInCooldown) {
        playAudio();
      }
    };

    const addInteractionListeners = () => {
      interactionEvents.forEach((event) => {
        window.addEventListener(event, handleInteraction, { passive: true, capture: true });
      });
    };

    const removeInteractionListeners = () => {
      interactionEvents.forEach((event) => {
        window.removeEventListener(event, handleInteraction, { capture: true });
      });
    };

    // 1. Sofort versuchen (falls der Browser Autoplay bereits erlaubt)
    playAudio();

    // 2. Interaktions-Listener für den ersten Start registrieren
    addInteractionListeners();

    // 3. Tab verlassen / zurückkehren: Musik pausieren wenn Tab im Hintergrund
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (isPlaying && !audio.paused) {
          audio.pause();
        }
      } else {
        // Tab ist wieder sichtbar
        if (pendingPlayAfterVisible && !isInCooldown) {
          pendingPlayAfterVisible = false;
          audio.currentTime = 0;
          playAudio();
        } else if (isPlaying && audio.paused && !isInCooldown) {
          // Song fortsetzen, wenn er wegen Tab-Wechsel pausiert war
          audio.play().catch(() => { });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 4. Song zu Ende: 5 Minuten Pause einlegen, danach erneut abspielen
    const handleEnded = () => {
      isPlaying = false;
      isInCooldown = true;

      if (cooldownTimer) {
        clearTimeout(cooldownTimer);
      }

      cooldownTimer = setTimeout(() => {
        isInCooldown = false;
        if (audio) {
          audio.currentTime = 0;
          if (document.hidden) {
            pendingPlayAfterVisible = true;
          } else {
            playAudio();
          }
        }
      }, PAUSE_DURATION_MS);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      removeInteractionListeners();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      audio.removeEventListener('ended', handleEnded);
      if (cooldownTimer) {
        clearTimeout(cooldownTimer);
      }
      audio.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/musik/musik1.mp3?v=2"
      preload="auto"
      playsInline
      style={{ display: 'none' }}
      aria-hidden="true"
    />
  );
}
