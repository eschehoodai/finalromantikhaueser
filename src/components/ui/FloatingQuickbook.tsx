import { useState, useEffect, useRef } from 'react';

export default function FloatingQuickbook() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Ensure DIRS21 SDK is loaded once globally
    const scriptId = 'dirs21-sdk-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://js-sdk.dirs21.de/7c9366f5-d53f-469f-a694-64492ca05e97';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. Scroll detection with debounce (Hide while scrolling, Show when idle)
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      // Don't hide if user is interacting with inputs, if mobile drawer is open, or if dismissed
      if (isInteracting || isMobileDrawerOpen || isDismissed) return;

      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isInteracting, isMobileDrawerOpen, isDismissed]);

  // Handle ESC key to close mobile drawer or dismiss widget
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMobileDrawerOpen) {
          setIsMobileDrawerOpen(false);
        } else if (!isDismissed) {
          setIsDismissed(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileDrawerOpen, isDismissed]);

  // Body scroll lock when mobile drawer is open
  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileDrawerOpen]);

  // DIRS21 Render-Trigger: Stellt sicher, dass das Quickbook-Widget sofort und verlässlich gemountet wird
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    let attempts = 0;

    const renderQuickbook = () => {
      attempts++;
      const win = window as any;
      if (win.dirs21 && typeof win.dirs21.render === 'function') {
        win.dirs21.render();
      }
      const qb = document.getElementById('d21-quickbook');
      if (qb && qb.children.length > 0) {
        clearInterval(timer);
      }
      if (attempts >= 40) {
        clearInterval(timer);
      }
    };

    renderQuickbook();
    timer = setInterval(renderQuickbook, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const openMobileDrawer = () => {
    setIsDismissed(false);
    setIsMobileDrawerOpen(true);
    const win = window as any;
    if (win.dirs21 && typeof win.dirs21.render === 'function') {
      setTimeout(() => win.dirs21.render(), 60);
    }
  };

  const closeMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  };

  const handleClose = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setIsMobileDrawerOpen(false);
    setIsDismissed(true);
  };

  const handleReopen = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setIsDismissed(false);
    const win = window as any;
    if (win.dirs21 && typeof win.dirs21.render === 'function') {
      setTimeout(() => win.dirs21.render(), 60);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeMobileDrawer();
    }
  };

  return (
    <>
      {/* MOBILE TRIGGER: Option C (nur auf Mobilgeräten sichtbar) */}
      <button
        id="floating-mobile-pill"
        className={`floating-mobile-pill ${isScrolling ? 'is-scrolling' : 'is-idle'}`}
        onClick={openMobileDrawer}
        aria-label="Zimmer zum Bestpreis buchen"
      >
        <span className="pill-pulse-dot" />
        <span className="pill-text">🛎️ Zimmer zum Bestpreis buchen</span>
      </button>

      {/* DESKTOP REOPEN PILL (wird eingeblendet wenn Widget per X weggeklickt wurde) */}
      {isDismissed && (
        <button
          id="floating-quickbook-reopen-pill"
          className="floating-quickbook-reopen-pill"
          onClick={handleReopen}
          aria-label="Zimmer zum Bestpreis buchen"
          title="Zimmer zum Bestpreis buchen"
        >
          <span className="pill-pulse-dot" />
          <span className="pill-text">🛎️ Zimmer zum Bestpreis buchen</span>
        </button>
      )}

      {/* MODAL BACKDROP (auf Mobilgeräten aktiv wenn geöffnet) */}
      <div
        id="floating-quickbook-backdrop"
        className={`floating-quickbook-backdrop ${isMobileDrawerOpen ? 'open' : ''}`}
        onClick={handleBackdropClick}
      >
        {/* DIE HAUPTKARTE:
            - Desktop: Schwebend rechts, nach unten versetzt (top: calc(50% + 85px))
            - Mobile: Im geöffneten Drawer-Modal zentriert
            - Enthält das 100% originale DIRS21 QuickBook Widget */}
        <div
          ref={cardRef}
          id="floating-quickbook-card"
          className={`floating-quickbook-card ${isDismissed ? 'is-dismissed' : ''} ${isScrolling ? 'is-scrolling' : 'is-idle'} ${isMobileDrawerOpen ? 'mobile-open' : ''}`}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onFocus={() => setIsInteracting(true)}
          onBlur={() => setIsInteracting(false)}
        >
          {/* Header */}
          <div className="fq-header">
            <div className="fq-brand">
              <span className="fq-logo-badge">ZL</span>
              <div>
                <div className="fq-title">Zimmer buchen</div>
                <div className="fq-sub">Bestpreis im Lindengarten</div>
              </div>
            </div>
            {/* Close Button für Desktop & Mobile */}
            <button
              id="fq-close-btn"
              className="fq-close-btn"
              onClick={handleClose}
              aria-label="Widget schließen"
              title="Widget schließen"
            >
              ✕
            </button>
          </div>

          {/* DIRS21 QuickBook Widget (100% Original ohne CSS-Overrides) */}
          <div className="fq-widget-slot">
            <div
              className="d21-quickbook d21-f80c844e-5ab5-463a-91de-dc47e9aed1b7"
              id="d21-quickbook"
              d21-widget-uuid="f80c844e-5ab5-463a-91de-dc47e9aed1b7"
            />
          </div>

          {/* Trust Footer */}
          <div className="fq-footer">
            <span className="fq-trust-item">
              <span className="fq-trust-dot" /> Bestpreis-Garantie
            </span>
            <span className="fq-trust-item">
              <span className="fq-trust-dot" /> Sofortbestätigung
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
