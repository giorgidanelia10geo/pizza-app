import React from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import { Header } from './components'

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App
