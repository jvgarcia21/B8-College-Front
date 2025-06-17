import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const roles = (route.data['roles'] as string[]) || [];
  if (!auth.isLoggedIn() || !roles.includes(auth.userRole!)) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
