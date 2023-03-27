import { useState } from 'react'


const Header = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
         <img className="Logo" alt="cresent moon logo" src='https://img.icons8.com/fluency/344/full-moon.png' />
        <h1>AstroDash</h1>
     
    </div>
  )
}

export default Header