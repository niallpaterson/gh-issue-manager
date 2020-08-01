import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.scss';
import colorContrast from './colorContrast.mjs';

const Label = ({ labelName, color }) => (
  <div className={styles.label} style={{ background: `#${color}`, color: colorContrast(`#${color}`) }}>{labelName}</div>
);

Label.propTypes = {
  labelName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Label;
