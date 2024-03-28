import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home Page</Link>
        <Link to="/otherpage">Other Page</Link>

        <Routes>
          <Route exact path="/" element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
