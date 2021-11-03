import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-custom-black">
        <Route path="/" exact component={HomeScreen} />
        <Route path="/content" exact component={PostScreen} />
      </div>
    </Router>
  );
}

export default App;
