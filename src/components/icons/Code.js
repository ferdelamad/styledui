import React from 'react'
import SVG from './SVG'

const Code = props => (
  <SVG
    href={props.href}
    target={props.target}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
  >
    <path d="M0 0v24h24v-24h-24zm11 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z" />
  </SVG>
)

export default Code
