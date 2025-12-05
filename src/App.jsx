import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'


import HomePage from './pages/HomePage'
import MainLayouts from './layouts/MainLayouts'
import JobsPage from './pages/JobsPage'
import ErrorPage from './pages/ErrorPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import About from './pages/About'
import EditJobPage from './pages/EditJobPage'


const App = () => {


    {/* Create the router */}
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayouts />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
      <Route path='/edit-job/:id' element={<EditJobPage />} loader={jobLoader} />
      <Route path='/add-job' element={<AddJobPage />} />
      <Route path='/about' element={<About />} />

      {/* Redirect /react-jobs to / */}
        <Route path='/react-jobs' element={<Navigate to="/" replace />} />

      <Route path='*' element={<ErrorPage />} />
    </Route>

  )
  )


  return <RouterProvider router={router} />
}

export default App