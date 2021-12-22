import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import { DataGrid, Column } from 'devextreme-react/data-grid';
// import SelectBox from 'devextreme-react/select-box';
 
import service from './data.js';
 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.data = service.getData();
    }

    render() {
        return (
            <React.Fragment>
                <DataGrid
                    dataSource={this.data}
                    columnAutoWidth={true}
                    allowColumnReordering={true}
                    keyExpr="id"
                >
                    <Column dataField="company" ></Column>
                    <Column dataField="date" dataType="date" ></Column>
                </DataGrid>
                {/* <SelectBox
                    dataSource={this.data}
                    valueExpr="ID"
                    displayExpr={this.getDisplayExpr}
                /> */}
            </React.Fragment>
        );
    }
}
export default App;