import { useContext } from "react"
import { Context } from "../context/quiz"

import Category from "../img/category.svg"

import "./PickCategory.css"

const PickCategory = () => {

  const [quizState, dispatch] = useContext(Context);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div className="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a um dos temas abaixo</p>
      <div>
        {quizState.questions.map((question) => (
          <button onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={Category} alt="Categorias do Quiz" />
    </div>
  )
}

export default PickCategory