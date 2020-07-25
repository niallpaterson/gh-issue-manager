import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
const App = () => {

  const [issues, setIssues] = useState([]);
  const cleanLabels = (labels) => labels.map((label) => ({ name: label.name, color: label.color }));
  const cleanIssues = (issues) => issues.map((issue) => ({ title: issue.title, number: issue.number, labels: cleanLabels(issue.labels), body: issue.body }));
  const fetchIssues = (searchTerm) => {
    fetch(`https://api.github.com/repos/${repo}/issues`)
    .then((response) => response.json())
    .then((data) => setIssues(cleanIssues(data)))
    .catch((err) =>  { if (err) throw err; })
  }
  return (
   <div className={styles.pageWrapper}>
   </div>
  );
  }

export default App;
