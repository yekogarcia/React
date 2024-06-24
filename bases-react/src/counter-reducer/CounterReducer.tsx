import { useReducer } from "react";
import { CounterState } from "./interfaces/interface";
import { funCounterReducer } from "./state/counterReducer";
import * as actions from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducer = () => {
  const [counterState, dispatch] = useReducer(funCounterReducer, INITIAL_STATE);

  const { counter } = counterState;

  const increaseBy = (value: number) => {
    dispatch(actions.doIncreaseBy(value));
  };

  const handlePrevious = () => {};
  const handleReset = () => {
    dispatch(actions.doReset());
  };

  return (
    <>
      <h1>Counter Reducer: {counter} </h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(3)}>+3</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={handlePrevious}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
