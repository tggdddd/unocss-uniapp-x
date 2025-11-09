import { Theme } from '../theme';

export function addUnit(value: string | number, theme?: Theme): string {
  return value + (theme?.numUnit ?? 'px');
}
export function toSpacing(
  value: string | number,
  theme?: Theme
): string | number {
  return Number(value) * (theme?.numScale ?? 1);
}
export function percentToHex(n: string | number): string {
  if (!n) {
    return '';
  }
  n = Number(n);
  // 1. 将百分比缩放到 0-255 范围
  const decimal = Math.round((n * 255) / 100);
  // 2. 转换为十六进制并确保两位
  const hex = decimal.toString(16).toUpperCase().padStart(2, '0');
  return hex;
}
export function round(n: number) {
  return +n.toFixed(10);
}
export function time(str: string) {
  const match = str.match(/^(-?[0-9.]+)(s|ms)?$/i);
  if (!match) return;
  const [, n, unit] = match;
  const num = Number.parseFloat(n);
  if (!Number.isNaN(num)) {
    if (num === 0 && !unit) return '0s';
    return unit ? `${round(num)}${unit}` : `${round(num)}ms`;
  }
}
