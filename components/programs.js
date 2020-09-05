import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';


const getLandingSuccess = (item) => {

  let arr = item.rocket.first_stage.cores;
  if (arr.length > 0) {

    return arr[arr.length - 1].land_success == null ? 'false' : arr[arr.length - 1].land_success == false ? 'false' : 'true';
  }
  return 'false';
}
class Programs extends Component {

  constructor(props) {
    super(props);
  }

  render() {



    return (
      <div>
        <Row>



          {

            this.props.data.map(item => {

              return (<Col md="3"><Card>
                <div className="project_image">
                  <CardImg top width="100%" src={item.links.mission_patch} alt="Card image cap" />
                </div>

                <CardBody>
                  <CardTitle><b><a href={item.links.wikipedia} target="_blank">{item.mission_name + " #" + item.flight_number}</a></b></CardTitle>
                  <CardSubtitle><b>Mission ids:</b></CardSubtitle>
                  <CardText>
                    {

                      item.mission_id.length == 0 ? "" : (<ul>{
                        item.mission_id.map(li => {
                          return (<li>{li}</li>)
                        })
                      }</ul>)
                    }
                  </CardText>
                  <CardSubtitle><b>Launch Year:</b><a href="#">{item.launch_year}</a></CardSubtitle>
                  <CardSubtitle><b>Successful Launch:</b><a href="#">{item.launch_success == false ? 'false' : 'true'}</a></CardSubtitle>
                  <CardSubtitle><b>Successful Landing </b><a href="#">{getLandingSuccess(item)}</a></CardSubtitle>


                </CardBody>
              </Card>
              </Col>)

            })

          }



        </Row>

      </div>
    )
  }
}



export default Programs;