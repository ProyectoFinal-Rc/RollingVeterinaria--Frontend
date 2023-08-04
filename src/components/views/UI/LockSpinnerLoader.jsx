export const LockSpinnerLoader = ({color='#FF914D', size='1'}) => {
    return (
      <svg xmlns="SVG namespace" style={{ margin: "auto" }} width={size+"rem"} height={size+"rem"} display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
        <circle xmlns="SVG namespace" cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="14">
        </circle>
      </svg>
    )
  }
  