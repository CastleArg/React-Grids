import Griddle from 'griddle-react';
import React, { Component } from 'react';
import $ from 'jquery';

 var rootData = {};
 var displayData = [{}];
class Grid extends Component {  
  
  constructor(){
      super();
     
      this.state = ({rootData :rootData});
  }    
  componentDidMount(){
      this.serverRequest = $.getJSON(this.props.source, function (result) {
      rootData = result;
    for (var i = 0;i<rootData.length;i++){       
        if (typeof(rootData[i].value)!=='object'){
            displayData.push(rootData[i]);     
        }
    }
      
      this.setState({
        rootData: rootData,
        //put back once above works
        displayData : rootData
      });
    }.bind(this));
  }  
    
  render() {
    return (
        <div>
        <p>Im a grid</p>
     <Griddle ShowFilter = {true} columns = {['LocalityId','Name']} results={this.state.displayData}/>
    </div>);  
  }
  
}

export default Grid;
