import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import Portfolio from './components/portfolio';
import Project from './components/project';
import Resume from './components/resume';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "@fontsource/roboto-slab"; // Defaults to weight 400
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Header></Header>
<Routes>
{/* Routes with default page set to about */}
<Route path='/' element={<About/>}></Route>
<Route path='/Portfolio' element={<Portfolio/>}></Route>
<Route path='/Contact' element={<Contact/>}></Route>
<Route path='/Resume' element={<Resume/>}></Route>





</Routes>
<Footer></Footer>
</BrowserRouter>
    </div>
  );
}

export default App;
