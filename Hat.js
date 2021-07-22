export const Hat =({hatWidth, hatHeight, eyeOffsetX, eyeOffsetY}) => (
  <>
  <rect 
    width={hatWidth}
    height={hatHeight}
    x={-eyeOffsetX}
    y={-eyeOffsetY*3}
    fill="black"
   />
   <rect
    width={hatWidth*2}
    height={hatHeight/3}
    x={-eyeOffsetX*2}
    y={-hatHeight}
    fill="black"
   />
	</>

  );