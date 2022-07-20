export default function pxToRem(number: number, baseNumber = 16): string {
  return `${number / baseNumber}rem`;
}
