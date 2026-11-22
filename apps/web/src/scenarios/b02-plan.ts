export class PlanService {
  private current = "free";

  changePlan(plan: string): string {
    const changed = this.current !== plan;
    if (changed && plan !== "free") {
      window.pendo?.track("plan_upgraded", { plan });
    }
    this.current = changed ? plan : this.current;
    return this.current;
  }
}
