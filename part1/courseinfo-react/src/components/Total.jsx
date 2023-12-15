const Total = ({parts}) => {
    const total = parts.reduce((accum, current) => accum + current.exercises, 0)

    return (
        <p>Number of exercises {total}</p>
    )
} 

export default Total;