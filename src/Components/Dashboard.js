import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import Grid from './Grid.js';
import DataTreeView from './DataTreeView.js';
import DataChart from './DataChart.js';
 
class Dashboard extends Component {  
    
render() {
    var layout = [
      {i: 'grid', x: 0, y: 0, w: 3, h: 8,minW: 2 ,minH: 4 ,autosize:true},
      {i: 'grid2', x: 4, y: 0, w: 3, h: 8,minW: 2,autosize:true},
      {i: 'treeview', x: 8, y: 0, w: 2, h: 8,minW: 2, maxH : 8,autosize:true},
      {i: 'grid3', x: 10, y: 0, w: 2, h: 8,minW: 2,autosize:true},
      {i: 'chart', x: 2, y: 4, w: 6, h: 8,minW: 2,autosize:true}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout}  cols={16} rowHeight={30} width={1280}>
          <div key={'grid'}><Grid  source='https://api.trademe.co.nz/v1/Localities.Json'/></div>
         <div key={'grid2'}><Grid source='https://api.trademe.co.nz/v1/Localities.Json'/></div>
         <div key={'treeview'}><DataTreeView source='https://api.trademe.co.nz/v1/Localities.Json'/></div>
         <div key={'grid3'}><Grid source='https://api.trademe.co.nz/v1/Localities.Json'/></div>      
         <div key={'chart'}><DataChart source='https://api.trademe.co.nz/v1/Localities.Json'/></div>
      </ReactGridLayout>)
}
}

export default Dashboard;
