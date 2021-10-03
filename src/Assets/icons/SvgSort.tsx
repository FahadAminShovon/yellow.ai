import * as React from 'react';

function SvgSort(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={22}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M11.044 5.825L9.553 7.316 6.878 4.641v13.895h-2.11V4.64L2.094 7.316.6 5.825 5.823.603l5.221 5.222zm10.549 8.544l-5.222 5.222-5.221-5.222 1.491-1.491 2.677 2.675-.002-13.895h2.11v13.895l2.675-2.675 1.492 1.491z"
        fill="#727272"
      />
    </svg>
  );
}

export default SvgSort;
