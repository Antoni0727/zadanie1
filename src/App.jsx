import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDo from './ToDo.jsx'
import ProductForm from './ProductForm.jsx'
import Chlopi from './Chlopi.jsx'
import Child from './Child.jsx'
import Welcome from './Welcome.jsx'
import MyCard from './MyCard.jsx'
import MyDate from './MyDate.jsx'
import './App.css'

const Student = ({student}) =>{
  return (
    <div>
      <h2>imię: {student.name}</h2>
      <p>klasa: {student.grade}</p>
    </div>
  )
}

// const StudentList = () =>{
//   const students = [
//     {
//       id:1,
//       name:"Zygfryd",
//       grade:4
//     },
//     {
//       id:2,
//       name:"Amelia",
//       grade:8
//     },
//     {
//       id:1,
//       name:"Marcin",
//       grade:6
//     },
//   ]

  // return(
  //   <div>
  //     {students.map(student=>(
  //       <Student key={student.id} student={student} />
  //     ))}
  //   </div>
//   )

// }

function App() {

  const [start, setStart] = useState(false);

  return (
      <>

      {
        !start && <Welcome onButtonClick={()=> setStart(true)}/>
      }
      {
        start && <MyCard>
          <MyDate />
        </MyCard>
      }

      </>
  )
}

export default App;