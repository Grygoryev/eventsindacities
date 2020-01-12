import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  constructor() {
    super()
    this.state = {
      post: null
    }
  }

  componentDidMount() {
    let id = this.props.match.params.post_id
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => {
        this.setState({
          post: response.data
        })
        console.log(response)
      })
  }

  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="post-title">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
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

export default Post