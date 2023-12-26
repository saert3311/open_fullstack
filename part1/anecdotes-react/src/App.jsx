import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  const randomInteger = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  }

  const maxVotes = () => Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b, null);

  const handleClick = () => {
    let  result = null
    do {
      result = randomInteger(anecdotes.length)
    } while (result === selected);
      setSelected(result)
  }

  const handleVote = () => {
    setVotes({
      ...votes,
      [selected]: (votes[selected] || 0) + 1,
    });
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button type='button' onClick={handleVote}>Vote</button>
      <button type='button' onClick={handleClick}>Next</button>
      <p>has {votes[selected] ?? 0} votes</p>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxVotes()] ?? 'No votes'}</p>
    </div>
  )
}

export default App
