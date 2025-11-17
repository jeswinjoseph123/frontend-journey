export function formatAmount(amountCents) {
  return `$${(amountCents / 100).toFixed(2)}`;
}
