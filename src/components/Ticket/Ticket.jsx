import React from 'react';

import { getPrice, getDate, inRoute, getNumberOfTransfers, setTransfers } from '../../utils/helpers';

import styles from './Ticket.module.scss';

const Ticket = ({ price, carrier, segments }) => {
  return (
    <li className={styles.card}>
      <ul className={styles['price-logo']}>
        <li className={styles.price}>{getPrice(price)}</li>
        <li className={styles.logo}>
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="company logo" />
        </li>
      </ul>
      <div className={styles['card-info-container']}>
        <ul className={styles.info}>
          <li className={styles['route-info']}>
            {segments[0].origin} – {segments[0].destination}
          </li>
          <li className={styles['total-info']}>{getDate(segments[0].date, segments[0].duration)}</li>
        </ul>
        <ul className={styles.info}>
          <li className={styles['route-info']}>В пути</li>
          <li className={styles['total-info']}>{inRoute(segments[0].duration)}</li>
        </ul>
        <ul className={styles.info}>
          <li className={styles['route-info']}>{getNumberOfTransfers(segments[0].stops)}</li>
          <li className={styles['total-info']}>{setTransfers(segments[0].stops)}</li>
        </ul>
        <ul className={styles.info}>
          <li className={styles['route-info']}>
            {segments[1].origin} – {segments[1].destination}
          </li>
          <li className={styles['total-info']}>{getDate(segments[1].date, segments[1].duration)}</li>
        </ul>
        <ul className={styles.info}>
          <li className={styles['route-info']}>В пути</li>
          <li className={styles['total-info']}>{inRoute(segments[1].duration)}</li>
        </ul>
        <ul className={styles.info}>
          <li className={styles['route-info']}>{getNumberOfTransfers(segments[1].stops)}</li>
          <li className={styles['total-info']}>{setTransfers(segments[1].stops)}</li>
        </ul>
      </div>
    </li>
  );
};

export default Ticket;
