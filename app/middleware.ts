import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routes } from '@/lib/routes';

// Middleware function to handle role-based access
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;
  const user = request.cookies.get('user')?.value;

  // Redirect guests to login if the route is not public
  if (!token && !isPublicRoute(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If user data exists, check role-based access
  if (user) {
    const { role: userRole } = JSON.parse(user);
    const route = routes.find((r) => pathname.startsWith(r.path));

    if (route && !route.access.includes(userRole)) {
      return NextResponse.redirect(new URL('/403', request.url)); // 403 Forbidden page
    }
  }

  return NextResponse.next();
}

// Helper function to check if a route is public
function isPublicRoute(pathname: string) {
  return routes.some(
    (route) => route.access.includes('guest') && pathname.startsWith(route.path)
  );
}

// Middleware config to match specific paths
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile',
    '/blog/:path*',
    '/about-us',
    '/contact-us',
    '/privacy-policy',
    '/terms-and-conditions'
  ]
};
