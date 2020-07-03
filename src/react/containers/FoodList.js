import React from 'react';
import { fetchList } from "../redux-store/actions/list";
import { Table, Card, Skeleton, InputNumber, Divider, Button } from 'antd';
//import axios from 'axios';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';



// const sortData = (data) => {
//     // Call slice to create a new Array and prevent mutating it if it's stored in state
//     return data.slice().sort((a, b) => a.myKey - b.myKey);
//  }

class FoodList extends React.Component {


    componentDidMount() {
        this.props.fetchList();
    }

    // componentWillReceiveProps(newProps) {
    //   this.props.fetchList();
    // }
    
    render() {

        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Database ID',
              dataIndex: 'fdcId',
              key: 'fdcId',
            },
            {
              title: 'Number of nutrients',
              dataIndex: 'numNut',
              key: 'numNut',
            },
          ];


        return (

            <div>

              {this.props.loading ?
              
                ( <Skeleton active /> ) 
                : 
                (
                  
                  <div>


                    <Card title="All foods" bordered style={{ "margin": "21px", "box-shadow": "0px 2px 2px 1px rgba(0,0,0,0.21)" }}>

                        <Table
                            columns={columns}
                            dataSource={this.props.foodList}
                            pagination={{position:'bottom'}}
                        />


                        {/* <Button onClick={() => {console.log(this.props.foodList)}}>haellelle</Button> */}
                    </Card>


                  </div>

                )
              }




            </div>
        )
    }
}

const mapStateToProps = state => {
  return {    
      loading: state.list.loading,
      error: state.list.error,
      foodList: state.list.finalFoodList,
      // foodCat: state.finalFoodData.category,
      // foodClass: state.finalFoodData.class,
      // foodSciName: state.finalFoodData.sciName,
      // foodNumNut: state.finalFoodData.numNutrients,
      // nutrientList: state.nutrients,
      // foodDatabaseId: state.finalFoodData.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchList: () => dispatch(fetchList()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodList);













