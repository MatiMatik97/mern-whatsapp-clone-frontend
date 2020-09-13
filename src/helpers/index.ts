export const formatDate = (timestamp: string) => {
  if (timestamp) {
    return new Date(Number(timestamp)).toLocaleString("pl-PL", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
  
  return " ";
};
