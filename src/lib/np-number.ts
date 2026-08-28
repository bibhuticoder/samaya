export const NP_NUM_MAP: Record<string, string> = {
  '0': '०',
  '1': '१',
  '2': '२',
  '3': '३',
  '4': '४',
  '5': '५',
  '6': '६',
  '7': '७',
  '8': '८',
  '9': '९',
};

export const EN_NUM_MAP: Record<string, string> = {
  '०': '0',
  '१': '1',
  '२': '2',
  '३': '3',
  '४': '4',
  '५': '5',
  '६': '6',
  '७': '7',
  '८': '8',
  '९': '9',
};

export function toNpNumber(number: number | string | null | undefined): string {
  if (number === null || number === undefined) return '';
  const strNum = String(number);
  return strNum
    .split('')
    .map((n) => NP_NUM_MAP[n] || n)
    .join('');
}

export function toEnNumber(number: string | null | undefined): string {
  if (!number) return '';
  return number
    .split('')
    .map((n) => EN_NUM_MAP[n] || n)
    .join('');
}
