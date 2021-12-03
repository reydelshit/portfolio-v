import Home from './components/Home'
import Header from './components/Header'
// import Projects from './components/Projects'
// import Techs from './components/Techs'
// import Contact from './components/Contact'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
    return(
            <div className='App'>
            <Router>
                 <Header/>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                    </Routes>
                </Router>
            </div>
            
           
    )
}

export default App;