export const dateMatch = (birthDate) => {
  const birthDay = Number(birthDate.days);
  const birthMonth = Number(birthDate.months);
  const birthYears = Number(birthDate.years);

  const todayDate = new Date();
  let todayDay = todayDate.getDate();
  let todayMonth = 1 + todayDate.getMonth();
  let todayYears = todayDate.getFullYear();
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birthDay > todayDay) {
    todayDay = todayDay + months[todayMonth - 1];
    todayMonth = todayMonth - 1;
  }
  if (birthMonth > todayMonth) {
    todayMonth = todayMonth + 12;
    todayYears = todayYears - 1;
  }
  let day = todayDay - birthDay;
  let month = todayMonth - birthMonth;
  let years = todayYears - birthYears;

  return { days: day, months: month, years: years };
};
