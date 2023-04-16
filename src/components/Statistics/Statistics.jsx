import PropTypes from "prop-types";
import { StatsList, Label } from "./style.jsx";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <StatsList>Good: <Label>{good}</Label></StatsList>
      <StatsList>Neutral: <Label>{neutral}</Label></StatsList>
      <StatsList>Bad: <Label>{bad}</Label></StatsList>
      <StatsList>Total: <Label>{total}</Label></StatsList>
      <StatsList>Positive Percentage: <Label>{positivePercentage}</Label>%</StatsList>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}

export default Statistics;
