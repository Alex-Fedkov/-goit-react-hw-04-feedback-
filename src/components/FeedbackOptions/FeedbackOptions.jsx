import PropTypes from "prop-types";
import { Button } from "./style.jsx"

const FeedbackOptions = ({options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (<Button key={option} value={option} onClick={onLeaveFeedback}>{option}</Button>);
      })}
    </div>
  );
};


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;