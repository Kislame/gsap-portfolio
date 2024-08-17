'use client';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

function Wrapper({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.07 }}>
      {children}
    </ReactLenis>
  );
}
export default Wrapper;
