import React, { Component } from 'react'
import { Modal , Button} from 'antd';
import { connect } from 'react-redux';


export class CustomModal extends Component {
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
        return (
            <div>
             <Button onClick={this.showModal}>{this.props.icon}{this.props.name}</Button>

                <Modal
                    title={this.props.title}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText={this.props.okText}

                >{this.props.children}</Modal>
            </div>
        )
    }
}

export default connect()(CustomModal)



