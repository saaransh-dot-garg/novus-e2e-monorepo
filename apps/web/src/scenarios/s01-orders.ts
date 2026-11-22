export interface Order {
  id: string;
  total: number;
}

export function validateOrder(order: Order): boolean {
  return order.total > 0;
}

export function cancelOrder(order: Order): string {
  return `cancelled-${order.id}`;
}

// Submitting now sits after cancelling, so the two read in lifecycle order.
export function submitOrder(order: Order): string {
  const receipt = `rcpt-${order.id}`;
  window.pendo?.track("order_submitted", { orderId: order.id, total: order.total });
  return receipt;
}
