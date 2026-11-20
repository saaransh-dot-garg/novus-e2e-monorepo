export interface KioskUser {
  id: string;
  email: string;
  organizationId: string;
}

let currentUser: KioskUser | null = null;

export async function signIn(
  email: string,
  load: (email: string) => Promise<KioskUser>
): Promise<KioskUser> {
  const user = await load(email);
  currentUser = user;
  return user;
}

export function signOut(): void {
  currentUser = null;
}

export function getUser(): KioskUser | null {
  return currentUser;
}
