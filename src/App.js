import React from 'react'
import TypingBox from './Components/TypingBox'
import { GlobalStyles } from './Styles/global'

const App = () => {
  return (
    <div className='canvas'>
      <GlobalStyles />
      <div>Header</div>
      <TypingBox/>
      <div>Footer</div>
    </div>
  )
}

export default App