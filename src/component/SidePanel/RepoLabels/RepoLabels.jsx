import React from 'react';
import PropTypes from 'prop-types';
import styles from './RepoLabels.module.scss';
import Label from '../../../utilities/Label';

const RepoLabels = ({ repoLabels }) => (
    <div className={styles.RepoLabels}>
    <h3>Repo Labels</h3>
    <div className={styles.LabelWrapper}>
      {repoLabels.map((label, i) => <Label color={label.color} labelName={label.name} key={i} />)}
    </div>
    </div>
);

RepoLabels.propTypes = { repoLabels: PropTypes.array.isRequired };

export default RepoLabels;
