import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav currentPage = {currentPage}/>
      </Header>
      <main>
        <Page currentPage= {currentPage}/>
      </main>
      <Footer />
    </div>

  );
}

export default App
