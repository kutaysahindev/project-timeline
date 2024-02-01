import { useEffect, useRef, useState } from "react";

const TimelineCard = ({ tagline, title, description }) => {
  const [position, setPosition] = useState(0);
  const [enlight, setEnlight] = useState(false)
  const componentRef = useRef(null);
  const compHeight = componentRef.current.offsetHeight;

  useEffect(() => {
    const getVerticalPosition = () => {
      const rect = componentRef.current.getBoundingClientRect();
      setPosition(rect.top)
      if(rect.top < (window.innerHeight/2)) {
        setEnlight(true)
      }
      if(rect.top > (window.innerHeight/2)) {
        setEnlight(false)
      }
    };
    getVerticalPosition();
    // const handleScroll = () => getVerticalPosition();
    window.addEventListener('scroll', getVerticalPosition);
    return () => window.removeEventListener('scroll', getVerticalPosition);
  }, []);

  return (
    <div className='min-h-80 mb-10 flex gap-10 ' ref={componentRef}>
      <div className="p-5 flex flex-col items-center gap-5  ">
        <h1 className={`pt-5 text-4xl font-extrabold transition-all duration-400 ${enlight ? "text-gray-100" : "text-gray-600"}`}>01</h1>
        <div className="h-full w-1 bg-gray-500">
          <div className="bg-yellow-700" style={{height: 0}}/>
        </div>
      </div>
      <div className="p-5 bg-red-800">
        <p>{ compHeight } - { position.toFixed(0) } / { window.innerHeight/2 }</p>
        <h6 className="text-sm">{ tagline }</h6>
        <h2 className="text-4xl font-bold">{ title }</h2>
        <p>{ description }</p>
      </div>
    </div>
  )
}
export default TimelineCard