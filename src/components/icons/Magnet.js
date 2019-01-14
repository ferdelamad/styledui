import React from 'react'
import SVG from './SVG'

const Magnet = props => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    fillHover={props.fillHover}
  >
    <path d="M14.474 20.863c2.038-2.485 5.519-6.799 5.519-6.799l-3.201-2.577s-2.381 2.936-5.476 6.748c-3.592 4.426-9.901-2.008-5.559-5.56 3.8-3.107 6.747-5.475 6.747-5.475l-2.576-3.2s-4.312 3.484-6.799 5.517c-2.218 1.813-3.129 3.957-3.129 6.033 0 4.379 4.052 8.45 8.431 8.45 2.072 0 4.219-.913 6.043-3.137zm3.936-6.628l-1.415 1.759-1.45-1.165 1.417-1.762 1.448 1.168zm-8.653-8.654l1.167 1.449-1.762 1.417-1.165-1.45 1.76-1.416zm9.611 6.3l4.318-2.88-1.575-.638 1.889-2.414-4.421 2.788 1.716.695-1.927 2.449zm-7.292-7.186l4.916-1.667-1.356-1.022 2.448-2.006-4.991 1.712 1.478 1.114-2.495 1.869z" />
  </SVG>
)

export default Magnet
