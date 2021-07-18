/* eslint-disable no-extend-native */
export default function () {
  Date.prototype.daysInMonth = function () {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    return 33 - new Date(currentYear, currentMonth, 33).getDate()
  }
  return new Date().daysInMonth()
}
