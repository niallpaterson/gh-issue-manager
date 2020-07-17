import React from "react";
import styles from "./Label.module.scss";

const Label = (props) => <div className={styles.label} style={{background: props.color}}>{props.labelName}</div>

export default Label;
