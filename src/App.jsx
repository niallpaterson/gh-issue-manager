import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import IssuePanel from './container/IssuePanel';
import SidePanel from './component/SidePanel';

const App = () => {
  const [repo, setRepo] = useState(['niallpaterson/gh-issue-manager']);
  const [repoLabels, setRepoLabels] = useState([]);
  const [issues, setIssues] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  const cleanLabels = (labels) => labels.map((label) => ({ name: label.name, color: label.color }));
  const cleanIssues = (rawIssues) => rawIssues.map((issue) => (
    {
      title: issue.title,
      number: issue.number,
      labels: cleanLabels(issue.labels),
      body: issue.body,
    }
  ));

  const fetchIssues = (searchTerm) => {
    fetch(`https://api.github.com/repos/${searchTerm}/issues`)
      .then((response) => response.json())
      .then((data) => setIssues(cleanIssues(data)))
      .catch((err) => { if (err) throw err; });
  };

  const fetchLabels = (repo) => {
    fetch(`https://api.github.com/repos/${repo}/labels`)
      .then((response) => response.json())
      .then((labels) => setRepoLabels(cleanLabels(labels)))
      .catch((err) => { if (err) throw err; });
  };

  const fetchRepo = (repository) => {
    fetch(`https://api.github.com/repos/${repository}/issues`)
      .then((response) => {
        if (response.status === 200) {
          setRepo(repository);
          setFetchError(false);
        } else {
          setFetchError(true);
        }
      })
      .catch((err) => { if (err) throw err; });
  };

  useEffect(() => { if (!fetchError) { fetchIssues(repo); } }, [repo]);
  useEffect(() => { if (!fetchError) { fetchLabels(repo); } }, [repo]);

  const renderIssuePanel = () => (!fetchError ? <IssuePanel issues={issues} /> : <div></div>);
  const renderHeader = () => (!fetchError ? `${repo}` : '404: Repo not found');

  return (
    <div className={styles.pageWrapper}>
      <SidePanel fetchRepo={fetchRepo} repo={repo} repoLabels={repoLabels} />
      <main>
        <h2>{renderHeader()}</h2>
        {renderIssuePanel()}
      </main>
    </div>
  );
};

export default App;
