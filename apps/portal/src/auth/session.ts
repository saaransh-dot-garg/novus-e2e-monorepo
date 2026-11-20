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
  pendo.identify({
    visitor: { id: user.id, email: user.email },
    account: { id: user.organizationId },
  });
  window.pendo?.track("portal_signed_in", { organizationId: user.organizationId });
  return user;
}

export function signOut(): void {
  currentUser = null;
  pendo.clearSession();
}

export function getUser(): PortalUser | null {
  return currentUser;
}
