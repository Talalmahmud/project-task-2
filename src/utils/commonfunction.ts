export const capitalizeString = (str: string) => {
  if (!str) return str; // Check for empty string

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};
