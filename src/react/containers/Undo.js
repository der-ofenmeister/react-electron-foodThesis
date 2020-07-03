import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';


class Undo extends React.Component {
    render() {
        return (
            <div>
                <Button>Undo</Button>
            </div>
        )
    }

}
export default connect()(Undo)