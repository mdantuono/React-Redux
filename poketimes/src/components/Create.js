import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class Create extends Component {
  submitCreate = () => {
    console.log(this.props);
    this.props.createPost();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <h4 className="center">Create a New Post</h4>
        <form onSubmit={this.submitCreate}>
          <input name="title" placeholder="Post title" required></input>
          <input name="body" placeholder="Post body" required></input>
          <br /><br />
          <button className="btn btn-success" type="submit">Submit Post</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchTopProps = (dispatch) => {
  return {
    createPost: () => { dispatch(createPost()) }
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(Create)
