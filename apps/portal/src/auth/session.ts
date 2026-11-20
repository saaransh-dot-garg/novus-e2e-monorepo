export interface PortalUser {
  id: string;
  email: string;
  organizationId: string;
}

let currentUser: PortalUser | null = null;

export async function signIn(
  email: string,
  load: (email: string) => Promise<PortalUser>
): Promise<PortalUser> {
  const user = await load(email);
  currentUser = user;
  return user;
}

export function signOut(): void {
  currentUser = null;
}

export function getUser(): PortalUser | null {
  return currentUser;
}
