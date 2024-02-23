import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from "./Pages/RegisterPage.jsx"
import LoginPage from './Pages/LoginPage'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/tasks' element={<h1>Tasks Page</h1>}/>
      <Route path='/add-tasks' element={<h1>New task</h1>}/>
      <Route path='/tasks/:id' element={<h1>Update task</h1>}/>
      <Route path='/profile' element={<h1>Profile</h1>}/>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App