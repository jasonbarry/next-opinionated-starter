// @flow
import * as React from 'react'

type Props = {
  children: React.Node,
}

const Header = (props: Props) => {
  return <h1>{props.children}</h1>
}

export default Header
