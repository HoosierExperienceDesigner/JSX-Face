export const Eyes =({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
//React Fragments <> </> - <g></g> would also work to group the eyes 
  <>
  <circle
    cx={-eyeOffsetX}
  	cy={-eyeOffsetY}
    r={eyeRadius}
  />
  <circle
    cx={eyeOffsetX}
    cy={-eyeOffsetY}
    r={eyeRadius}
  />
  </>
);