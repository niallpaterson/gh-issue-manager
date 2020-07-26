import React from "react";
import styles from "./MainContent.module.scss";

const MainContent = ({ title, body }) => <div className={styles.MainContent}><h3>{title}</h3><p>{body}</p></div>


export default MainContent;
