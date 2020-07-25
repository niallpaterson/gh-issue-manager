import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
const App = () => {

  const cleanLabels = (labels) => labels.map((label) => ({ name: label.name, color: label.color }));
  const cleanIssues = (issues) => issues.map((issue) => ({ title: issue.title, number: issue.number, labels: cleanLabels(issue.labels), body: issue.body }));
  return (
   <div className={styles.pageWrapper}>
   </div>
  );
  }

export default App;
