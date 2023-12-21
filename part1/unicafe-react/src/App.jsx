import { useState } from "react";
import Feedback from "./components/Feedback";
import Statatics from "./components/Statics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Feedback handleGoodClick={() => setGood(good + 1 )} handleBadClick={() => setBad(bad + 1 )} handleNeutralClick={() => setNeutral(neutral + 1 )}/>
      <Statatics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
