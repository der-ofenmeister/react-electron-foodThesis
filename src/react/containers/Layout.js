import React from "react";
import { Layout, Menu, Icon, Divider, Skeleton } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined, SearchOutlined, PieChartOutlined, UnorderedListOutlined} from '@ant-design/icons'
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Hoc from '../hoc/hoc';
// import './Layout.css'
import logo from './logo.png'
import logo2 from './logo2.png'




const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class CustomLayout extends React.Component {

  state = {
    collapsed: true,
  };



  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
    // console.log(this.state.collapsed);
  };

  // edukeyLogo = (collapsed) => {
  //   if (collapsed === true) {
  //     this.setState({logo: logo2})
  //   }
  //   if (collapsed === false) {
  //     this.setState({logo: logo2})
  //   }
  // }

  render() {

    return (

      <Hoc >

            <Layout style={{ minHeight: '100vh', }} >

                <Sider trigger={null} collapsible collapsed={this.state.collapsed} width="270px">
                  <div className="logo" style={{ "marginTop": "5px", "padding": "10px" }}>
                    {this.state.collapsed ?
                      (<img alt='logo' src={logo} style={{ width: '100%', height: '100%', }} />)
                      :
                      (<img alt='logo' src={logo2} style={{ width: '100%', height: '100%' }} />)
                    };
                    <br /><br />
                  </div>
                  

                    <Menu
                      theme="dark"
                      mode="inline"
                    >
                        <Menu.Item key="1">
                          <Link to='/table'><HomeOutlined /><span>Home</span></Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <Link to='/global-search'><SearchOutlined /><span>Database Search</span></Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                          <Link to='/food-list'><UnorderedListOutlined /><span>All Foods</span></Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <Link to='/compare'><PieChartOutlined /><span>Compare Foods</span></Link>
                        </Menu.Item>


                  </Menu>



                </Sider>




              <Layout>

                <Header theme='light' style={{ padding: 0, "background": "#fff" }}>

                  <div className="trigger" style={{ "marginTop": "0", "padding": "0px 24px" }}>
                    {this.state.collapsed ?
                      (<MenuUnfoldOutlined style={{ fontSize: '20px', textAlign: "center" }} onClick={this.onCollapse} />)
                      :
                      (<MenuFoldOutlined style={{ fontSize: '20px', textAlign: "center" }} onClick={this.onCollapse} />)
                    }
                  </div>

                </Header>

                <Content style={{ margin: "1px 0px", }}>

                  <div style={{ background: "#F0F2F5", padding: 16, margin: "12px 24px", minHeight: 800, }}>
                    {this.props.children}
                  </div>

                </Content>

                <Footer style={{ textAlign: "center" }}>
                  <h3><b> Insert footer text </b></h3>
                </Footer>
              </Layout>
            </Layout>

      </Hoc>
    );
  }
}


export default withRouter(connect()(CustomLayout));
