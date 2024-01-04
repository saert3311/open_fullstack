import Part from "./Part";

const Content = ({ content }) => {
  /* incoming array of content
    {
        name: str,
        exercises: int
    }
    */
  return (
    <>
      {content.map((item) => (
        <Part name={item.name} exercises={item.exercises} key={item.id} />
      ))}
    </>
  );
};

export default Content;
