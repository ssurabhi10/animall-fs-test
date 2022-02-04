import React from 'react'
import './App.css'
import { PageviewGenerator } from './PageviewGenerator'
import { PageviewRetreiver } from './PageviewRetreiver'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Routes>
            <Route path='/'>
              <PageviewGenerator />
            </Route>
            <Route path='/pageviews'>
              <PageviewRetreiver />
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
