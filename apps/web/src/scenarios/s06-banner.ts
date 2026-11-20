export function bannerText(daysLeft: number): string {
  const text = daysLeft > 0 ? `${daysLeft} days left in your trial` : "Your trial has ended";
  window.pendo?.track("trial_banner_shown", { daysLeft });
  return text;
}
