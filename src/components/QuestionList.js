import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";
//use effect to fetch questions and put them here
//should pass down props of question to QuestionItem
  //question prop should be an object with the keys: { id, prompt, answers, correctIndex } 
function QuestionList({ questions, setQuestions, onDel }) {
  
  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then(resp=> resp.json())
    .then(questionsArr => setQuestions(questionsArr))
  })
  
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
        {questions.map(question => {
          return <QuestionItem key={question.id} question={question} onDel={onDel}/>
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
