export function getOverallScore(timedValue, errorCount, errorPenaltySecs) {
  return timedValue + errorCount * errorPenaltySecs;
}
