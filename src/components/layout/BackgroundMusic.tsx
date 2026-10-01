import { useRef, useEffect } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6; // Angenehme, klare Hintergrundlautstärke

    const playAudio = () => {
      if (!audio || document.hidden) return;

      const promise = audio.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Autoplay noch vom Browser blockiert bis zur nächsten Interaktion
        });
      }
    };

    // 1. Sofort versuchen (falls der Browser es bereits erlaubt)
    playAudio();

    // 2. Aggressive Interaktions-Listener: Beim allerersten Klick, Scroll, Touch, Tastendruck etc.
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
      if (audio && audio.paused && !document.hidden) {
        playAudio();
      }
    };

    interactionEvents.forEach((event) => {
      window.addEventListener(event, handleInteraction, { passive: true, capture: true });
    });

    // 3. Tab verlassen / zurückkehren: Musik stoppen wenn Tab inaktiv, fortsetzen wenn Tab aktiv
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audio && !audio.paused) {
          audio.pause();
        }
      } else {
        // Tab ist wieder im Fokus/sichtbar -> Musik aggressiv wieder anwerfen
        playAudio();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Fallback: Endlos-Schleife absichern
    const handleEnded = () => {
      if (audio) {
        audio.currentTime = 0;
        playAudio();
      }
    };
    audio.addEventListener('ended', handleEnded);

    return () => {
      interactionEvents.forEach((event) => {
        window.removeEventListener(event, handleInteraction, { capture: true });
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/musik/musik1.mp3"
      loop
      preload="auto"
      playsInline
      style={{ display: 'none' }}
      aria-hidden="true"
    />
  );
}
