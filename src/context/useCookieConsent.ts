import { useContext } from 'react';
import { CookieContext, type CookieContextType } from './cookieContextDef';

export function useCookieConsent(): CookieContextType {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
}
