const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 6;
      case 'tuesday':
        return 6;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 6;
      case 'friday':
        return 6;
      case 'saturday':
        return 6;
      case 'sunday':
        return 6 ;
    }
  };
  //console.log(getSleepHours('tuesday')); // should print the # hours assigned to tuesday
  
  const getActualSleepHours = () =>
      getSleepHours('monday') +
      getSleepHours('tuesday') +
      getSleepHours('wednesday') +
      getSleepHours('thursday') +
      getSleepHours('friday') +
      getSleepHours('saturday') +
      getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 6;
    return idealHours * 7;
  };
  
  //console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
   
  //console.log(getIdealSleepHours()); // if idealHours is 7, should print 42
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
    console.log('Perfect Sleep!');
    } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + ( actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed this week.');
    } else if (actualSleepHours < idealSleepHours) {
     console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  };
  
  calculateSleepDebt();