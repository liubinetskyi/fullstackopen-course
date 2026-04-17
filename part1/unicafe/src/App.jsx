import { useState } from 'react'

const Button = props => <button onClick={props.onClick}> {props.text} </button>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={props.good} />
        <StatisticLine text="Neutral" value={props.neutral} />
        <StatisticLine text="Bad" value={props.bad} />
        <StatisticLine text="Total" value={props.total} />
        <StatisticLine text="Average" value={props.average} />
      </tbody>
    </table>
  )
}

const App = () => {
  const headers = [
    {name: 'Give feedback'},
    {name: 'Statistics'},
  ]
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const score = (good * 1 + neutral * 0 + bad * -1)
  const average = total === 0 ? 0 : score / total
  
  const increaseGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }
  const increaseNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }
  const increaseBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
  }

  return (
    <div>
      <h1>{headers[0].name}</h1>
      <Button 
        onClick={increaseGood}
        text='Good'
      />
      <Button 
        onClick={increaseNeutral}
        text='Neutral'
      />
      <Button 
        onClick={increaseBad}
        text='Bad'
      />
      <h1>{headers[1].name}</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
      />
    </div>
  )
}

export default App