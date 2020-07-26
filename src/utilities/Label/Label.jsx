const Label = ({ labelName, color }) => (
  <div className={styles.label} style={{ background: color }}>{labelName}</div>
);

const Label = (props) => <div className={styles.label} style={{background: props.color}}>{props.labelName}</div>

export default Label;
