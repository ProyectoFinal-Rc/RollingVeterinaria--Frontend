import React from 'react'

export const ZoomLoader = ({color='#FF914D'}) => {
  return (
    <svg fill="red" xmlns="SVG namespace" style={{ margin: "auto" }} width="50" height="50" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="20" fill={color}>
        <animate
        attributeType="XML"
        attributeName="r"
        from="0"
        to="40"
        dur="1s"
        fill="fill"
        keySplines="0.1 0.8 0.2 1;0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1; 0.1 0.8 0.2 1"
        keyTimes="0;0.22;0.33;0.55;0.66;0.88;1"
        calcMode="spline"
        repeatCount="indefinite" />
        </circle>
    </svg>
  )
}
