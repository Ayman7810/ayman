import React from 'react'
import { Col, Row } from 'react-bootstrap'
const RateItem = () => {
  return (
    <div>
    <Row className="mt-3 text-end py-2">
        <Col className="d-felx me-5">
            <div className="rate-name  d-inline ms-2">احمد محمود</div>
            {/* <img className="" src={rate} alt="" height="16px" width="16px" /> */}
            <span ><i className="fa fa-star mt-2" style={{color:'#f51167' , width:'16px',height:'16px'}} ></i></span>
            <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
        </Col>
    </Row>
    <Row className="border-bottom mx-2 text-end">
        <Col className="d-felx me-4 pb-2">
            <div className="rate-description  d-inline ms-2">
                منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة
            </div>
        </Col>
    </Row>
</div>
  )
}

export default RateItem
