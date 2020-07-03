import { Tabs } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
// import Icon from '@ant-design/icons';
import './ManageColumns.css';
import CustomModal from "../components/CustomModal"

const { TabPane } = Tabs;



class ManageColumns extends React.Component {


    render() {
        return (
            <div>
                <CustomModal
                
                name="Manage Columns"
                    title="Manage Columns"
                    okText="Apply Changes"
                >
                    <Tabs type="card">
                        <TabPane tab="Selected Columns" key="1">
                            {<div>
                                <h3>_ Column Selected</h3>
                                <p> Re-arrange or remove columns by dragging, or by using the buttons</p>
                            </div>
                            }
                        </TabPane>
                        <TabPane tab="Sort Order" key="2">
                            {/* <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p> */}
                        </TabPane>
                    </Tabs>
                </CustomModal>
            </div>
        )
    }

}
export default connect()(ManageColumns)