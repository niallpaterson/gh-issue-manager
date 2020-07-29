import React from 'react';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';
import styles from './MainContent.module.scss';

const MainContent = ({ title, body }) => (
  <div className={styles.MainContent}>
  <h3>
    {title}
  </h3>
  <Markdown>{body}</Markdown>
  </div>
);

MainContent.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
};

export default MainContent;
