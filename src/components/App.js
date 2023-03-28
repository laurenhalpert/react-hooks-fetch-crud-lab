/*
App
|_AdminNavBar
|
|_QuestionForm
|
|_QuestionList
    |_QuestionItem




*/

import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List"); 
  const [questions, setQuestions] = useState([])

  function handleNewQuestion(newQuestionObj) {
    setQuestions([...questions, newQuestionObj])
  }

  function handleDelete(id){
    setQuestions(questions.filter(question => question.id !== id))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onFormSubmit={handleNewQuestion}/> : <QuestionList questions={questions} setQuestions={setQuestions} onDel={handleDelete}/>}
    </main>
  );
}

export default App;
