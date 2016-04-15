import {connect} from 'react-redux';
import {fetchPolls, fetchPollsFailure, fetchPollsSuccess} from '../actions/polls';

import PollsList from '../components/PollsList';


const mapStateToProps = (state) => {
  return {
    pollsList: state.polls.pollsList,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPolls: () => {
      dispatch(fetchPolls()).then((response) => {
        !response.error ? dispatch(fetchPollsSuccess(response.payload)) :
                          dispatch(fetchPollsFailure(response.payload));
      });
    }
  };
};


const PollsListContainer = connect(mapStateToProps,
                                  mapDispatchToProps)(PollsList);

export default PollsListContainer;
