export interface Order {
  id: string;
  total: number;
}

export function validateOrder(order: Order): boolean {
  return order.total > 0;
}

export function submitOrder(order: Order): string {
  const receipt = `receipt-${order.id}`;
  return receipt;
}

export function cancelOrder(order: Order): string {
  return `cancelled-${order.id}`;
}
