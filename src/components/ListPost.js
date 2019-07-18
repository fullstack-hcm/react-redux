import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePost } from '../actions/posts';

class ListPost extends Component {
  // REMOVE HERE 5
  _handleRemove = postInfo => {
    console.log({ postInfo });
    this.props.removePost(postInfo);
  }

  render() {
    const { postsForListPostComponent: posts } = this.props;

    return (
      <>
      <br/><br/>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-lg-5">
              <h6 className="text-muted">List Post</h6> 
              <ul className="list-group">
                  {posts && posts.map(post => (
                     <a key={`${post}`} href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <div className="flex-column">
                          {post}
                        </div>
                          <button className="btn btn-danger" onClick={() => this._handleRemove(post)}>Remove</button>
                      </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  postsForListPostComponent: state.posts.listPosts
});

// export default connect(mapStateToProps, null)(ListPost);

// REMOVE HERE 3
export default connect(mapStateToProps, { removePost })(ListPost);