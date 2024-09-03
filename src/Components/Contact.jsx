import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <Container id='contact' className="my-5">
                 <h2 className='text-center'>Contact</h2>
        <Row md={4}>
           
            <Col>
            <p><TiSocialFacebook size={60} />anandprabu31</p>
            </Col>
            <Col>
            <p><TiSocialLinkedin size={60} />anandprabu31</p>
            </Col>
            <Col>
            <p><IoLogoWhatsapp size={35} />+918344491636</p>
            </Col>
        </Row>

    </Container>
  )
}

export default Contact
