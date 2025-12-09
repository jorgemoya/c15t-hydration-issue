const ok = <T>(data: T | null = null) => ({
    data,
    error: null,
    ok: true,
    response: null,
  });
  
export function showConsentBanner(isCookieConsentEnabled: boolean) {
    let language = 'en';
  
    if (typeof document !== 'undefined') {
      language = document.documentElement.lang;
    }
  
  
    if (!isCookieConsentEnabled) {
      return ok({
        showConsentBanner: false,
        jurisdiction: { code: 'NONE' },
        translations: {
          language,
        },
        branding: 'none',
      });
    }
  
    return ok({
      showConsentBanner: true,
      translations: {
        language,
      },
      branding: 'none',
    });
  }