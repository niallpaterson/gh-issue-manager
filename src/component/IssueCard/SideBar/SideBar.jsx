import React from "react";
import styles from "./SideBar.module.scss";
import IssueNumber from "../../../utilities/IssueNumber";
import Label from "../../../utilities/Label";

const SideBar = ({number, labels}) => {
  return (
<aside className={styles.SideBar}>
  <IssueNumber issueNumber={number} />
  <div className={styles.LabelContainer}>
    {labels.map((label, index) => <Label labelName={labels[index]}/>)}
  </div>
</aside>
  )
}

export default SideBar;
