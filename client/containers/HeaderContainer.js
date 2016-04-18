import {connect} from 'react-redux';

import {logoutUser, logoutUserSuccess, logoutUserFailure, resetUser
} from '../actions/users';


import Header from '../components/Header';

const mapStateToProps = (state) =>{
  return{
    AuthenticatedUser: state.user.status === 'authenticated' ?
                                              state.user.user : null,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    logout: () => {
      dispatch(logoutUser()).then((response) =>{
        if (!response.error) {
          dispatch(logoutUserSuccess(response.payload));
          dispatch(resetUser());
        }
        dispatch(logoutUserFailure(response.payload));
        dispatch(resetUser());
      });
    },
  };
};


const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);


export default HeaderContainer;
