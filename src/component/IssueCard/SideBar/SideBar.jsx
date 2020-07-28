import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideBar.module.scss';
import IssueNumber from '../../../utilities/IssueNumber';
import Label from '../../../utilities/Label';

const SideBar = ({ number, labels }) => (
<aside className={styles.SideBar}>
  <IssueNumber issueNumber={number} />
  <div className={styles.LabelContainer}>
    {labels.map((label, index) => <Label key={index} labelName={label.name} color={label.color}/>)}
  </div>
</aside>
);

SideBar.propTypes = {
  number: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default SideBar;
