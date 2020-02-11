import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const VIEWBOX = '0 0 32 32';

export function IconReonomy(props: SvgIconProps) {
  return (
    <SvgIcon viewBox={VIEWBOX} color="primary" {...props}>
      <path d="M31.68,16.32l0,0,0-.06s0,0,0-.06a.08.08,0,0,0,0-.05.81.81,0,0,0,0-.22.08.08,0,0,0,0-.05s0,0,0-.06l0-.06,0,0a.41.41,0,0,0-.16-.16l0,0-.06,0h-.05l-.06,0H24.18v-7a.37.37,0,0,0,0-.11.08.08,0,0,0,0,0s0,0,0-.06l0-.06,0,0L24,8,16.41.39a.58.58,0,0,0-.82,0L8,8H8l-7.6,7.6a.57.57,0,0,0,0,.82L8,24H8l7.6,7.6.09.07,0,0,.06,0h.06l.05,0h.22l.05,0h.06l.06,0,0,0,.09-.07L24,24h0l7.6-7.6Zm-1.88.26L24.18,22.2V16.58ZM16,1.62,22.78,8.4,16,15.18,9.22,8.4ZM7.82,22.2,1.62,16l6.2-6.2ZM9,9.8l6.44,6.44V29.8L9,23.36Zm7.6,6.44L23,9.8V23.36L16.58,29.8Z" />
    </SvgIcon>
  );
}

export function IconPencil(props: SvgIconProps) {
  return (
    <SvgIcon viewBox={VIEWBOX} {...props}>
      <path d="M30.566 1.434c-0.899-0.899-2.094-1.394-3.366-1.394s-2.467 0.494-3.366 1.394l-20.4 20.4c-0.083 0.083-0.146 0.182-0.186 0.293l-3.2 8.8c-0.106 0.293-0.034 0.619 0.186 0.838 0.152 0.152 0.357 0.234 0.566 0.234 0.091 0 0.184-0.016 0.274-0.048l8.8-3.2c0.11-0.040 0.21-0.104 0.293-0.186l20.4-20.4c0.899-0.899 1.394-2.094 1.394-3.366s-0.494-2.467-1.394-3.366zM9.16 27.309l-7.022 2.554 2.554-7.022 17.709-17.709 4.469 4.469-17.709 17.709zM29.434 7.034l-1.434 1.434-4.469-4.469 1.434-1.434c0.597-0.597 1.39-0.925 2.234-0.925s1.637 0.328 2.234 0.925c0.597 0.597 0.925 1.39 0.925 2.234s-0.328 1.637-0.925 2.234z" />
    </SvgIcon>
  );
}