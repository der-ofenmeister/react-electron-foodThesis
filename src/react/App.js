import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { channels } from '../shared/constants';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import BaseRouter from "./routes";
import CustomGrid from './containers/CustomGrid';
import CustomTable from './containers/CustomTable';
import CustomLayout from './containers/Layout';
import {connect} from 'react-redux'
const { ipcRenderer } = window; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: 'F&N app',
      appVersion: '4.89',
    }
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
  }

  render() {
    const { appName, appVersion } = this.state;
    return (
      <Router>
        <CustomLayout {...this.props}>
          <BaseRouter />
      </CustomLayout>
     </Router>
  );
  }
}

export default connect()(App);
