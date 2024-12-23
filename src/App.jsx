import React from 'react'
import Router from './routes'
import { FavoritesProvider } from './components/saved/FavoritesContext'

const App = () => {
  return (
    <FavoritesProvider>
       <Router/>
    </FavoritesProvider>
  )
}

export default App  

