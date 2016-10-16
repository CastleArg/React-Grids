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

      //attempt to strip out values taht are objects as griddle doesn't like them'
    for (var i = 0;i<rootData.length;i++){     
        for (var j = 0;j<3;j++){ 
       // console.log(typeof(rootData[i][j]));        
          if (typeof(rootData[i][j])!=='object'){          
              displayData.push(rootData[i][j]);   
          }  
        }
    }
      
      this.setState({
        rootData: rootData,
        //put back displayData once above works
        displayData : rootData
      });
    }.bind(this));
  }  
    
  render() {
    return (
        <div>     
     <Griddle enableInfiniteScroll={this.props.enableInfiniteScroll} columns={['LocalityId','Name']} showFilter={true}  results={this.state.displayData}/>
    </div>);  
  }
  
}

export default Grid;
