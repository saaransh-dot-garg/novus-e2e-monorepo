export interface Invite {
  email: string;
  teamId: string;
}

export function sendInvite(email: string, teamId: string): Invite {
  const invite: Invite = { email: email.toLowerCase(), teamId };
  window.pendo?.track("invite_sent", { teamId, domain: email.split("@")[1] ?? "" });
  return invite;
}
