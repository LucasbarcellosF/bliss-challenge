import { Route, Routes } from "react-router-dom";
import View from "./View";
import QuestionList from "./pages/questions-list/index";
import QuestionDetails from "./pages/questions-details";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<View />}>
          <Route path="questions" element={<QuestionList />} />
          <Route path="questions/:id" element={<QuestionDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
