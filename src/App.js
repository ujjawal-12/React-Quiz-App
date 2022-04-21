import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./component/pages/Header";
import Home from "./component/pages/Home";
import Quiz from "./component/pages/Quiz";
import Submit from "./component/pages/Submit";
import Error from "./component/pages/Error";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        {/* <Circle /> */}
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/quiz"><Quiz /></Route>
          <Route exact path="/submit"><Submit /></Route>
          <Route><Error /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
