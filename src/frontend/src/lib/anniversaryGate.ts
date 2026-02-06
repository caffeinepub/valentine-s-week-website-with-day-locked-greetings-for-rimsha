// Anniversary gate utilities

export const EXPECTED_ANNIVERSARY_DATE = "13 June 2021";

/**
 * Normalize user input for comparison
 * Handles various date formats and whitespace
 */
export function normalizeDate(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, ' ');
}

/**
 * Validate if the provided date matches the expected anniversary date
 */
export function validateAnniversaryDate(input: string): boolean {
  const normalized = normalizeDate(input);
  const expected = normalizeDate(EXPECTED_ANNIVERSARY_DATE);
  return normalized === expected;
}
