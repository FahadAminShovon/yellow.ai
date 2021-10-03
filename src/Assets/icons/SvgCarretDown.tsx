import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={8}
      height={4}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M4 4L0 0h8L4 4z' fill='#384248' />
    </svg>
  );
}

export default SvgComponent;
