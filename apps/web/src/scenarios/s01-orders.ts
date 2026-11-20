export interface Order {
  id: string;
  total: number;
}

export function validateOrder(order: Order): boolean {
  return order.total > 0;
}

export function submitOrder(order: Order): string {
  const receipt = `receipt-${order.id}`;
  window.pendo?.track("order_submitted", { orderId: order.id, total: order.total });
  return receipt;
}

export function cancelOrder(order: Order): string {
  return `cancelled-${order.id}`;
}
