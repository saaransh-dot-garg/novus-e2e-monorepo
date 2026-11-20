export interface CartItem {
  sku: string;
  quantity: number;
}

export function addItem(cart: CartItem[], item: CartItem): CartItem[] {
  return [...cart, item];
}
