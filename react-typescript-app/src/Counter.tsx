import * as React from 'react';

// Interface names must start with `I` 
interface ICounterProps = {
  counter: number
};

const Counter = (props: ICounterProps) => {
  return <p style={{textAlign: 'center'}}>{props.counter}</p>
}

export default Counter;
