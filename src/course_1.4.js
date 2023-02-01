import React from 'react'
import ReactDOM from 'react-dom'



const Title = ({ course }) => {
    return <h1>{course}</h1>
}
const Content = ({ part1, part2, part3 }) => {
    return <p>{part1} {part2} {part3}</p>
}



const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map(part => (
                <p key={part.name}>
                    {part.name} {part.exercises}
                </p>
            ))}
            <p>
                Number of exercises{" "}
                {course.parts.reduce((acc, part) => acc + part.exercises, 0)}
            </p>
        </div>
    )
}






ReactDOM.render(<App />, document.getElementById('root'))