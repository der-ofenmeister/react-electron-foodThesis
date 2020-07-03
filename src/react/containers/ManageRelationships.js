import React from 'react';
import { connect } from 'react-redux';
import { ShareAltOutlined } from '@ant-design/icons';
import CustomModal from "../components/CustomModal"


class ManageRelationships extends React.Component {
    render() {
        return (
            <div>
                <CustomModal
                    title="Manage Relationships"
                    okText="Apply Changes"
                    name="Manage Relationships"
                    icon={<ShareAltOutlined/>}
                >

                </CustomModal>
            </div>
        )
    }

}
export default connect()(ManageRelationships)