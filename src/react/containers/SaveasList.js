
import React from 'react';
import { connect } from 'react-redux';
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {SaveOutlined} from '@ant-design/icons';


class SaveasList extends React.Component {

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
                    <Button>
                    <SaveOutlined /> Save As List<DownOutlined />
                    </Button>
                </Dropdown>
            </div>
        )
    }

}
export default connect()(SaveasList)