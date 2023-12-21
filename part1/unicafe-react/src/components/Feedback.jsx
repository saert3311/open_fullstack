import Button from "./Button"

function Feedback({handleGoodClick, handleNeutralClick, handleBadClick}) {
    return (
        <>
            <h1>Give Feedback</h1>
            <div>
            <Button text='Good' handleClick={handleGoodClick}/>
            <Button text='Neutral' handleClick={handleNeutralClick}/>
            <Button text='Bad' handleClick={handleBadClick}/>
            </div>
        </>
        )
}

export default Feedback