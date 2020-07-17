import React from "react";
import styles from "./MainContent.module.scss";

const MainContent = ({ title, description }) => <div className={styles.MainContent}><h3>{title}</h3><p>{description}</p></div>

export default MainContent;
