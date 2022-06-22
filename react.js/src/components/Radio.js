const Radio = ({ choices }) => {
  return (
    <>
      {choices.map((choice) => (
        <label>
          {choice.choice} <input type={"radio"} value={choices.choice} />
        </label>
      ))}
    </>
  );
};

export default Radio;
