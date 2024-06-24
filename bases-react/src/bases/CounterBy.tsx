import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 0 }: Props) => {
  const [{counter, clicks}, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  // const { counter, clicks } = counterState;

  const handleClik = (val: number) => {
    // setCounter((prev) => prev + 1);
    // setCounterState((prev) => ({
    //   counter: prev.counter + val,
    //   clicks: prev.clicks + 1,
    // }));
    setCounterState(({ counter, clicks }) => ({
      counter: counter + val,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter : {counter} </h1>
      <h1>Clicks : {clicks} </h1>

      <button onClick={() => handleClik(1)}>+1</button>
      <button onClick={() => handleClik(5)}>+5</button>
      <button>-1</button>
    </>
  );
};
