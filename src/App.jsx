import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './routes/Landing'
import Mycart from './routes/My-Cart';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/my-cart" element={<Mycart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App