const Feedback = ({ feedback }) => {
  return (
    <div className="feedback">
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
    </div>
  );
};

export default Feedback;
