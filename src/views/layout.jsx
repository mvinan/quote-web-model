import React, { Component } from 'react'

class Layout extends Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="UTF-8"/>
          <title>Quoted Price - Web Model</title>
          <link rel="stylesheet" href="css/styles.css"/>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>

    );
  }
}

export default Layout
