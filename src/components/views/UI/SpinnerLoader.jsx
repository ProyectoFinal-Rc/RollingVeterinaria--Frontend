import React from 'react'

export const SpinnerLoader = ({color='#FF914D', width='1', height='1'}) => {
  return (
    <svg xmlns="SVG namespace" style={{ margin: "auto" }} width={width+"rem"} height={height+"rem"} display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
      <circle xmlns="SVG namespace" cx="50" cy="50" r="40" fill="none" stroke={color} strokeDasharray="174.35839227423352 60.119464091411174" strokeWidth="14">
        <animateTransform attributeName="transform" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="rotate" values="0 50 50;360 50 50"/>
      </circle>
    </svg>
  )
}

