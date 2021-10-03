import * as React from 'react';

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M4.479 17.426a3.166 3.166 0 015.97 0h10.728v2.11H10.45a3.165 3.165 0 01-5.97 0H.08v-2.11H4.48zm6.329-7.384a3.166 3.166 0 015.97 0h4.4v2.11h-4.4a3.166 3.166 0 01-5.97 0H.08v-2.11h10.728zm-6.33-7.384a3.166 3.166 0 015.971 0h10.728v2.11H10.45a3.165 3.165 0 01-5.97 0H.08v-2.11H4.48zm2.986 2.11a1.055 1.055 0 100-2.11 1.055 1.055 0 000 2.11zm6.33 7.384a1.054 1.054 0 100-2.11 1.054 1.054 0 000 2.11zm-6.33 7.384a1.055 1.055 0 100-2.11 1.055 1.055 0 000 2.11z"
        fill="#727272"
      />
    </svg>
  );
}

export default SvgFilter;
