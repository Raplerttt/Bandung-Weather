import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
