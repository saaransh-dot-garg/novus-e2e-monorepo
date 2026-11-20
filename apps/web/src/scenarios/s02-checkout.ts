import type { CartItem } from "./s02-cart";

export function checkout(cart: CartItem[]): number {
  const units = cart.reduce((sum, item) => sum + item.quantity, 0);
  return units;
}
