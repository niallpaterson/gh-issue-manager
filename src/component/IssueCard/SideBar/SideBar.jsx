import React from "react";
import styles from "./SideBar.module.scss";
import IssueNumber from "../../../utilities/IssueNumber";
import Label from "../../../utilities/Label";

const SideBar = ({ number, labels }) => (
<aside className={styles.SideBar}>
  <IssueNumber issueNumber={number} />
  <div className={styles.LabelContainer}>
    {labels.map((label, index) => <Label key={index} labelName={label.name} color={label.color}/>)}
  </div>
</aside>
);

export default SideBar;
