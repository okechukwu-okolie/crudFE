
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
import ApiDisplay from './apiDisplay/ApiDisplay'
import MainApp from './todoApp/MainApp'
import Crud from './CRUD/Crud'

function App() {
  

  return (
    // <Routes>
    //   <Route path='/' element={<Home/>} />
    //   <Route path='/books/create' element={<CreateBooks/>} />
    //   <Route path='/books/details/:id' element={<ShowBook/>} />
    //   <Route path='/books/edit/:id' element={<EditBook/>} />
    //   <Route path='/books/delete/:id' element={<DeleteBook/>} />
      
    // </Routes>
    <div>
      {/* <ApiDisplay/> */}
      {/* <MainApp/> */}
      <Crud/>
    </div>
  )
}

export default App
