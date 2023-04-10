import React from 'react'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import "./App.css"
import Layout from './components/Layout'

import HomePage from './Pages/HomePage'
import JopPage from './Pages/Jobs/JobPage'
import JobDetail from './Pages/Jobs/JobDetail'
import ProfilePage from './Pages/ProfilePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="jobs" element={<JopPage />} />
      <Route path="jobs/:id" element={<JobDetail />} />
      <Route path="me/:id" element={<ProfilePage />} />
      <Route path="about" element={<div>About Page</div>} />
      <Route path="contact" element={<div>Contact Page</div>} />
      <Route path="*" element={<div>Not Found Page</div>} />
    </Route>
  )
)

const App = () => <RouterProvider router={router} />


export default App
