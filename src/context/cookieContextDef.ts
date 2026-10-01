import { createContext } from 'react';

export interface CookieConsentSettings {
  essential: boolean;
  externalMedia: boolean;
  timestamp: string;
}

export interface CookieContextType {
  consent: CookieConsentSettings | null;
  isOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  acceptAll: () => void;
  acceptEssentialOnly: () => void;
  saveCustomSettings: (settings: { externalMedia: boolean }) => void;
}

export const STORAGE_KEY = 'lindengarten_cookie_consent_v1';

export const CookieContext = createContext<CookieContextType | undefined>(undefined);
