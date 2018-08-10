import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { fetchArt } from "../redux/actions/art";
import ArtGrid from "./ArtGrid";

import '../my-bootstrap';
import '../styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.state);
    return (
      <div className="Home">
        <div className="row">
          <div className="Info col-xl-4 col-lg-4 col-sm-5 col-sm-12">
              <div className="Name">
                  <div className="Name-full display-3 font-weight-bold">Giorgianna Lomenzo</div>
              </div>
            <div className="Dates">
              <div className="display-4 font-weight-bold">2018</div>
              <div className="display-4 font-weight-light">2017</div>
              <div className="display-4 font-weight-light">2016</div>
              <div className="display-4 font-weight-light">2015</div>
            </div>
          </div>
          <div className="Art col-xl-8 col-lg-8 col-sm-7 col-sm-12 offset">
            <ArtGrid className="ArtGrid"/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
    art: store.art
})

const mapDispatchToProps = dispatch => ({
    fetchArt: (args) => dispatch(fetchArt(args))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

