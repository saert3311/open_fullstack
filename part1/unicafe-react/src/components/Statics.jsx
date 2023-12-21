import Static from "./Static";

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
              <Static text='Good' value={good} />
              <Static text='Neutral' value={neutral} />
              <Static text='Bad' value={bad} />
              <Static text='All' value={good + neutral + bad} />
              <Static text='Average' value={average} />
              <Static text='Positive' value={positive} />
            </>
          );
    }

}

export default Statatics;
