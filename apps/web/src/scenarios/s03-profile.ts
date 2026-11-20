export interface Profile {
  id: string;
  displayName: string;
}

export function profileLabel(profile: Profile): string {
  return profile.displayName.trim();
}

export function saveProfile(profile: Profile): Profile {
  const saved = { ...profile, displayName: profile.displayName.trim() };
  return saved;
}
