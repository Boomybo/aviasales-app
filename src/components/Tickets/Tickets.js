import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import Ticket from '../Ticket/Ticket';
import { setTicketsWithFilter, sorted } from '../../helpers';
import * as actions from '../../actions/actions';
import 'antd/dist/antd.css';
import styles from '../Tickets/Tickets.module.scss';

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

  const loading = receiveTickets.length === 0 ? <Spins /> : elements;

  const newElem = !withoutTransfer && !oneTransfer && !twoTransfers && !threeTransfers ? <NothingWasFound /> : loading;

  const errs = error ? <MyError /> : newElem;

  return (
    <ul className={styles.cards}>
      {errs}
      <li className={styles['card-more-btn']}>
        <button className={styles['more-btn']} onClick={visibleElem}>
          Показать еще билеты
        </button>
      </li>
    </ul>
  );
};

const NothingWasFound = () => {
  return (
    <div className={styles.message}>
      <p>По вашему запросу ничего не было найдено</p>
    </div>
  );
};

const Spins = () => {
  return (
    <div className={styles['container-spin']}>
      <Spin size="large" className={styles.spin} />
    </div>
  );
};

const MyError = () => {
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
