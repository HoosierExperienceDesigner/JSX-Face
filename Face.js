import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes.js';
import { Mouth } from './Mouth.js';
import { Hat } from './Hat.js';
import { FaceContainer } from './FaceContainer';

export const Face = ({
  width, 
  height, 
  centerX, 
  centerY, 
  strokeWidth, 
  strokeHeight, 
  hatWidth, 
  hatHeight, 
  eyeOffsetX, 
  eyeOffsetY, 
  eyeRadius,
  mouthRadius,
  mouthWidth
}) => (
  <FaceContainer
    width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}
  >
  <BackgroundCircle 
    radius={centerX/2 - strokeWidth / 1.5} 
    strokeWidth={strokeWidth}
  />
  <Eyes 
    eyeOffsetX={eyeOffsetX}
    eyeOffsetY={eyeOffsetY}
    eyeRadius={eyeRadius}
  />
  <Mouth 
    mouthRadius={mouthRadius}
    mouthWidth={mouthWidth}
  />
  <Hat
    hatWidth={hatWidth}
    hatHeight={hatHeight}
    eyeOffsetX={eyeOffsetX}
    eyeOffsetY={eyeOffsetY}
    />

  </FaceContainer>
);