import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo.svg'
import { connect } from 'react-redux'

class Home extends Component{
  constructor() {
    super()
  }


  render() {
    console.log(this.props)
    const { posts } = this.props
    const postList = posts.length ? ( 
      posts.map( post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Logo} alt="Logo" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.name}</span>
              </Link>
              <p>{post.message}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center"> No posts yet </div>
    )
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <div>{postList}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)