import type { CartItem } from "./s02-cart";

export function checkout(cart: CartItem[]): number {
  const units = cart.reduce((sum, item) => sum + item.quantity, 0);
  window.pendo?.track("cart_checked_out", { units, lines: cart.length });
  return units;
}
