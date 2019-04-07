import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
    return (
      <h1>{props.course.name}</h1>
    )
  }
  const Content = (props) => {
      console.log(props)
    return (
        <>
        <p></p>{props.course.parts[0].name} {props.course.parts[0].exercises}<p />
        <p/>{props.course.parts[1].name} {props.course.parts[1].exercises}<p />
       <p></p> {props.course.parts[2].name} {props.course.parts[2].exercises}<p />
        </>

    )
  }

  const Total = (props) => {
      console.log(props)
        return (           
        <p> harjoituksia {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} yhteensä </p>
      
      )
  }
  
  const App = () => {
    const course = {
      name: 'Half Stack -sovelluskehitys',
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7
        },
        {
          name: 'Komponenttien tila',
          exercises: 14
        }
      ]
    }

  return (
    <div>
        <Header course={course}/>
        <Content course={course} />
        <Total course={course}/>    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))