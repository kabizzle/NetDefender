import { useState } from "react";
import './Level1.css';

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: "Question 1: What is the capital of France?",
      options: ["Paris", "London", "Berlin"],
      correctAnswer: "Paris",
      explanation: "Paris is the capital of France.",
    },
    {
      id: 2,
      question: "Question 2: What is the largest planet in our solar system?",
      options: ["Mars", "Saturn", "Jupiter"],
      correctAnswer: "Jupiter",
      explanation: "Jupiter is the largest planet in our solar system.",
    },
    {
      id: 3,
      question: "Question 3: What is the symbol for the chemical element Iron?",
      options: ["Fe", "Au", "Ag"],
      correctAnswer: "Fe",
      explanation: "The symbol for Iron is Fe.",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerStatus, setAnswerStatus] = useState<boolean[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleStartClick = () => {
    setCurrentQuestionIndex(0);
  };

  const handleOptionSelect = (option: any) => {
    if (selectedOption === null) {
      setSelectedOption(option);
    }
  };

  const handleNextClick = () => {
    if (selectedOption === null) return;

    const isAnswerCorrect = selectedOption === questions[currentQuestionIndex].correctAnswer;
    setAnswerStatus([...answerStatus, isAnswerCorrect]);

    setSelectedOption(null);
    setShowExplanation(true);

    if (currentQuestionIndex === questions.length - 1) {
      setShowCongratulations(true);
    }
  };

  const handleRestartClick = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswerStatus([]);
    setShowExplanation(false);
    setShowCongratulations(false);
  };

  if (currentQuestionIndex === -1) {
    return (
      <div className="quiz_box start_screen">
        <p className="welcome_text">Welcome</p>
        <button className="start_button" onClick={handleStartClick}>
          Start
        </button>
      </div>
    );
  }

  if (showCongratulations) {
    return (
      <div className="quiz_box last_screen">
        <p className="congratulations_text">Congratulations!</p>
        <button className="restart_button" onClick={handleRestartClick}>
          Restart
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz_box">
      <div className="question_box">
        <p className="question_text">{currentQuestion.question}</p>
        <div className="options_box">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option_button ${
                selectedOption === option ? "selected" : ""
              } ${showExplanation && option === currentQuestion.correctAnswer ? "correct" : ""}`}
              onClick={() => handleOptionSelect(option)}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          ))}
        </div>
        {selectedOption !== null && !showExplanation && (
          <button className="next_button" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
      <div className="circles_box">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`circle ${index <= currentQuestionIndex ? (answerStatus[index] ? "correct" : "wrong") : ""}`}
          ></div>
        ))}
      </div>
      {showExplanation && (
        <div className="explanation_box">
          <div className="question_info">
            <p className="question_text">{currentQuestion.question}</p>
            <p className="answer_text">Correct Answer: {currentQuestion.correctAnswer}</p>
          </div>
          <div className="information_text">
            <p className="info_title">Information</p>
            <p className="info_content">{currentQuestion.explanation}</p>
          </div>
          <button className="next_button" onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;


