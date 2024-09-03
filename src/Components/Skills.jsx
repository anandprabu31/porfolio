import React from 'react'
import { Row,Container, Col } from 'react-bootstrap'

const Skills = () => {
  return (
    <Container id='skills' className='my-5'>
        <h2 className='text-center'>Technologies</h2>
        <Row>
        <Col md={6}>
                    <img
                    className='img-fluid rounded-circle'
                    src=' https://img.freepik.com/premium-vector/software-developers-coding-together-sitting-front-their-pc-screens-desk_530733-3341.jpg?size=626&ext=jpg&ga=GA1.1.1406661475.1724000195&semt=ais_hybrid'
                    alt='Anandprabu Image'

                    />
        </Col>
    
      <Col md={6} >
        <>
        <p>Html</p>

        </>
        <>
        <p>Tailwind Css & Bootstrap</p>
        
        </>
        <>
        <p>Javascript & ES6</p>
    
        </>
        <>
        <p>React JS</p>
        
        </>
        </Col>
    </Row>
    
        <Row >
        <h3 className='text-center'>Additional Technologies and Skills</h3>
        <Col md={4}>
        <ul>
            <li>Git</li>
            <li>Wordpress</li>
        
            <li>Ms Excel</li>
            <li>Stich</li>
        </ul>
        </Col>
        <Col md={6}>
                    <img
                    className='img-fluid rounded-circle'
                    src='https://img.freepik.com/free-vector/laptop-with-statistics-template_24908-81119.jpg?ga=GA1.1.1406661475.1724000195&semt=ais_hybrid'
                    alt='Anandprabu Image'

                    />
        </Col> 
        </Row>
    </Container>
  )
}

export default Skills
