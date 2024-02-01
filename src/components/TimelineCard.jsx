import { useEffect, useRef, useState } from "react";

const TimelineCard = ({ id, tagline, title, description }) => {
  const [position, setPosition] = useState(0);
  const [compHeight, setCompHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [enlight, setEnlight] = useState(false)
  const cardRef = useRef(null);
  const lineRef = useRef(null);
  
  useEffect(() => {
    setCompHeight(cardRef.current.offsetHeight);
    const getVerticalPosition = () => {
      const rect = cardRef.current.getBoundingClientRect();
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

  useEffect(() => {
    // rect.top < (window.innerHeight/2) = height: 0%
    // rect.top < (window.innerHeight/2) = height: 100%
    // console.log("line-height:", lineRef.current.offsetHeight);
    if (position !== 0 && position <= window.innerHeight/2) {
      const fark = ((window.innerHeight/2) - position).toFixed(2)
      if (fark < lineRef.current.offsetHeight)
        setLineHeight(fark)
        console.log("fark: ", fark, lineRef.current.offsetHeight)
      // setLineHeight(position - window.innerHeight/2)
      // const scrolledHeight = window.scrollY || document.documentElement.scrollTop;
      // console.log('scrolledHeight: ', scrolledHeight)
    }

    // const getVerticalPosition = () => {
    //   const rect = lineRef.current.getBoundingClientRect();
    //   setPosition(rect.top)
    //   if(rect.top < (window.innerHeight/2)) {
    //     setEnlight(true)
    //   }
      // if(rect.top > (window.innerHeight/2)) {
      //   setEnlight(false)
      // }
    // };
    // getVerticalPosition();
    // const handleScroll = () => getVerticalPosition();
    // window.addEventListener('scroll', getVerticalPosition);
    // return () => window.removeEventListener('scroll', getVerticalPosition);
  }, [position])
  

  return (
    <div className='min-h-80 flex gap-10 ' ref={cardRef}>
      <div className="px-5 flex flex-col items-center gap-5  ">
        <h1 className={`pt-3 text-6xl font-extrabold transition-all duration-400 ${enlight ? "text-gray-100" : "text-gray-600"}`}>
          { (id < 10) ? `0${id}` : id }
        </h1>
        <div className="h-full w-1" ref={lineRef}>
          <div className="bg-purple-700" style={{height: lineHeight+"px"}}/>
        </div>
      </div>
      <div className="p-5 pt-0">
        {/* <p>{ compHeight } - { position.toFixed(0) } / { window.innerHeight/2 }</p> */}
        <h6 className="text-sm">{ tagline }</h6>
        <h2 className="mb-3 text-5xl font-bold">{ title }</h2>
        <p className="pb-20">{ description }</p>
      </div>
    </div>
  )
}
export default TimelineCard