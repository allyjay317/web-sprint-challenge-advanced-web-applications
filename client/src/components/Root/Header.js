import React from 'react'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  return (
    <div style={{ position: "sticky", display: 'flex', justifyContent: 'space-around', borderBottom: '1px solid black' }}>
      <p style={{ paddingLeft: '100px', flexGrow: '1' }}>Bubble App!</p>
      <button onClick={() => {
        localStorage.removeItem('bubbleToken')
        history.push('/')
      }}>Log Out</button>
    </div>
  )
}

export default Header