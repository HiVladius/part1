import React from 'react'
import ReactDOM from 'react-dom'


const Title = ({course}) =>{
  return <h1>{course}</h1>
}
const Content = ({part1, part2, part3}) =>{
  return <p>{part1} {part2} {part3}</p>
}



const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

  return (
    <div>
      <Title course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
      
       
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )



}

ReactDOM.render(<App />, document.getElementById('root'))