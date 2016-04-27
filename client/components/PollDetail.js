import React, {Component, PropTypes} from 'react';
import FailureAlert from './layout/FailureAlert';
import LoadingAlert from './layout/LoadingAlert';
import Chart from 'chart.js';

export default class Detail extends Component {
  static contexTypes = {
    router: PropTypes.object
  };
  constructor(props){
    super(props);
    this.state = {
      legendData: []
    };
  }

  // Reset active poll state in global state object
  componentWillUnmount() {
    this.props.resetMe();
  }
  componentWillMount(){
    this.props.fetchPoll(this.props.pollId);
  }

  componentDidUpdate(prevProps){
    if (!prevProps.activePoll.poll){
      this.loadPoll();
    }
    //
  }


  randomColor() {
    let hexList = '0123456789ABCDEF';
    let color = "#";
    let highlight = "#";
    for (let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * 15);
      if (num + 2 > 15) {
        num -= 2;
      }
      color += hexList[num];
      highlight += hexList[num + 2];
    }
    return [color, highlight];
  }

  loadPoll(){
    console.log(this.props);
    let newData = this.props.activePoll.poll;
    if (!newData || newData.totalVotes == 0) {
      newData = [{
        value: 1,
        label: 'No votes yet',
        color: '#cccccc',
        highlight: '#eeeeee' }];
    }  else {
      let choices = newData.choices;
      newData = Object.keys(choices).map(choice => {
      // random color each time rendered
        let colors = this.randomColor();

        return {
          value: choices[choice],
          label: choice,
          color: colors[0],
          highlight: colors[1]
        };
      });
    }
    const ctx = document.getElementById("result-" + this.props.poll.id).getContext("2d");
    const myPieChart = new Chart(ctx).Pie(newData);
  }

  render(){
    const { poll, loading, error } = this.props.activePoll;
    let chartClass = this.props.pollId;
    return (
      <div>
      { loading ? <LoadingAlert /> : null }
      { error ? <FailureAlert /> : null }
      { !loading && !error ?
        <div>
          <canvas id={"result-" + chartClass}></canvas>
        </div>
      :null
      }
    </div>
    );
  }
}
Detail.propTypes = {
  activePoll: PropTypes.object,
  fetchPoll: PropTypes.func,
  resetMe: PropTypes.func,
  pollId: PropTypes.string
};
