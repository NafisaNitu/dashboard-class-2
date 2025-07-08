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
import Shop from './Shop.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store,persistor } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FrontEndLayout />}>
              <Route index element={<Home />} />
              <Route path='/shop' element={<Shop />} />
            </Route>  

            <Route path='/admin' element={<Layout />}>
              <Route path='about' element={<About />} />
              <Route path='books' element={<Books />} />
              <Route path='contact' element={<Contact />} />
              <Route path='setting' element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </PersistGate>
    </Provider>
  </StrictMode>,
)
