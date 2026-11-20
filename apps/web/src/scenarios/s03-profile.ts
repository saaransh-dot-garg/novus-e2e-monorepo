export interface Profile {
  id: string;
  displayName: string;
}

export function profileLabel(profile: Profile): string {
  return profile.displayName.trim();
}
