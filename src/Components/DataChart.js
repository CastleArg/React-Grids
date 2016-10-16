import React, { Component } from 'react';
import $ from 'jquery';
var LineChart = require("react-chartjs").Line;

var rootData = [{}];

class DataChart extends Component {

    constructor(){
      super();
     
      this.state = ({rootData :rootData,
                    chartData :{
                        datasets: [{
                            data: rootData,                       
                        }],
                        labels: ['loading']
                    }
                 });
          
          
  } 

  componentDidMount(){
        this.serverRequest = $.getJSON(this.props.source, function (result) {
            rootData = result;
            this.setState({
                rootData: rootData,
                chartData :{
                datasets: [{
                    data: [27,67,56,42],
                    
                }],
                labels: ['undecided','temperamental','gazelle']
            }
        });
        }.bind(this));
    }   

  render() {
       return (<LineChart data={this.state.chartData} width="600" height="250"/>);
  }
}

  export default DataChart;