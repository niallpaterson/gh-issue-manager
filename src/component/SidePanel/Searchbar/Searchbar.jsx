import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.scss';

const Searchbar = ({ fetchRepo }) => (
  <input
    onKeyDown={(e) => { if (e.key === 'Enter') fetchRepo(e.target.value); }}
    className={styles.Searchbar}
    placeholder={'Enter user/repo'}
  />
);

Searchbar.propTypes = {
  fetch: PropTypes.func.isRequired,
};

export default Searchbar;
