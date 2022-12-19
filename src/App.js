import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from './components/GlobalStyles'
import NavbarTG from './components/nav/NavbarTG'
import { Provider as JotaiProvider } from 'jotai'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Meeting from './pages/Meeting'

function App() {
  return (
    <JotaiProvider>
      <GlobalStyles>
        <NavbarTG />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="meeting" element={<Meeting />} />
              <Route path="planner" element={<p>project planner</p>} />
              <Route path="explore" element={<p>explore groups</p>} />
              <Route path="messages" element={<p>messages</p>} />
              <Route path="profile" element={<p>profile</p>} />
            </Routes>
          </BrowserRouter>
        </main>
      </GlobalStyles>
    </JotaiProvider>
  )
}

export default App
