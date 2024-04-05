export function sum(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error('Invalid input');
  }

  return num1 + num2;
}
