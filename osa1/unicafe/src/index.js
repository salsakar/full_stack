import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
    return (
      <h1>{props.otsikko}</h1>
    )
  }
  const Header2 = (props) =>{
    return (
      <h1>{props.valiotsikko}</h1>
    )
  }
const Statistic = (props) => { 
    let teksti= props.value;
    if(props.text === "positiivisia"){
        teksti = props.value + " %";
    }
    return(
    <tr>
    <td width="100px">{props.text}</td><td>{teksti}</td>
    </tr>
    ) 
}
const Statistics = (props) => {
    let yhteensa = props.palautteet.osat[0].good + props.palautteet.osat[1].neutral + props.palautteet.osat[2].bad;
    let karvo = ((props.palautteet.osat[0].good * 1) + (props.palautteet.osat[2].bad * -1)) / yhteensa;
    if(yhteensa === 0){
        return <p>Ei yhtään palautetta annettu</p>
    }
  
    return (
    <div>
    <table>
    <tbody>
    <Statistic text="hyvä" value = {props.palautteet.osat[0].good} />
    <Statistic text="neutraali" value ={props.palautteet.osat[1].neutral} />
    <Statistic text="huono" value ={props.palautteet.osat[2].bad} />
    <Statistic text="yhteensä" value ={yhteensa} />
    <Statistic text="keskiarvo" value ={karvo} />
    <Statistic text="positiivisia" value ={((props.palautteet.osat[0].good / yhteensa) * 100)}/>
    </tbody>
    </table>
    </div>
  )
}
const Button1 = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
  const Button2 = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
  const Button3 = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
const App = () => {
  const otsikko = 'anna palautetta'
  const valiotsikko = 'statistiikka'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
    const setToGood = (good) => {setGood(good)}
    const setToNeutral = (neutral) => {setNeutral(neutral)}
    const setToBad = (bad) => {setBad(bad)}
    
const palautteet = {
    osat: [
        {good},
        {neutral},
        {bad}

    ]

}
  return (
    <div>
      <Header otsikko={otsikko} />
      <Button1 handleClick={() => setToGood(good + 1)} text="hyvä" />
      <Button2 handleClick={() => setToNeutral(neutral + 1)} text="neutraali" />
      <Button3 handleClick={() => setToBad(bad + 1)} text="huono" />
      <Header2 valiotsikko={valiotsikko} />
      <Statistics palautteet={palautteet} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)