import React from 'react'
import ReactDOM from 'react-dom'

/* FORMA LARGA
const Title = (props) => {
  return <h1>{props.course}</h1>  
}
*/

/* FORMA CORTA lo mismo que arriba pero más corto - one line */
const Header = ({course}) => <h1>{course}</h1> 

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>   
  )
}

/*const Content = ({part1},{exercises1}) => <p>{part1}{exercises1}</p>*/

const Total = (props) => {

  return ( 
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
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
      <Header course={course}/>
      <Content part1={part1} exe1={exercises1} />
      <Content part2={part2} exe2={exercises2} />
      <Content part3={part3} exe3={exercises3} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
