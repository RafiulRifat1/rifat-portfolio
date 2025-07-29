// src/components/SplineScene.tsx

import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Spline
          scene="https://prod.spline.design/1FMx-RcaEad2WtiI/scene.splinecode" 
      />
    </div>
  );
}