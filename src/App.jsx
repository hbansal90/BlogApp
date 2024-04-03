
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { Header, Footer} from './components/index'
import{login, logout} from './store/authSlice'
import {Outlet} from 'react-router-dom'



function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() =>
        setLoading(false))
  }, [])
  


  // Conditional Rendering
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          TODO: {/* <Outlet></Outlet> */}

        </main>
        <Footer/>
      </div>
    
    </div>
  ) : null;
}

export default App
