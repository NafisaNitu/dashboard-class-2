import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home.jsx'
import Layout from './layout/Layout.jsx'
import About from './pages/About';
import Books from './pages/Books.jsx'
import Contact from './components/Contact.jsx'
import FrontEndLayout from './layout/FrontEndLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontEndLayout />}>
          <Route index element={<Home />} />
        </Route>  

        <Route path='/admin' element={<Layout />}>
          <Route path='about' element={<About />} />
          <Route path='books' element={<Books />} />
          <Route path='contact' element={<Contact />} />
          <Route path='setting' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
