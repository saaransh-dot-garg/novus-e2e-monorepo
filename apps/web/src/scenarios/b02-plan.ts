export class PlanService {
  private current = "free";

  changePlan(plan: string): string {
    const changed = this.current !== plan;
    this.current = changed ? plan : this.current;
    return this.current;
  }
}
