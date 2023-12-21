function Statatics({ good, neutral, bad }) {
    //maybe its hard to read the functions? 
  const average = (() => (good - bad) / (good + neutral + bad))();
  const positive = (() => (good / (good + neutral + bad)))();

    if ((good + neutral + bad) === 0) {
        return (
                <p>No Feedback given</p>
            )
    }else {
        return (
            <>
              <h1>Statics</h1>
              <p>good: {good}</p>
              <p>neutral: {neutral}</p>
              <p>bad: {bad}</p>
              <p>all: {good + neutral + bad}</p>
              <p>average: {average}</p>
              <p>positive: {positive}</p>
            </>
          );
    }

}

export default Statatics;
