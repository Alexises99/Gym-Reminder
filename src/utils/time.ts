const msInADay = 24 * 60 * 60 * 1000
const msInAWeek = 7 * msInADay

/**
 * Initializes a date range in milliseconds representing a weekly period centered on a given date.
 *
 * @param initialGap - The number of weeks to include in the radius.
 * @param date - The starting date, defaulting to the current date.
 * @returns A tuple where:
 *          - The first element is the timestamp for the center.
 *          - The second element is the duration in milliseconds representing the radius.
 */
function initializeRangeWeeks(
  initialGap: number,
  date = new Date()
): [number, number] {
  const actual = date
  // Set the prev monday
  actual.setDate(actual.getDate() - actual.getDay() + 1)
  actual.setHours(0, 0, 0, 0)

  const radius = initialGap * msInAWeek
  return [actual.getTime(), radius]
}

/**
 * Generates a range of timestamps representing each week between two timestamps.
 *
 * @param startMs - The starting timestamp in milliseconds.
 * @param endMs - The ending timestamp in milliseconds.
 * @returns An array of timestamps, each representing the start of a week within the range.
 */
function getWeeksRange(startMs: number, endMs: number) {
  const weeks: number[] = []

  const actual = new Date(startMs)
  actual.setDate(actual.getDate() - actual.getDay() + 1)
  actual.setHours(0, 0, 0, 0)
  actual.setDate(actual.getDate())

  while (actual.getTime() <= endMs) {
    weeks.push(actual.getTime())
    actual.setDate(actual.getDate() + 7)
  }

  return weeks
}

/**
 * Gets the week number from a timestamp, assuming the first Monday of the year as the starting week.
 *
 * @param milliseconds - The timestamp in milliseconds.
 * @returns The calculated week number for the given date.
 */
function getWeekByMs(milliseconds: number) {
  const date = new Date(milliseconds)
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  const firstMonday = new Date(startOfYear)
  // Set the prev monday
  firstMonday.setDate(startOfYear.getDate() - startOfYear.getDay() + 1)
  const daysSinceFirstMonday = Math.floor((+date - +firstMonday) / msInADay)
  const week = Math.ceil((daysSinceFirstMonday + 1) / 7)

  return week > 0 ? week : 1
}

/**
 * Gets the week number for a specific date based on ISO-8601.
 *
 * @param date - The date for which to calculate the week number.
 * @returns The ISO week number for the date.
 */
function getWeekNumber(date: Date) {
  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + 3 - (date.getDay() || 7))

  const firstThursday = new Date(date.getFullYear(), 0, 4)

  const diff = (+date - +firstThursday) / msInADay

  return Math.ceil((diff + firstThursday.getDay() + 1) / 7)
}

const timeUtils = {
  initializeRangeWeeks,
  getWeeksRange,
  getWeekByMs,
  getWeekNumber
}

export default timeUtils
