import React from 'react';
import { connect } from 'react-redux';
import { FilterOutlined } from '@ant-design/icons';
import CustomModal from "../components/CustomModal"


class ManageFilters extends React.Component {
   
    render() {
        return (
            <div>                
                <CustomModal
                    title="Active Filters"
                    okText="Define a new filter"
                    icon={<FilterOutlined/>}
                    name="Manage Filters"
                >

                </CustomModal>
            </div>
        )
    }

}
export default connect()(ManageFilters)