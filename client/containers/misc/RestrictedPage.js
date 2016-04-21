import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class RestrictedPage extends Component {

  componentWillMount() {
    const { user } = this.props.user;
    const { router } = this.context;

    if (!user) {
      const path = this.props.location.pathname;
      router.push(`/login?redirect=${path}`);
    }
  }

  render(){
    const { user } = this.props.user;

    if (user){
      return this.props.children;
    }
    return null;
  }
}

RestrictedPage.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object,
  location: PropTypes.object,
};

RestrictedPage.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state) {
  return{
    user: state.user,
  };
}

export default connect(mapStateToProps)(RestrictedPage);
