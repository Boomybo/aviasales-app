import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as actions from '../../actions/actions';

import styles from './RecommendationFilter.module.scss';

const RecommendationFilter = ({ setSortButton, sortButton }) => {
  let cheapestActiveBtn = classNames(styles['navigation__btn'], {
      [styles['navigation__btn--active']]: sortButton === 'cheapest' ? true : false,
    }),
    fastestActiveBtn = classNames(styles['navigation__btn'], {
      [styles['navigation__btn--active']]: sortButton === 'fastest' ? true : false,
    }),
    optimalActiveBtn = classNames(styles['navigation__btn'], {
      [styles['navigation__btn--active']]: sortButton === 'optimal' ? true : false,
    });

  return (
    <div className={styles['navigation-container']}>
      <ul className={styles.navigation}>
        <li>
          <button className={cheapestActiveBtn} name="cheapest" onClick={setSortButton}>
            Самый дешевый
          </button>
        </li>
        <li>
          <button className={fastestActiveBtn} name="fastest" onClick={setSortButton}>
            Самый быстрый
          </button>
        </li>
        <li>
          <button className={optimalActiveBtn} name="optimal" onClick={setSortButton}>
            Оптимальный
          </button>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(RecommendationFilter);
