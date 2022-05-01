const minAndSec = (hourses, minuteses) => {
  if (String(hourses).length == 1 || String(minuteses).length == 1) {
    if (String(hourses).length == 1 && String(minuteses).length == 1) {
      return `0${hourses}:0${minuteses}`;
    } else if (String(hourses).length == 1) {
      return `0${hourses}:${minuteses}`;
    } else if (String(minuteses).length == 1) {
      return `${hourses}:0${minuteses}`;
    }
  } else {
    return `${hourses}:${minuteses}`;
  }
};

export const getDate = (date, duration) => {
  let hours = new Date(date).getHours(),
    minutes = new Date(date).getMinutes(),
    secondHours = Math.trunc(duration / 60) + hours,
    secondMin = (duration % 60) + minutes;

  if (secondHours >= 23 || secondMin >= 60) {
    if (secondHours >= 23 && secondMin >= 60) {
      secondMin -= 60;
      secondHours = secondHours - 24 + 1;
    } else if (secondMin >= 60) {
      secondMin -= 60;
      secondHours += 1;
    } else if (secondHours >= 24) {
      secondHours -= 24;
    }
  }

  return `${minAndSec(hours, minutes)} – ${minAndSec(secondHours, secondMin)}`;
};

export const inRoute = (date) => {
  return `${Math.trunc(date / 60)}ч ${date % 60}м`;
};

export const getPrice = (num) => {
  if (String(num).length == 4) {
    return `${String(num).slice(0, 1)} ${String(num).slice(1)}`;
  } else if (String(num).length == 5) {
    return `${String(num).slice(0, 2)} ${String(num).slice(2)}`;
  } else if (String(num).length == 6) {
    return `${String(num).slice(0, 3)} ${String(num).slice(3)}`;
  }
  return num;
};

export const getNumberOfTransfers = (array) => {
  if (array.length > 1) {
    return `${array.length} пересадки`;
  } else if (array.length == 1) {
    return '1 пересадка';
  }
  return 'Без пересадок';
};

export const setTransfers = (arr) => {
  if (arr.length == 0) {
    return arr;
  }
  return arr.join(', ');
};

export const setTicketsWithFilter = (
  allCheck,
  withoutTransfer,
  oneTransfer,
  twoTransfers,
  threeTransfers,
  callBack,
  ticket
) => {
  if (allCheck) {
    return ticket;
  } else if (withoutTransfer || oneTransfer || twoTransfers || threeTransfers) {
    if (withoutTransfer && oneTransfer && twoTransfers) {
      if (callBack(0) !== 0 || callBack(1) !== 0 || callBack(2) !== 0) {
        return ticket;
      }
    } else if (withoutTransfer && oneTransfer && threeTransfers) {
      if (callBack(0) !== 0 || callBack(1) !== 0 || callBack(3) !== 0) {
        return ticket;
      }
    } else if (oneTransfer && twoTransfers && threeTransfers) {
      if (callBack(1) !== 0 || callBack(2) !== 0 || callBack(3) !== 0) {
        return ticket;
      }
    } else if (withoutTransfer && oneTransfer) {
      if (callBack(0) !== 0 || callBack(1) !== 0) {
        return ticket;
      }
    } else if (withoutTransfer && twoTransfers) {
      if (callBack(0) !== 0 || callBack(2) !== 0) {
        return ticket;
      }
    } else if (withoutTransfer && threeTransfers) {
      if (callBack(0) !== 0 || callBack(3) !== 0) {
        return ticket;
      }
    } else if (oneTransfer && twoTransfers) {
      if (callBack(1) !== 0 || callBack(2) !== 0) {
        return ticket;
      }
    } else if (oneTransfer && threeTransfers) {
      if (callBack(1) !== 0 || callBack(3) !== 0) {
        return ticket;
      }
    } else if (twoTransfers && threeTransfers) {
      if (callBack(2) !== 0 || callBack(3) !== 0) {
        return ticket;
      }
    } else if (withoutTransfer) {
      if (callBack(0) !== 0) {
        return ticket;
      }
    } else if (oneTransfer) {
      if (callBack(1) !== 0) {
        return ticket;
      }
    } else if (twoTransfers) {
      if (callBack(2) !== 0) {
        return ticket;
      }
    } else if (threeTransfers) {
      if (callBack(3) !== 0) {
        return ticket;
      }
    }
  }
};

export const sorted = (typeOfSort, array) => {
  if (typeOfSort === 'cheapest') {
    return [...array.sort((a, b) => a.props.price - b.props.price)];
  } else if (typeOfSort === 'fastest') {
    return array.sort((a, b) => a.props.segments[0].duration - b.props.segments[0].duration);
  } else {
    return array;
  }
};
