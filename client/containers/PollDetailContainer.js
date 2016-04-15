import {connect} from 'react-redux';
import {fetchPoll, fetchPollFailure, fetchPollSuccess} from '../actions/polls';

import Detail from '../components/Detail';


function mapStateToProps(state, ownProps) {
  return{
    activePoll: state.polls.activePoll,
    pollId: ownProps.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPoll: (id) => {
      dispatch(fetchPoll(id)).then((response) =>{
        !response.error ? dispatch(fetchPollSuccess(response.payload)) :
                          dispatch(fetchPollFailure(response.payload));
      });
    }
  };
};


const PollDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
export default PollDetailContainer;
