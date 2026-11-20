import type { Profile } from "./s03-profile";

export function saveProfile(profile: Profile): Profile {
  const saved = { ...profile, displayName: profile.displayName.trim() };
  return saved;
}

export function profileCardTitle(profile: Profile): string {
  return saveProfile(profile).displayName;
}
