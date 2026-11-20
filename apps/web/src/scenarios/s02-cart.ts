export interface CartItem {
  sku: string;
  quantity: number;
}

export function addItem(cart: CartItem[], item: CartItem): CartItem[] {
  return [...cart, item];
}

export function checkout(cart: CartItem[]): number {
  const units = cart.reduce((sum, item) => sum + item.quantity, 0);
  return units;
}
