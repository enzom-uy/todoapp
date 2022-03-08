import React from 'react'
import Navbar from './components/Navbar/Navbar'
import 'normalize.css'

// PrimeReact Stuff
import "primereact/resources/themes/md-dark-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function App() {
  return <div className="App bg-background-green h-screen">
    <Navbar />
  </div>
}

export default App
