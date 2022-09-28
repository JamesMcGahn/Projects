import { useRef } from 'react';

function UseRefExample1() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef.current.value);
    inputRef.current.value = 'thanks';
  };
  // useref example
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={inputRef}></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default UseRefExample1;
