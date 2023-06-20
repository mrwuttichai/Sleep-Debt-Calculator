const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

 if (actualSleepHours === idealSleepHours) {
  console.log('Perfect Sleep!');
  } else if (actualSleepHours > idealSleepHours) {
  console.log('You got ' + ( actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed this week.');
  } else if (actualSleepHours < idealSleepHours) {
   console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
};

calculateSleepDebt();
// prints : Perfect Sleep!