import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import { Container } from "./style.jsx";
import { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const total = useMemo(() => {
    const { good, neutral, bad} = feedback;
    return good + neutral + bad;
  }, [feedback]);

  const positivePercentage = useMemo(() => {
    if (total === 0) {
      return 0;
    }
    return Math.floor(feedback.good * 100 / total);
  }, [total, feedback.good]);

  const onLeaveFeedback = useCallback(event => {
    const {value} = event.target;
    setFeedback(prevState => ({ ...prevState, [value]: prevState[value] + 1 }));
  }, []);

  return(
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistic">
      {total >= 1 
        ? (<Statistics 
            good={feedback.good} 
            neutral={feedback.neutral} 
            bad={feedback.bad} 
            total={total} 
            positivePercentage={positivePercentage} 
          />) 
        : <Notification message="There is no feedback"></Notification>}
      </Section>
    </Container>
  );
  
};
