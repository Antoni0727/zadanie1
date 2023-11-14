import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDo from './ToDo.jsx'
import ProductForm from './ProductForm.jsx'
import Chlopi from './Chlopi.jsx'
import Child from './Child.jsx'
import './App.css'

function App() {

  const [dataFromChild, setDataFromChild] = useState(null);

  return (
      <>
        <h1>Dane przesylane od dziecka</h1>

        <Child childDataHandler={setDataFromChild} />
      </>
  )
}

export default App