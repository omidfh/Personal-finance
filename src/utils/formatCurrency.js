export function formatCurrency(amount = "0", currency) {
  let options = {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  };

  let formatter;
  switch (currency) {
    case "IRR": // Iran Rial
      formatter = new Intl.NumberFormat("fa-IR", options);
      break;
    case "EUR": // Euro
      formatter = new Intl.NumberFormat("de-DE", options);
      break;
    case "USD": // US Dollar
      formatter = new Intl.NumberFormat("en-US", options);
      break;
    case "TRY": // Turkish Lira
      formatter = new Intl.NumberFormat("tr-TR", options);
      break;
    default:
      console.error("Unsupported currency");
      return;
  }

  return formatter.format(amount);
}

// Usage examples:
// console.log(formatCurrency(123456.78, "IRR")); // Outputs:
// console.log(formatCurrency(123456.78, "EUR")); // Outputs: €123,457.00
// console.log(formatCurrency(123456.78, "USD")); // Outputs: $123,456.78
// console.log(formatCurrency(123456.78, "TRY")); // Outputs: ₺123.457,00
