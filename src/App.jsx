import Home from './Pages/Home'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Summary from './Pages/Summary';
import Auth from './Auth/Auth';

function App() {
  const [user, setUser] = useState(null);

  const userDetails = (usr) => {
    setUser(usr);
  }

  useEffect(() => {
    userDetails();
  }, [])

  console.log(user);

  return (
    <> 
        <Router>
          <Routes>
            <Route exact path='/' element={user ? <Home /> : <Auth usr={userDetails}/>} />
            <Route exact path='/summary/:id' element={<Summary />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
