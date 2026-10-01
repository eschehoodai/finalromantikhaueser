import React, { useState } from 'react';
import {
  CookieContext,
  STORAGE_KEY,
  type CookieConsentSettings,
} from './cookieContextDef';

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<CookieConsentSettings | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as CookieConsentSettings) : null;
    } catch {
      return null;
    }
  });

  const [isOpen, setIsOpen] = useState<boolean>(() => {
    try {
      return !localStorage.getItem(STORAGE_KEY);
    } catch {
      return true;
    }
  });

  const saveSettings = (newSettings: CookieConsentSettings) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
    } catch {
      // Ignorieren falls nicht verfügbar
    }
    setConsent(newSettings);
    setIsOpen(false);
  };

  const acceptAll = () => {
    saveSettings({
      essential: true,
      externalMedia: true,
      timestamp: new Date().toISOString(),
    });
  };

  const acceptEssentialOnly = () => {
    saveSettings({
      essential: true,
      externalMedia: false,
      timestamp: new Date().toISOString(),
    });
  };

  const saveCustomSettings = ({ externalMedia }: { externalMedia: boolean }) => {
    saveSettings({
      essential: true,
      externalMedia,
      timestamp: new Date().toISOString(),
    });
  };

  const openSettings = () => {
    setIsOpen(true);
  };

  const closeSettings = () => {
    if (consent) {
      setIsOpen(false);
    }
  };

  return (
    <CookieContext.Provider
      value={{
        consent,
        isOpen,
        openSettings,
        closeSettings,
        acceptAll,
        acceptEssentialOnly,
        saveCustomSettings,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}
