import format from 'date-fns/format';

export function getCurrentPuzzleId(): string {
  return format(new Date(), 'dd-MM-yyyy');
}
