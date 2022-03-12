import React from 'react'
import Navbar from './components/Navbar/Navbar'
import 'normalize.css'
import styles from './App.module.scss'

import Container from './components/Container/Container'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Container />
    </div>
  )
}

export default App
