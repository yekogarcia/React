import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Props {
  initialValue?: number;
}

const MAXIMUN_COUNT = 10;

export const CounterEffect = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClik = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;

    const tl = gsap.timeline();

    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" });
    tl.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });

    console.log("useEffect");
    // gsap.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" }).then(() => {
    //   gsap.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
    // });
  }, [counter]);

  return (
    <>
      <h1 ref={counterElement}>Counter : {counter} </h1>

      <button onClick={handleClik}>+1</button>
      <button>-1</button>
    </>
  );
};
