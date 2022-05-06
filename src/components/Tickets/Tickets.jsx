import React from 'react';
import { connect } from 'react-redux';

import Ticket from '../Ticket';
import MySpin from '../MySpin';
import { setTicketsWithFilter, sorted } from '../../utils/helpers';
import * as actions from '../../actions/actions';

import styles from './Tickets.module.scss';

let startArray = 0;

const Tickets = ({ receiveTickets, setVisibleTickets, visibleTickets, filterReducer, sortButton, error }) => {
  const firstTickets = visibleTickets.length === 0 ? receiveTickets.slice(0, 5) : visibleTickets;

  const withoutTransfer = filterReducer.filters[0].isChecked,
    oneTransfer = filterReducer.filters[1].isChecked,
    twoTransfers = filterReducer.filters[2].isChecked,
    threeTransfers = filterReducer.filters[3].isChecked;

  let elements = firstTickets.map((value, index) => {
    const { ...props } = value;

    const oneTicket = <Ticket {...props} key={index} />;

    const ticketsWithFilter = (numberOfFilters) =>
      value.segments.filter((val) => val.stops.length == numberOfFilters).length;

    return setTicketsWithFilter(
      filterReducer.allCheck,
      withoutTransfer,
      oneTransfer,
      twoTransfers,
      threeTransfers,
      ticketsWithFilter,
      oneTicket
    );
  });

  sorted(sortButton, elements);

  const visibleElem = () => {
    setVisibleTickets([...receiveTickets.slice(startArray, startArray + 5)]);
    return (startArray += 5);
  };

  const loading = receiveTickets.length === 0 ? <MySpin /> : elements;

  const newElem =
    !withoutTransfer && !oneTransfer && !twoTransfers && !threeTransfers ? <MyError flag={true} /> : loading;

  const errs = error ? <MyError flag={false} /> : newElem;

  let moreBtn;
  if (
    (!withoutTransfer && !oneTransfer && !twoTransfers && !threeTransfers) ||
    receiveTickets.length === visibleTickets.length
  ) {
    moreBtn = null;
  } else {
    moreBtn = <MoreBtn visibleElem={visibleElem} />;
  }

  return (
    <ul className={styles.cards}>
      {errs}
      {moreBtn}
    </ul>
  );
};

const MoreBtn = ({ visibleElem }) => {
  return (
    <li className={styles['card-more-btn']}>
      <button className={styles['more-btn']} onClick={visibleElem}>
        Показать еще билеты
      </button>
    </li>
  );
};

const MyError = ({ flag }) => {
  if (flag) {
    return (
      <div className={styles.message}>
        <p>По вашему запросу ничего не было найдено</p>
      </div>
    );
  }
  return (
    <div className={styles.message}>
      <p>Something get wrong. Try to reload page</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(Tickets);
