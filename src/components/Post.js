import React, { Component } from 'react';
/**
 * ADD ACTIONS IN COMPONENT IMPLEMENTION
 */
import { addPost } from '../actions/posts';
import { connect } from 'react-redux';

class Post extends Component {
    state = { infoPost: '' };

    _handleChangePostInfo = e => this.setState({ [e.target.name]: e.target.value });

    _handleAddPost = () => {
        const { infoPost }  = this.state;
        const { addPost }   = this.props;
        addPost(infoPost);
        this.setState({ infoPost: '' });
    }

  render() {
    return (
        <>
            <div> ADD POST </div>
            <input 
              type="text" 
              name="infoPost" 
              value={this.state.infoPost} 
              onChange={e => this._handleChangePostInfo(e)}
              className='form-control'
            />
            <button onClick={() => this._handleAddPost()} className="btn btn-primary">@Add</button>
        </>
    );
  }
}

/**
 * HERE
 */
// export default Post;
// const mapStateToProps = state => ({
  
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(, dispatch);

export default connect(null, { addPost })(Post);