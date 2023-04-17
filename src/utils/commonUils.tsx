import moment from "moment";

export const formatDateString = (
  dateString: string | Date,
  format: string
): string => {
  return moment.utc(dateString).local().format(format);
};
