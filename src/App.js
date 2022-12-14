import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from './components/GlobalStyles'
import NavbarTG from './components/nav/NavbarTG'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <GlobalStyles>
      <NavbarTG />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="meeting" element={<p>meeting</p>} />
            <Route path="planner" element={<p>project planner</p>} />
            <Route path="explore" element={<p>explore groups</p>} />
            <Route path="messages" element={<p>messages</p>} />
            <Route path="profile" element={<p>profile</p>} />
          </Routes>
        </BrowserRouter>
      </main>
    </GlobalStyles>
  )
}

export default App
