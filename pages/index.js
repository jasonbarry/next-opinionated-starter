// @flow
import * as React from 'react'

// components
import Header from 'Components/Header'

export default class Index extends React.Component<*> {
  static getInitialProps() {
    return {}
  }

  render() {
    return (
      <section>
        <Header>Home</Header>
      </section>
    )
  }
}
