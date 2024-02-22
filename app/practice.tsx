import React, { useState } from 'react';

const QuizMaker = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    image: ''
  });

  const handleOptionChange = (index:number, value:string) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
  };

  const handleImageUpload = (event:any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCurrentQuestion({ ...currentQuestion, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      question: '',
      options: ['', '', '', ''],
      image: ''
    });
  };

  return (
    <div>
      <h1>Quiz Maker</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>Question {index + 1}</h3>
          <div>
            <label>Question:</label>
            <input type="text" value={question.question} readOnly />
          </div>
          <div>
            {question.options.map((option, idx) => (
              <input key={idx} type="text" value={option} readOnly />
            ))}
          </div>
          <div>
            {question.image && (
              <img src={question.image} alt="Question" style={{ maxWidth: '200px' }} />
            )}
          </div>
        </div>
      ))}
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={currentQuestion.question}
          onChange={(e) =>
            setCurrentQuestion({ ...currentQuestion, question: e.target.value })
          }
        />
      </div>
      <div>
        {currentQuestion.options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}
      </div>
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {currentQuestion.image && (
          <img src={currentQuestion.image} alt="Question" style={{ maxWidth: '200px' }} />
        )}
      </div>
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default QuizMaker;
