import { Tabs } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { FileZipOutlined } from '@ant-design/icons';
import './ManageColumns.css';
import CustomModal from "../components/CustomModal"

const { TabPane } = Tabs;


class Export extends React.Component {
   

    render() {
        return (
            <div>
                <CustomModal
                    title="Download results for query"
                    okText="Download File"
                    cancelText="Close"
                    name="Export"
                    icon={<FileZipOutlined/>}
                >
                    <Tabs type="card" tabPosition="left">
                        <TabPane tab="Download TSV file" key="1">
                            {/* <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p>
                            <p>Content of Tab Pane 1</p> */}
                        </TabPane>
                        <TabPane tab="All Columns" key="2">
                            {/* <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p> */}
                        </TabPane>
                        <TabPane tab="All Rows" key="3">
                            {/* <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p> */}
                        </TabPane>
                        <TabPane tab="No compression" key="4">
                            {/* <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p> */}
                        </TabPane>
                        <TabPane tab="No Column Headers" key="5">
                            {/* <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p> */}
                        </TabPane>
                        <TabPane tab="Preview" key="6">
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
export default connect()(Export)