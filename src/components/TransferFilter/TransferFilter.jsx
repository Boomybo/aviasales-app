import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';
import MySpin from '../MySpin';

import styles from './TransferFilter.module.scss';

const TransferFilter = ({ filterReducer, addTransferFilter, deleteTransferFilter, allFilterChecked, checkAll }) => {
  const { allCheck, filters } = filterReducer;

  const hadlerForFilterBtn = (e) => {
    if (e.target.checked) {
      checkAll();
      return addTransferFilter(e);
    }
    return deleteTransferFilter(e);
  };

  return (
    <aside className={styles.aside}>
      <h3 className={styles['stops-counter']}>Количество Пересадок</h3>
      <ul className={styles.filters}>
        <li className={styles.filter}>
          <label className={styles['filter-label']}>
            <input
              type="checkbox"
              className={styles['label-input']}
              name="all-transfers"
              onChange={allFilterChecked}
              checked={allCheck}
            ></input>
            <span className={styles['check__box']}></span>
            Все
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles['filter-label']}>
            <input
              type="checkbox"
              className={styles['label-input']}
              name="without-tranfers"
              onChange={hadlerForFilterBtn}
              checked={allCheck ? allCheck : filters[0].isChecked}
            />
            <span className={styles['check__box']}></span>
            Без пересадок
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles['filter-label']}>
            <input
              type="checkbox"
              className={styles['label-input']}
              name="one-transfer"
              onChange={hadlerForFilterBtn}
              checked={allCheck ? allCheck : filters[1].isChecked}
            />
            <span className={styles['check__box']}></span>1 пересадка
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles['filter-label']}>
            <input
              type="checkbox"
              className={styles['label-input']}
              name="two-transfer"
              id={2}
              onChange={hadlerForFilterBtn}
              checked={allCheck ? allCheck : filters[2].isChecked}
            />
            <span className={styles['check__box']}></span>2 пересадки
          </label>
        </li>
        <li className={styles.filter}>
          <label className={styles['filter-label']}>
            <input
              type="checkbox"
              className={styles['label-input']}
              name="three-transfer"
              onChange={hadlerForFilterBtn}
              checked={allCheck ? allCheck : filters[3].isChecked}
            />
            <span className={styles['check__box']} name="three-transfer"></span>3 пересадки
          </label>
        </li>
      </ul>
      <MySpin />
    </aside>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(TransferFilter);
