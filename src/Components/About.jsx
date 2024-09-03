import React from 'react'
import { Container,row,col, Row, Col } from 'react-bootstrap'


const About = () => {

    const user = {
        name:'Anandprabu'
        
    }
  return (
    <div>
        <Container id='about' className='my-5'>
            <Row>
                <Col md={6}>
                    <h1>About Me</h1>
                    <p>
                    I am a Frontend web developer with a passion for creating beautiful and functional websites. 
                    I have build this website using React, JavaScript, HTML, CSS, and Bootstrap.
                    </p>
                    <p>
                    I have passionate about React Js  and kept learning of new technologies. Iam currently pursing React js front end development course at Pylagam Institute and waiting for the opportunity to show my skills. 
                    </p>
                    <p>
                    I have experience in Ecommerce domain as a Team leader and Shift Manager I have 4 years of experience on these field. I confidence about my  skills and experience make me a value asset to any team. I eagerly waiting to attend the interview to start my fresh carrier on React developer.
                    </p>
                    <p>
             Thank you for taking the time to look through my application materials. If you have any questions about the information I included, please reach out. I look forward to hearing from you.
                    </p>
                </Col>
            
                <Col md={6}>
                    <img
                    className='img-fluid rounded-circle'
                    src='https://img.freepik.com/free-vector/advanced-computer-skills-abstract-concept-illustration_335657-2255.jpg?size=626&ext=jpg&ga=GA1.1.1406661475.1724000195&semt=ais_hybrid'
                    alt='Anandprabu Image'

                    />
                </Col>
            </Row>

        </Container>
      
    </div>
  )
}

export default About
