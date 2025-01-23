export const capitalize = (s: string): string => {
  const firstChar = s.charAt(0);
  const slicedChars = s.slice(1);
  return `${firstChar.toUpperCase()}${slicedChars}`;
};
