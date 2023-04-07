export interface Range {
  start: number;
  end: number;
}

export function rangeContains(range: Range, value: number): boolean {
  return range.start <= value && range.end >= value;
}
