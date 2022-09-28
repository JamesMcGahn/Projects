import { useRef, useEffect, useState } from 'react';

function UseRefExample1() {
  const [name, setName] = useState('name');
  const renders = useRef(1);
  const prevState = useRef('');
  useEffect(() => {
    renders.current = renders.current + 1;
    prevState.current = name;
  });

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>prev state: {prevState.current}</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
export default UseRefExample1;
