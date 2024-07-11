import Footer from './components/js/footer'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from '../../webapp/src/pages/js/Home';
import About from '../../webapp/src/pages/js/About'
import Contact from './pages/js/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
