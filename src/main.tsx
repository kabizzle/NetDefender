import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import TestComponent from "./components/testComponent.tsx"

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />} >

//       <Route path="test" element={<TestComponent />} />
    
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <App />
  </React.StrictMode>,
)
