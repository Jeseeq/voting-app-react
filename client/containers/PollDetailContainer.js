import {connect} from 'react-redux';
import {fetchPoll, fetchPollFailure, fetchPollSuccess} from '../actions/polls';

import {Detail} from '../components/Detail';


const mapStateToProps = (state) =>{

};

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchPoll: (id) => {
      dispatch(fetchPoll(id)).then((response) =>{
        !response.error ? dispatch(fetchPollSuccess(response.data)) :
                          dispatch(fetchPollFailure(response.error));
      });
    }
  };
};


const PollDetailContainer = connect({
  mapStateToProps,
  mapDispatchToProps
})(Detail);
export default PollDetailContainer;
