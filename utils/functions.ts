export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const isEmpty = (object) => {
  return (
    !object ||
    object === undefined ||
    object === null ||
    (typeof object === "string" && object.trim().length === 0) ||
    (object?.length !== undefined && object.length === 0) ||
    (typeof object === "object" && Object.keys(object).length === 0)
  );
};

export const ConvertMyDate = (date) => {
  date = new Date(date).toLocaleString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return date;
};
