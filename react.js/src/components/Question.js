const Question = (props) => {
  let array = [];
  array.length = props.nbr;
  console.log(array.fill(1));
  return ( 
    <>
      {array.map(()=><h2>hello</h2>)}
    </>
  );
}

export default Question;