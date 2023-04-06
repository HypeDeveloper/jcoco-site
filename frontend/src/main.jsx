import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import { MainLoading } from './components/loading'
import NavBar from './components/navbar'

// Pages
import Home from './pages/home'
import Shop from './pages/shop'
import Socials from './pages/socials'
import AboutMe from './pages/umuasa'


// Styles
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/me/UmuAsa' element={<AboutMe/>}/>
          <Route path='/socials' element={<Socials/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Layout(){
  return(
    <>
      <MainLoading/>
      <NavBar/>
      <Outlet/>
    </>
  )
}