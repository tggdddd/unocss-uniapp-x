export function addUnit(value, theme) {
  var _a;
  return (
    value +
    ((_a = theme === null || theme === void 0 ? void 0 : theme.numUnit) !==
      null && _a !== void 0
      ? _a
      : 'px')
  );
}
export function toSpacing(value, theme) {
  var _a;
  return (
    Number(value) *
    ((_a = theme === null || theme === void 0 ? void 0 : theme.numScale) !==
      null && _a !== void 0
      ? _a
      : 1)
  );
}
export function percentToHex(n) {
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
export function round(n) {
  return +n.toFixed(10);
}
export function time(str) {
  const match = str.match(/^(-?[0-9.]+)(s|ms)?$/i);
  if (!match) return;
  const [, n, unit] = match;
  const num = Number.parseFloat(n);
  if (!Number.isNaN(num)) {
    if (num === 0 && !unit) return '0s';
    return unit ? `${round(num)}${unit}` : `${round(num)}ms`;
  }
}
