import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from './Components/Header'
import Tool from './Components/Tool'
import deskDark from './img/bg-desktop-dark.jpg'
import desklight from './img/bg-desktop-light.jpg'
import mobileDark from './img/bg-mobile-dark.jpg'
import mobileLight from './img/bg-mobile-light.jpg'

function App() {
  const Theme = useSelector((state) => state.Theme)
  return (
    <main className={Theme ? ' main bg-[#fafafa]' : ' main bg-[#161722]'}>
      <Header
        dark={deskDark}
        light={desklight}
        mobileDark={mobileDark}
        mobileLight={mobileLight}
      />
      <Tool />
    </main>
  )
}

export default App
