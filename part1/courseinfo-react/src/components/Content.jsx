import Part from "./Part";

const Content = ({content}) => {
    /* incoming array of content
    {
        name: str,
        exercises: int
    }
    */
return (
    <>
    <Part name={content[0].name} exercises={content[0].exercises} />
    <Part name={content[1].name} exercises={content[1].exercises} />
    <Part name={content[2].name} exercises={content[2].exercises} />
    </>
)
}

export default Content;