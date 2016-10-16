import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import Grid from './Grid.js';
import DataTreeView from './DataTreeView.js';
import DataChart from './DataChart.js';
class Dashboard extends Component {  
    
render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 2, h: 8,minW: 2 ,minH: 4 ,autosize:true},
      {i: 'b', x: 2, y: 0, w: 4, h: 8,minW: 2,autosize:true},
      {i: 'c', x: 0, y: 8, w: 6, h: 8,minW: 2, maxH : 8,autosize:true},
      {i: 'd', x: 6, y: 0, w: 4, h: 8,minW: 2,autosize:true},
      {i: 'e', x: 2, y: 10, w: 6, h: 8,minW: 2,autosize:true}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout}  cols={12} rowHeight={30} width={1200}>
          <div key={'a'}><Grid  source='https://api.trademe.co.nz/v1/Localities.Json'/></div>
         <div key={'b'}><Grid source='https://api.trademe.co.nz/v1/Localities.Json'/></div>
         <div key={'c'}><Grid source='https://api.trademe.co.nz/v1/Localities.Json'/></div>
         <div key={'d'}><DataTreeView source='https://api.trademe.co.nz/v1/Localities.Json'/></div>
         <div key={'e'}><DataChart source='https://api.trademe.co.nz/v1/Localities.Json'/></div>
      </ReactGridLayout>)
};
}

export default Dashboard;
