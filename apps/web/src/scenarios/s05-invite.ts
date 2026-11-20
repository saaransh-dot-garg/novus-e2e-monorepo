export interface Invite {
  email: string;
  workspaceId: string;
}

export function sendInvite(email: string, workspaceId: string): Invite {
  const invite: Invite = { email: email.toLowerCase(), workspaceId };
  return invite;
}
