import { useContext } from "react"
import { Context } from "../context/quiz"

import "./Option.css"

const Option = ({ option, selectOption, answer, hide }) => {

  const [quizState, dispatch] = useContext(Context);

  return (
    <div
      className={`option ${quizState.answerSelected && option === answer ? "correct" : ""
        } ${quizState.answerSelected && option !== answer ? "wrong" : ""
        } ${hide ? "hide" : ""}`}
      onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  )
}

export default Option