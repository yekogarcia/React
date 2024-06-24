import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { counter, counterElement, handleClik } = useCounter({maxCount: 5});

  return (
    <>
      <h1 ref={counterElement}>Counter : {counter} </h1>

      <button onClick={handleClik}>+1</button>
      <button>-1</button>
    </>
  );
};
