/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}

function isWeekend(weekday: string) {
  if (weekday === "saturday" || weekday === "sunday") {
    return false;
  } else {
    return true;
  }
}

isWeekend(Weekday.sunday);
