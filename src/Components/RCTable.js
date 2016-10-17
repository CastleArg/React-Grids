import React, { Component } from 'react';
import Table from 'rc-table';
var columns = [{
  title: 'Name', dataIndex: 'name', key:'name', width: 100,
}, {
  title: 'Age', dataIndex: 'age', key:'age', width: 100,
}, {
  title: 'Address', dataIndex: 'address', key:'address', width: 200,
}];

const data = [
  { name: 'Jack', age: 28, address: 'some where', key:'1' },
  { name: 'Rose', age: 36, address: 'some where', key:'2', supervisor : '2' },
  { name: 'Bob', age: 42, address: 'some where', key:'3',supervisor : '1' }
];


var handleRowClick = (record,index)=>{
  document.getElementById("selection").innerHTML =record.name + '\'s supervisor is' + data.filter((x)=>x.key===record.supervisor)[0].name;
} 


class RCTable extends Component {
render(){ 
    return(<div>
                <Table columns={columns} data={data} onRowClick={handleRowClick} />
                <div>child data</div>
                <div id="selection">Click a record to see supervisor</div>
         </div>);
}

}

export default RCTable;