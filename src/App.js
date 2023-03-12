import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/layout/Header/Header.js';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Footer from './component/layout/Footer/Footer.js'
import Home from './component/Home/Home';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Home />}>
      </Route>
      </Routes>
          
        

      <Footer />
    </Router>

  );
}

export default App;
