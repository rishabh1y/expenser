import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home"
import AddExpense from "./pages/add-expenses";
import Footer from "./components/footer";

function App() {
   
  return (
    <Router>
      <Header/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/add-expense" element={<AddExpense/>} />
      </Routes>
      <Footer/>
      </Router>

      
  );
}

export default App;
