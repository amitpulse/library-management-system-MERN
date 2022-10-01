import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import BookHistory from './pages/BookHistory/BookHistory';
import Books from './pages/BookSection/Books';
import Home from './pages/Home/Home';
import LogReg from './pages/UserAccess/LogReg';

function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={user ? <Home/> : <LogReg/>}/>
            <Route path='books' element={<Books/>}/>
            <Route path='history' element={<BookHistory/>}/>
           
          </Routes>
        </Router>
    </div>
  );
}

export default App;
