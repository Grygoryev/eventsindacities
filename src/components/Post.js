import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions.js'

class Post extends Component {
  constructor() {
    super()
  }

  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)
    const post = this.props.post ? (
      <div className="post">
        <h4 className="post-title">{this.props.post.name}</h4>
        <p>{this.props.post.message}</p>
        <div className="center">
          <button className='btn grey' onClick={this.handleClick}>
            Delete post
          </button>
        </div>
      </div>
    ) : (
      <div> loading post... </div>
    )
    return (
      <div className="container">
       { post }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id
  return {
    post: state.posts.find(post => id == post.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: id => { dispatch(deletePost(id)) }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Post)