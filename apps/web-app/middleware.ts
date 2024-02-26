import { NextResponse, NextRequest } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages, cookieName } from '@/i18n/settings';

// Because acceptLanguage.languages only accepts an array of strings and not a readonly array of strings
const locales = [...languages];

acceptLanguage.languages(locales);
const PUBLIC_FILE = /\.(.*)$/;
export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};

export function middleware(req: NextRequest) {
  let lng;
  const lngCookie = req.cookies.get(cookieName);
  if (lngCookie) {
    lng = acceptLanguage.get(lngCookie.value);
  }
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  }
  if (!lng) {
    lng = fallbackLng;
  }

  //to take the files from the public folder
  if (PUBLIC_FILE.test(req.nextUrl.pathname)) {
    return;
  }

  // Redirect if lng in path is not supported
  if (
    !locales.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  const referer = req.headers.get('referer');

  if (referer) {
    const refererUrl = new URL(referer);
    const lngInReferer = locales.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
    }
    return response;
  }

  return NextResponse.next();
}
