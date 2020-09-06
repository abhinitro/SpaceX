import 'bootstrap/dist/css/bootstrap.min.css';
import Meta from '../containers/Meta';
import DefaultLayout from '../containers/DefaultLayout.js';
import Router from 'next/router'
import Filter from '../components/filters';
import Programs from '../components/programs';
import { bindActionCreators } from 'redux'
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { getList } from './../redux/actions'
import React, { Component } from 'react'

const BASE_URL = 'https://api.spaceXdata.com/v3/launches';
class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {

      year: "",
      launch: "",
      landing: "",
      loader:false



    }
    this.setYear = this.setYear.bind(this);
    this.setLanding = this.setLanding.bind(this);
    this.setLaunch = this.setLaunch.bind(this);
  }

  componentDidMount() {

    const { getList } = this.props;
    let url = BASE_URL + '?limit=100';
    let query =Router.query;

    let obj={};

    if(query.hasOwnProperty('launch_year')){
        obj['year']=query.launch_year;
        url+='&launch_year='+query.launch_year;
    }
     if(query.hasOwnProperty('launch_success')){
      obj['launch']=query.launch_success=="true"?true:false;
      url+='&launch_success='+query.launch_success;
    }
     if(query.hasOwnProperty('land_success')){
      obj['landing']=query.land_success=="true"?true:false;
      url+='&land_success='+query.land_success;

    }


    let thisKey=this;

    thisKey.setState(obj);

    axios.get(url)
      .then(function (response) {
          getList(response.data);
       })
      .catch(function (error) {

      })
  }


  
  getListofSpaceX(url) {

    const { getList } = this.props;

    axios.get(url)
      .then(function (response) {
        getList(response.data);
      })
      .catch(function (error) {

      })
  }
 setYear(data) {

  
    let url = BASE_URL + '?limit=100';
    url += '&launch_year=' + data;

    let queryParam={};
    queryParam['launch_year']=data;


    if(typeof this.state.launch =="boolean"){
      url += '&launch_success=' + this.state.launch;
      queryParam['launch_success']=this.state.launch;
     
    }
    
    if(typeof this.state.landing =="boolean"){
      url += '&land_success=' + this.state.landing;
      queryParam['land_success']=this.state.landing;
   }
   console.log(queryParam);

    Router.push({
      pathname: '/',
      query: queryParam ,
  });

    this.getListofSpaceX(url);

    this.setState({ year: data });
  }


  setLanding(data) {

   
    let url = BASE_URL + '?limit=100';
    url += '&land_success=' + data;
    let queryParam={};
    queryParam['land_success']=data;

   if(this.state.year !=""){
      url += '&launch_year=' + this.state.year;
      queryParam['launch_year']=this.state.year;
    }
    
    if(typeof this.state.launch =="boolean"){
      url += '&launch_success=' + this.state.launch;
      queryParam['launch_success']=this.state.launch;
     
    }

    Router.push({
      pathname: '/',
      query: queryParam ,
  });
    this.getListofSpaceX(url);
    this.setState({ landing: data });
  }

  async setLaunch(data) {
 
  let url = BASE_URL + '?limit=100';
  url += '&launch_success=' + data;
  let queryParam={};
  queryParam['launch_success']=data;
  if(this.state.year !=""){
    url += '&launch_year=' + this.state.year;
    queryParam['launch_year']=this.state.year;
  }
  if(typeof this.state.landing!="string"){
    url += '&land_success=' + this.state.landing;
    queryParam['land_success']=this.state.landing;
  }
  console.log("ggggg",this.state.landing,queryParam);

   Router.push({
     pathname: '/',
     query: queryParam ,
   });

    await this.getListofSpaceX(url);


    this.setState({ launch: data,loader:false });
  }

  render() {

    const { data } = this.props;


    return (
      <div >
        <Meta />

        <DefaultLayout>



          <h4>SpaceX Launch Programs</h4>

          <Row className="rows-spacing">
            <Col md="4" className="spaceX-background">
              <Filter setYear={this.setYear} setLanding={this.setLanding} setLaunch={this.setLaunch} year={this.state.year} launch={this.state.launch} landing={this.state.landing} />
            </Col>

            <Col md="8" className="">
              {
                
                this.state.loader?"Loading...":
                typeof data == "undefined" ? (<div>Loading.....</div>) : (<Programs data={data} />)
                
                
                }
            </Col>

          </Row>



        </DefaultLayout>

      </div>
    )
  }
}


function mapStateToProps(state) {
  //.log({state})
  const { data } = state
  return { data }
}


const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

