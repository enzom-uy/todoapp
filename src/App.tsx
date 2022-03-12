import React from 'react'
import Navbar from './components/Navbar/Navbar'
import 'normalize.css'

// PrimeReact Stuff
import 'primereact/resources/themes/md-dark-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css' //icons
import Container from './components/Container/Container'

function App() {
  return (
    <div className="App bg-background-green h-screen flex flex-col">
      <Navbar />
      {console.log('En App.tsx se renderiza una sola vez')}

      <Container />
    </div>
  )
}

export default App
