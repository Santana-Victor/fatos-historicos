function checkSize(yearEntered: string) {
  return yearEntered.length === 4;
}

function isNumber(yearEntered: string) {
  const year = Number(yearEntered);
  return !isNaN(year);
}

function checkRange(yearEntered: string) {
  return Number(yearEntered) >= 1920 && Number(yearEntered) <= 2020;
}

export function validateYearEntered(yearEntered: string) {
  if (
    checkSize(yearEntered) &&
    isNumber(yearEntered) &&
    checkRange(yearEntered)
  ) {
    return true;
  } else {
    return false;
  }
}
