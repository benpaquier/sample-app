import React from 'react'

class Content extends React.Component {
  render() {
    return (
      <p>
        {this.props.children}
      </p>
    )
  }
}

export default Content