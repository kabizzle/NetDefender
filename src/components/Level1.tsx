import { useState } from "react";
import './Level1.css';

const Level1 = () => {

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

  const [currentScreen, setCurrentScreen] = useState("startScreen");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerStatus, setAnswerStatus] = useState<boolean[]>([]);


  const handleScreenChange = (screen:any) => {
    setCurrentScreen(screen);
  };


  const handleOptionSelect = (option: any) => {
    if (selectedOption === null) {
      setSelectedOption(option);
    }
  };

  const handleNextClick = () => {
    if (selectedOption === null) return;
  
    const isAnswerCorrect = selectedOption === currentQuestion.correctAnswer;
    setAnswerStatus([...answerStatus, isAnswerCorrect]);
  
    setSelectedOption(null);
  
    if (currentQuestionIndex === questions.length-1) {
      setCurrentScreen("lastScreen");
    } else {
      setCurrentScreen("informationScreen");
    }
    
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  
  

  const currentQuestion = questions[currentQuestionIndex];


  const renderScreen = () => {
    switch (currentScreen) {
      case "startScreen":
        return (
          <div>
            <h1>Welcome to the Game</h1>
            <button onClick={() => handleScreenChange("questionScreen")}>Start</button>
          </div>
        );
      case "questionScreen":
        return (
          <div className="quiz_box">
      <div className="question_box">
        <p className="question_text">{currentQuestion.question}</p>
        <div className="options_box">
          {currentQuestion.options.map((option, index) => (
            <button
            key={index}
            className={`option_button ${
              selectedOption === option ? (option === currentQuestion.correctAnswer ? "correct" : "wrong") : ""
            }`}
            onClick={() => handleOptionSelect(option)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
          
          ))}
        </div>
        {selectedOption !== null && (
          <button className="next_button" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
      <div className="circles_box">
  {questions.map((_, index) => (
    <div
      key={index}
      className={`circle ${index < currentQuestionIndex ? (answerStatus[index] ? "correct" : "wrong") : ""}`}
    ></div>
  ))}
</div>

      </div>
        );
        case "informationScreen":
          return (
            <div className="infoScreen">
              <div className="infoBox">
              <div className="questionBox">
                <h1>{questions[currentQuestionIndex-1].question}</h1>
                
                <div className="answerBox">
                <p>{questions[currentQuestionIndex-1].correctAnswer}</p>
                </div>
                </div>
                <div className="informationBox">
                <p>{questions[currentQuestionIndex-1].explanation}</p>
              </div>
              </div>
              <div>
                
                <button onClick={() => handleScreenChange("questionScreen")}>
                  Next
                </button>
              </div>
              <div className="circles_box">
  {questions.map((_, index) => (
    <div
      key={index}
      className={`circle ${index < currentQuestionIndex ? (answerStatus[index] ? "correct" : "wrong") : ""}`}
    ></div>
  ))}
</div>
            </div>
          );
          case "lastScreen":
            return (
              <div>
                <div className="questionBox">
                  <h1>{questions[currentQuestionIndex-1].question}</h1>
                  </div>
                  <div className="answerBox">
                  <p>{questions[currentQuestionIndex-1].correctAnswer}</p>
                  </div>
                  <div className="informationBox">
                  <p>{questions[currentQuestionIndex-1].explanation}</p>
                </div>
                <div className="circles_box">
    {questions.map((_, index) => (
      <div
        key={index}
        className={`circle ${index < currentQuestionIndex ? (answerStatus[index] ? "correct" : "wrong") : ""}`}
      ></div>
    ))}
  </div>
                <div>
                  <button onClick={() => handleScreenChange("endScreen")}>
                    Go to End
                  </button>
                </div>
              </div>
            );
            case "endScreen":
        return (
          <div>
            <h1>The End</h1>
            <button onClick={() => handleScreenChange("startScreen")}>Again</button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderScreen()}</div>;



};

export default Level1;
