export const getCSSPropertyValue = (cssProperty: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(cssProperty);
}
