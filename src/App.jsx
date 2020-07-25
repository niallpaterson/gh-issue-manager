import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
const App = () => {

  const cleanLabels = (labels) => labels.map((label) => ({ name: label.name, color: label.color }));
  return (
   <div className={styles.pageWrapper}>
   </div>
  );
  }

export default App;
