import React from 'react'
import ReactDOM from 'react-dom'


//Desestructuracion: Tambien se puede aplicar: const Title = ({course}) => <h1>{course}</h1>
const Title = ({course}) =>{
  return <h1>{course}</h1>
}
const Content1 = ({part1, part2, part3}) =>{
  return <p>{part1} {part2} {part3}</p>
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Content1 part1={part1 + exercises1}  />
      <Content1 part2={part2 + exercises2} />
      <Content1 part3={part3 + exercises3} />
      
       
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )



}

ReactDOM.render(<App />, document.getElementById('root'))