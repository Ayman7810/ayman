import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RatePost from './RatePost'
import RateItem from './RateItem'
import './style.css'
// import Pagenation from '../Uitilty/Pagenation'
const RateContainer = () => {
  return (
    <Container className='rate-container my-4' style={{backgroundColor:'#fcfcfc'}}>
    <Row>
        <Col className="d-flex mt-2">
            <div className="sub-tile d-inline p-1 ">التقيمات</div>
            {/* <img className="mt-2" src={rate} alt="" height="16px" width="16px" /> */}
            <span ><i className="fa fa-star mt-2" style={{color:'#f51167' , width:'16px',height:'16px'}} ></i></span>
            <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
            <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div>
        </Col>
    </Row>
    <RatePost /> 
    <RateItem />
    <RateItem />
    <RateItem />
    <RateItem />
    {/* <Pagenation/> */}
</Container>
  )
}

export default RateContainer
