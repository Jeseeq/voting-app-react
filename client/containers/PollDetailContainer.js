import {
  fetchPoll,
  fetchPollFailure,
  fetchPollSuccess,
  resetPoll
} from '../actions/polls';

import {connect} from 'react-redux';
import PollDetail from '../components/PollDetail';

function mapStateToProps(state, ownProps) {
  return{
    activePoll: state.polls.activePoll,
    pollId: ownProps.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPoll: (id) => {
      dispatch(fetchPoll(id)).then((response) => {
        if (!response.error) {
          dispatch(fetchPollSuccess(response.payload));

        } else {
          dispatch(fetchPollFailure(response.payload));
        }
      });
    },
    resetMe: () => {
      dispatch(resetPoll());
    },
  };
};


const PollDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PollDetail);
export default PollDetailContainer;
