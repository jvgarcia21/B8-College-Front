import { Injectable } from '@angular/core';

export type UserRole = 'admin' | 'empleado';

export interface User {
  username: string;
  role: UserRole;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: User | null = null;

  login(username: string, password: string): boolean {
    if (username === 'admin') {
      this.currentUser = { username, role: 'admin' };
      return true;
    }
    if (username === 'empleado') {
      this.currentUser = { username, role: 'empleado' };
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
  }

  get userRole(): UserRole | null {
    return this.currentUser?.role ?? null;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}
