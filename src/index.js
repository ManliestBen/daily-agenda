import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css'

import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '../node_modules/mdbreact/dist/css/mdb.css';
import './index.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


import registerServiceWorker from './registerServiceWorker';


class App extends Component {
    state = {};
    render() {
    return (
        <React.Fragment>
        <MDBContainer>
            <MDBRow>
            <MDBCol lg="6">Left column</MDBCol>
            <MDBCol lg="6">Right column</MDBCol>
            </MDBRow>
        </MDBContainer>
        </React.Fragment>
    );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));