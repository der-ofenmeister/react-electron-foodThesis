import React from 'react';
import { fetchData } from "../redux-store/actions/table";
import { Table, Card, Skeleton, InputNumber, Divider, Row, Col } from 'antd';
//import axios from 'axios';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';



// const sortData = (data) => {
//     // Call slice to create a new Array and prevent mutating it if it's stored in state
//     return data.slice().sort((a, b) => a.myKey - b.myKey);
//  }

class Compare extends React.Component {


    // componentDidMount() {
    //     this.props.fetchData()
    // }
    
    render() {
        const columns = [
            {
              title: 'Food name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Category',
              dataIndex: 'category',
              key: 'category',
            },
            {
              title: 'Type',
              dataIndex: 'type',
              key: 'type',
            },
          ];


        return (

            <div>



                    <div>

                    <h2>Select food items from list to compare</h2>   
                    <Divider />
                                     
                    <Row gutter={[32,32]}>

                        <Col span={12}>

                            <Card bordered  style={{ "margin": "21px", "box-shadow": "0px 2px 2px 1px rgba(0,0,0,0.21)" }} >
                                <Table
                                        columns={columns}
                                        dataSource={this.props.nutrientList}
                                        pagination={{position:'bottom'}}
                                />
                            </Card>

                        </Col>
                    
                    
                        <Col span={12}>

                            <Card bordered  style={{ "margin": "21px", "box-shadow": "0px 2px 2px 1px rgba(0,0,0,0.21)" }} >
                                <Table
                                            columns={columns}
                                            dataSource={this.props.nutrientList}
                                            pagination={{position:'bottom'}}
                                    />
                            </Card>

                        </Col>
                    
                    
                    </Row>


                        <Divider />



                    </div>



            </div>
        )
    }
}


export default connect()(Compare);













