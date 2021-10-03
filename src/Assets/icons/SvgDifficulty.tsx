import * as React from 'react';

function SvgDifficulty({ fill = '#F4C700' }: { fill?: string }) {
  return (
    <svg width={17} height={6} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x={0.122}
        y={0.072}
        width={16.878}
        height={5.626}
        rx={2.813}
        fill={fill}
      />
    </svg>
  );
}

export default SvgDifficulty;
