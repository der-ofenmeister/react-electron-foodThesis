import React from 'react';
import { Row, Col,Divider } from 'antd';
import { connect } from 'react-redux';
import ManageColumns from './ManageColumns'
import ManageFilters from './ManageFilters'
import ManageRelationships from './ManageRelationships'
import Export from './Export'
import Undo from './Undo'
import SaveasList from './SaveasList'
import GenerateCode from './GenerateCode'




const style = { background: 'white', padding: '20px' };

class CustomGrid extends React.Component {
    render() {
        return (
            <div>
{/* 
                <Row gutter={0}>
                    <Col span={24}><div style={style}></div></Col>

                </Row> */}
                <br />
                <br />

                {/* <Row gutter={[0,15]} >
                    <Col span={3}><ManageColumns/></Col>
                    <Col span={3}><ManageFilters/></Col>
                    <Col span={4}><ManageRelationships/></Col>
                    <Col span={2}><Undo/></Col>
                    <Col span={1}></Col>
                    <Col span={3}><SaveasList/></Col>
                    <Col span={3}><GenerateCode/></Col>
                    <Col span={2}><Export/></Col>           
                </Row> */}


                <Row >
                    <Col span={24}>{this.props.children}</Col>
                </Row>

                {/* <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}></Divider> */}

                {/* <Row style={style} >
                    Footer
                </Row> */}
            </div>
        )
    }
}

export default connect()(CustomGrid)