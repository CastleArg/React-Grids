import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import Grid from './Grid.js';
//const ResponsiveReactGridLayout = WidthProvider(Responsive);
class Dashboard extends Component {  
    
render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 2, h: 8,minW: 2 ,minH: 4},
      {i: 'b', x: 2, y: 0, w: 4, h: 8,minW: 2},
      {i: 'c', x: 0, y: 2, w: 8, h: 8,minW: 2}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout}  cols={12} rowHeight={30} width={1200}>
          <div key={'a'}><Grid source = 'https://api.trademe.co.nz/v1/Localities.Json'/></div>
        <div key={'b'}><Grid source = 'https://api.trademe.co.nz/v1/Localities.Json'/></div>
        <div key={'c'}><Grid source = 'https://api.trademe.co.nz/v1/Localities.Json'/></div>
      </ReactGridLayout>)

};
}

export default Dashboard;
