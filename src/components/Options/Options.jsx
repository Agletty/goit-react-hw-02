import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button
        onClick={() => resetFeedback()}
        style={{ display: totalFeedback > 0 ? "block" : "none" }}
      >
        Reset{" "}
      </button>
    </div>
  );
};

export default Options;
