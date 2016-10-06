import React from 'react'
import Layout from './layout.jsx'

class Home extends React.Component{
  render (){
    return (
      <Layout>
        <h1>{this.props.title}</h1>
      </Layout>
    )
  }
}

export default Home
