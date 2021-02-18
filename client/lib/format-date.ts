import { format } from 'date-fns';

export const toDate = (date: string): string => {
  return format(new Date(date), "MMMM d',' Y");
};
