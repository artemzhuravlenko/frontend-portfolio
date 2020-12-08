import React, {useRef, useEffect} from 'react';
import './style.css';

function TimeLine(props) {
  const timelineRef = useRef(null)
  useEffect(() => {
    console.log(timelineRef.current)
  },[])

  return (
    <div ref={timelineRef}  className='timeline'>
      <div className='week'></div>
    </div>
  );
}

export default TimeLine;