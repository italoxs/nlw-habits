export function generateProgressPercentage(toral: number, completed: number) {
  return Math.round((toral / completed) * 100);
}
