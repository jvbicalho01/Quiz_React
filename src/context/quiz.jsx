import { createContext, useReducer } from "react";

import questions from "../data/questions_complete"

const STAGES = ["Start", "Category", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  help: false,
  optionToHide: null,
}

const quizReducer = (state, action) => {

  if (action.type === "CHANGE_STATE") {
    return {
      ...state,
      gameStage: STAGES[1],
    };
  }
  else if (action.type === "START_GAME") {
    let q = null;

    state.questions.forEach((question) => {
      if (question.category === action.payload) {
        q = question.questions;
      }
    })

    return {
      ...state,
      questions: q,
      gameStage: STAGES[2],
    }
  }
  else if (action.type === "REORDER_QUESTIONS") {
    const r = state.questions.sort(() => {
      return Math.random() - 0.5;
    })
    return {
      ...state,
      questions: r,
    };
  }
  else if (action.type === "CHANGE_QUESTION") {
    const n = state.currentQuestion + 1;
    let endGame = false;

    if (!state.questions[n]) {
      endGame = true;
    }

    return {
      ...state,
      currentQuestion: n,
      gameStage: endGame ? STAGES[3] : state.gameStage,
      answerSelected: false,
      help: false,
    };
  }
  else if (action.type === "NEW_GAME") {
    return initialState;
  }
  else if (action.type === "CHECK_ANSWER") {

    if (state.answerSelected) {
      return state;
    }

    const answer = action.payload.answer;
    const option = action.payload.option;
    let c = 0;

    if (answer === option) {
      c = 1;
    }

    return {
      ...state,
      score: state.score + c,
      answerSelected: option,
    }
  }
  else if (action.type === "SHOW_TIP") {
    return {
      ...state,
      help: "tip",
    }
  }
  else if (action.type === "REMOVE_OPTION") {
    const q = state.questions[state.currentQuestion];

    let r = true;
    let optionToHide;

    q.options.forEach((option) => {
      if (option !== q.answer && r) {
        optionToHide = option;
        r = false;
      }
    });

    return {
      ...state,
      optionToHide,
      help: true,
    }
  }
  else {
    return state;
  }

}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}