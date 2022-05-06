import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import icon from '../../img/Logo (1).svg';
import TransferFilter from '../TransferFilter';
import RecommendationFilter from '../RecommendationFilter';
import Tickets from '../Tickets';
import * as actions from '../../actions/actions';

import styles from './App.module.scss';

const App = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <img src={icon} alt="logo" className={styles['main-logo']}></img>
      </header>
      <div className={styles['content-container']}>
        <TransferFilter />
        <main className={styles.main}>
          <RecommendationFilter />
          <Tickets />
        </main>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(App);
