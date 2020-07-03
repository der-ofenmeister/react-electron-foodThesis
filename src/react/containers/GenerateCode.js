
import React from 'react';
import { connect } from 'react-redux';
import { Button, Menu, Dropdown, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CodeOutlined } from '@ant-design/icons';


class GenerateCode extends React.Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {

        function handleMenuClick(e) {
            console.log('click', e);
        }
        const menu = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        return (
            <div>
                <Dropdown overlay={menu}>
                    <Button onClick={this.showModal}>
                        <CodeOutlined />GenerateCode<DownOutlined />
                    </Button>

                </Dropdown>
                <Modal
                    title="Generate_ code for query"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="Save"
                    cancelText="Close"

                >

                </Modal>
            </div>
        )
    }

}
export default connect()(GenerateCode)