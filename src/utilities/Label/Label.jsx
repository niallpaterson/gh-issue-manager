import PropTypes from 'prop-types';
const Label = ({ labelName, color }) => (
  <div className={styles.label} style={{ background: color }}>{labelName}</div>
);

Label.propTypes = {
  labelName: PropTypes.string.isRequired,
  labelColo: PropTypes.string.isRequired,
};

export default Label;
