// @flow
import * as React from 'react'

type Props = {
  status: ?number,
};

export default class Index extends React.Component<Props> {
  static getInitialProps({ res, err }: { err: Object, res: Object }) {
    //
  }

  render() {
    return (
      <section>
        <h1>Home</h1>
      </section>
    )
  }
}
