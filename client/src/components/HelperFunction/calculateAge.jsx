export const getAge = (dobYear, dobMonth, dobDate) => {
  let now = new Date();
  let currentYear = now.getYear();
  let currentMonth = now.getMonth();
  let currentDate = now.getDate();
  let age = {};
  let ageString = "";
  let yearAge = currentYear - dobYear;

  let monthAge;
  let dateAge;

  //get months
  if (currentMonth >= dobMonth) {
    //get months when current month is greater
    monthAge = currentMonth - dobMonth;
  } else {
    yearAge--;
    monthAge = 12 + currentMonth - dobMonth;
  }

  //get days
  if (currentDate >= dobDate) {
    //get days when the current date is greater
    dateAge = currentDate - dobDate;
  } else {
    monthAge--;
    dateAge = 31 + currentDate - dobDate;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }
  //group the age in a single variable

  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };

  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString = age.years + "Y " + age.months + "M " + age.days + "D";
  else if (age.years === 0 && age.months === 0 && age.days > 0)
    ageString = age.years + "Y " + age.months + "M " + age.days + "D";
  //when current month and date is same as birth date and month
  else if (age.years > 0 && age.months === 0 && age.days === 0)
    ageString = age.years + "Y " + age.months + "M " + age.days + "D";
  else if (age.years > 0 && age.months > 0 && age.days === 0)
    ageString = age.years + "Y " + age.months + "M " + age.days + "D";
  else if (age.years === 0 && age.months > 0 && age.days > 0)
    ageString = age.years + "Y " + age.months + "M " + age.days + "D";
  else if (age.years > 0 && age.months === 0 && age.days > 0)
    ageString = age.years + "Y " + age.months + "M " + age.days + "D";
  else if (age.years === 0 && age.months > 0 && age.days === 0)
    ageString = age.years + "Y " + age.months + "M " + age.days + "D";
  //when current date is same as dob(date of birth)
  else ageString = age.years + "Y " + age.months + "M " + age.days + "D";
  return ageString;
};
