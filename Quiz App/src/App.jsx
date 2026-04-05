import React, { useEffect, useState } from 'react'
import { arrayShuffle } from 'array-shuffle';
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)


  useEffect(() => {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

 const changeQuestion = () => {
  if (!selected) return;

  if (selected === data[questionIndex].correctAnswer) {
    setScore(prev => prev + 10);
  }

  setSelected(null);

  if (questionIndex < 9) {
    setQuestionIndex(prev => prev + 1);
  } else {
    setResult(true);
  }
};
  return (
    
    <div className="app-container">
      <div className="quiz-card">

        <h1 className="title">Quiz App</h1>
        <div className="progress">
  <div className="progress-top">
    <span>Q {questionIndex + 1}/10</span>
    <span>{score} pts</span>
  </div>
  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{ width: `${(questionIndex + 1) * 10}%` }}
    ></div>
  </div>
</div>

        {loading && <h2 className="status">Loading...</h2>}
        {error && <h2 className="status">Error occurred</h2>}

        {result && (
          <div className="result">
            Score {score} / 100
          </div>
        )}

        {!result && data && (
          <>
            <h2 className="question">
              Q{questionIndex + 1}: {data[questionIndex].question.text}
            </h2>

         {arrayShuffle([
  ...data[questionIndex].incorrectAnswers,
  data[questionIndex].correctAnswer
]).map((item, index) => {
  return (
    <label
      key={index}
      className={`option ${selected === item ? "selected" : ""}`}
    >
      <input
        type="radio"
        name="quiz"
        value={item}
        checked={selected === item}
        onChange={() => setSelected(item)}
      />
      {item}
    </label>
  );
})}

            <button className="btn" onClick={changeQuestion}>
              Next
            </button>
          </>
        )}

      </div>
    </div>
  )
}

export default App;

