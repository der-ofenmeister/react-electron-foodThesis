import React from 'react';
import { fetchData } from "../redux-store/actions/table";
import { Table, Card, Skeleton, InputNumber, Divider } from 'antd';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    PieChart, Pie, ResponsiveContainer
  } from 'recharts';
//import axios from 'axios';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';



// const sortData = (data) => {
//     // Call slice to create a new Array and prevent mutating it if it's stored in state
//     return data.slice().sort((a, b) => a.myKey - b.myKey);
//  }

class CustomTable extends React.Component {


    // componentDidMount() {
    //     this.props.fetchData(this.props.foodDatabaseId);
    // }

    // componentWillReceiveProps(newProps) {
    //     this.props.fetchData(newProps.foodDatabaseId);
    // }
    
    render() {

        const columns = [
            {
              title: 'Nutrient',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Amount',
              dataIndex: 'amount',
              key: 'amount',
            },
            {
              title: 'Units',
              dataIndex: 'units',
              key: 'units',
            },
          ];

          const style = {
            top: 0,
            left: 350,
            lineHeight: '24px',
          };

          
        return (

            <div>


                {this.props.loading ? (

                    <Skeleton active />
                ) 
                : 
                (

                    <div>

                        <Card title="Input Food ID and press ENTER to view nutritional data" bordered  style={{ "margin": "21px", "box-shadow": "0px 2px 2px 1px rgba(0,0,0,0.21)" }}>
                    
                            <InputNumber defaultValue={null} onPressEnter={(e) => {this.props.fetchData(e.target.value)}} style={{ margin: "21px" }}/>

                        </Card>

                        <Divider />

                        <Card title="General Information for the required food" bordered style={{ "margin": "21px", "box-shadow": "0px 2px 2px 1px rgba(0,0,0,0.21)" }}>

                            <h2>{`Name: ${this.props.foodName}`}</h2>

                            <h3>{`Category: ${this.props.foodCat}`}</h3>

                            <h3>{`Food Class: ${this.props.foodClass}`}</h3>

                            <h3>{`Scientific Name: ${this.props.foodSciName}`}</h3>

                            <h3>{`Total number of nutrients: ${this.props.foodNumNut}`}</h3>

                            <h2>{`Database ID: ${this.props.foodDatabaseId}`}</h2>

                        </Card>
                        
                        <Divider />

                        <Card title="Nutritional Info" bordered style={{ "margin": "21px", "box-shadow": "0px 2px 2px 1px rgba(0,0,0,0.21)" }}>

                            <Table
                                columns={columns}
                                dataSource={this.props.nutrientList}
                                pagination={{position:'bottom'}}
                            />

                        </Card>
                        <br />

                        <Card>
                            <BarChart
                                width={1690}
                                height={690}
                                data={this.props.graphData}
                                margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="amount" fill="#8884d8" />
                            </BarChart>
                        </Card>


                        <Card>
                            <div style={{ width: '100%', height: 690 }}>
                                <ResponsiveContainer>
                                <PieChart>
                                    <Pie dataKey="amount" data={this.props.graphData} fill="#8884d8" label />
                                </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>


                    </div>

                )}


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {    
        loading: state.table.loading,
        error: state.table.error,
        foodName: state.table.finalFoodData.name,
        foodCat: state.table.finalFoodData.category,
        foodClass: state.table.finalFoodData.class,
        foodSciName: state.table.finalFoodData.sciName,
        foodNumNut: state.table.finalFoodData.numNutrients,
        nutrientList: state.table.nutrients,
        foodDatabaseId: state.table.finalFoodData.id,
        graphData: state.table.graphData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (foodId) => dispatch(fetchData(foodId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);













