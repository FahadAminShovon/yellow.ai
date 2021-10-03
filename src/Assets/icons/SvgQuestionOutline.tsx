import * as React from 'react';

function SvgQuestionOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0010 18zm-1-5h2v2H9v-2zm2-1.645V12H9v-1.5a1 1 0 011-1 1.5 1.5 0 10-1.471-1.794l-1.962-.393A3.5 3.5 0 1111 11.355z'
        fill='#505862'
      />
    </svg>
  );
}

export default SvgQuestionOutline;
