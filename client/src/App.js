import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-custom-black">
        <Route path="/" exact component={HomeScreen} />
      </div>
    </Router>
  );
}

export default App;
