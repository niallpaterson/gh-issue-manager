import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import IssuePanel from "./container/IssuePanel"
import SidePanel from './component/SidePanel';

const App = () => {

  const [repo, setRepo] = useState(['cli/cli']);
  const [repoLabels, setRepoLabels] = useState([]);
  const [issues, setIssues] = useState([]);

  const cleanLabels = (labels) => labels.map((label) => ({ name: label.name, color: label.color }));
  const cleanIssues = (issues) => issues.map((issue) => ({ title: issue.title, number: issue.number, labels: cleanLabels(issue.labels), body: issue.body }));

  const fetchIssues = (searchTerm) => {
    fetch(`https://api.github.com/repos/${repo}/issues`)
    .then((response) => response.json())
    .then((data) => setIssues(cleanIssues(data)))
    .catch((err) =>  { if (err) throw err; })
  }

  const fetchLabels = (repo) => {
    fetch(`https://api.github.com/repos/${repo}/labels`)
    .then((response) => response.json())
    .then((labels) => setRepoLabels(cleanLabels(labels)))
  const fetchRepo = (searchTerm) => {
    fetch(`https://api.github.com/repos/${searchTerm}/issues`)
      .then((response) => { if (response.status === 200) setRepo(searchTerm); })
      .catch((err) => { if (err) throw err; });
  };

  useEffect(() => ( fetchIssues(repo), fetchLabels(repo) ), [repo]);

  return (
   <div className={styles.pageWrapper}>
    <SidePanel repo={repo} repoLabels={repoLabels}/>
    <main>
      <h2>{`github.com/${repo}`}</h2>
      <IssuePanel issues={issues}/>
    </main>
   </div>
  );
  }

export default App;
