import React from "react";

function QuestionItem({ question, onDel }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleClick(event) {
    
    //event.target.id === questionID
    fetch(`http://localhost:4000/questions/${event.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    onDel(event.target.id)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button id={id} onClick={handleClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
