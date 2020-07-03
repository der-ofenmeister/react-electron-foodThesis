import React from 'react';
import { fetchSearch } from "../redux-store/actions/search";
import { fetchData } from "../redux-store/actions/table";
import { Table, Card, Skeleton, Input, Divider, Button } from 'antd';
//import axios from 'axios';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';



// const sortData = (data) => {
//     // Call slice to create a new Array and prevent mutating it if it's stored in state
//     return data.slice().sort((a, b) => a.myKey - b.myKey);
//  }

class Search extends React.Component {


    // componentDidMount() {
    //     this.props.fetchData()
    // }
    
    render() {

        
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
              },
              {
                title: 'Type',
                dataIndex: 'dataType',
                key: 'dataType',
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
            {
              title: 'Details',
              key: 'details',
              dataIndex: 'fdcId',
              render: (record) => (
                <Link to="/table/">
                  <Button onClick={() => { this.props.fetchData(record) }}>View all nutrients</Button>
                </Link>
              ),

            },
          ];


        return (

            <div>



                    <div>

                        <Card title="Enter Search String" bordered  style={{ "margin": "21px", "box-shadow": "0px 2px 2px 1px rgba(0,0,0,0.21)" }}>
                    
                            <Input.Search onSearch={(value) => {this.props.fetchSearch(value)}} placeholder="search for your favourite snack!" style={{ width: 400 }} enterButton />

                        </Card>

                        <Card title="Serch results" bordered  style={{ "margin": "21px", "box-shadow": "0px 2px 2px 1px rgba(0,0,0,0.21)" }}>
                            <div>
                                <h3>Search query: {this.props.searchQuery}</h3>
                                <h3>Total results: {this.props.foodSearch.length}</h3>

                            </div>
                        </Card>

                        <Card>

                            <Table
                                columns={columns}
                                dataSource={this.props.foodSearch}
                                pagination={{position:'bottom'}}
                            />
                        </Card>

                        <Divider />

                        

                    </div>



            </div>
        )
    }
}

const mapStateToProps = state => {
    return {    
        loading: state.search.loading,
        error: state.search.error,
        foodSearch: state.search.finalFoodSearch,
        searchQuery: state.search.searchQuery,
        numHits: state.search.numHits,
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
        fetchSearch: (queryStr) => dispatch(fetchSearch(queryStr)),
        fetchData: (fdcId) => dispatch(fetchData(fdcId)),
    };
  }

  
export default connect(mapStateToProps, mapDispatchToProps)(Search);













