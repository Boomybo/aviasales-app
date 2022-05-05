import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import styles from '../MySpin/MySpin.module.scss';
import * as actions from '../../actions/actions';

const MySpin = ({ loader }) => {
  const load = !loader ? (
    <div className={styles['loader-container']}>
      <p className={styles['loader-text']}>Билеты еще загружаются</p>
      <Spin size="large" />
    </div>
  ) : null;

  return load;
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(MySpin);
