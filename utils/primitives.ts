export const applyEllipse = (
  text: string,
  first: number = 6,
  last: number = 4,
  ellipsis: string = "..."
): string => {
  if (!text || text.trim().length === 0) return text;

  return text.replace(text.slice(first, text.length - last), ellipsis);
};
