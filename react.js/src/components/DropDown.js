const DropDown = ({ choices }) => {
  console.log(choices);
  return (
    <div className="dropDown">
      <select name="" id="">
        {choices.map((choice)=>(
          <option value={choice.choice}>{choice.choice}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
