import { useState, useEffect, useRef, useMemo } from 'react';

function useMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const sqrt = getSqrt(number)
  // stores number so isnt called every render, only called initally and  when number is changed
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />

      <h2>
        The sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick}>Re Render</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  console.log('Expensive Function Called!');
  return Math.sqrt(n);
}

export default useMemoExample;
