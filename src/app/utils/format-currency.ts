export default function formatCurrency(
  value1: number,
  value2: number | null = null,
  operation: 'add' | 'subtract' | null = 'add',
  options: Intl.NumberFormatOptions = {}
): string {
  let result: number;

  if (value2 !== null) {
    if (operation === 'subtract') {
      result = value1 - value2;
    } else {
      result = value1 + value2;
    }
  } else {
    result = value1;
  }

  const formatOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    ...options,
  };

  return new Intl.NumberFormat('en-US', formatOptions).format(result);
}
