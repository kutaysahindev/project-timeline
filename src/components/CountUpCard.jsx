import { useState } from 'react';
import CountUp from 'react-countup';

const CountUpCard = ({ language, lines }) => {
  const [loading, setLoading] = useState(false);

  const onStart = () => {
    setLoading(true);
  };

  const onEnd = () => {
    setLoading(false);
  };
  return (
    <div className='w-20 h-20 p-3 border-2 border-neutral-500 rounded-lg flex flex-col justify-center items-center'>
      <h3 className='text-xl font-bold'>{ language }</h3>
      <CountUp className='text-lg' end={lines} duration={5} onStart={onStart} onEnd={onEnd}/>
    </div>
  )
}
export default CountUpCard