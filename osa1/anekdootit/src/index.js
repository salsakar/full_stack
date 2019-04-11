import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
    return (
      <h1>{props.text}</h1>
    )
  }
const LaskeVoittaja = (props) =>{
    let win = -1
    let most = -1
      for(let i=0; i < props.winner.length; i++){
        if(props.winner[i] > most){
            win = i
            most = props.winner[i]
        }
    }
    return (
      <>{anecdotes.parts[win].teksti}<br />has {most} votes</>
    )
  }

const Button1 = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)
const Button2 = (props) => (
    <button onClick={props.handleClick}>

        {props.text} </button>
)
const anecdotes = {
    parts:
        [
            { teksti: 'If it hurts, do it more often' },
            { teksti: 'Adding manpower to a late software project makes it later!' },
            { teksti: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.' },
            { teksti: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' },
            { teksti: 'Premature optimization is the root of all evil.' },
            { teksti: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.' }
        ]
}
let points = [0, 0, 0, 0, 0, 0]
const App = (props) => {
    const [selected, setSelected] = useState(0)
    const setAnecdote = () => {
        let random = Math.floor(Math.random() * (7 - 1));
        setSelected(random)
    }
    const setVote = () => {
        points[selected] += 1
        ReactDOM.render(
            <App anecdotes={anecdotes} />,
            document.getElementById('root')
        )
    }
    return (
        <div>
            <Header text="Anecdote of the day" />
            <p>{props.anecdotes.parts[selected].teksti}</p>
            <Button1 handleClick={setVote} text="vote" />
            <Button2 handleClick={setAnecdote} text="next anecdote" />
            <Header text="Anecdote with most votes" />
            <p><LaskeVoittaja winner={points} ></LaskeVoittaja> </p>
        </div>
    )
}

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)