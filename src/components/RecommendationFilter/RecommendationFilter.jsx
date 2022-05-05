import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';
import styles from '../RecommendationFilter/RecommendationFilter.module.scss';

const RecommendationFilter = ({ setSortButton }) => {
  return (
    <div className={styles['navigation-container']}>
      <ul className={styles.navigation}>
        <li>
          <button className={styles['navigation__btn']} name="cheapest" onClick={setSortButton}>
            Самый дешевый
          </button>
        </li>
        <li>
          <button className={styles['navigation__btn']} name="fastest" onClick={setSortButton}>
            Самый быстрый
          </button>
        </li>
        <li>
          <button className={styles['navigation__btn']} name="optimal" onClick={setSortButton}>
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
