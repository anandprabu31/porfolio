import React from 'react'
import { Col, Container,Row,Card } from 'react-bootstrap'
const projects=[
    {
        title: "91 Mobiles",
        description : "description",
        imageUrl: 'https://via.placeholder.com/150',
        projectUrl: '..'
    },
    {
        title: "Google Keep App",
        description : "description",
        imageUrl: 'https://via.placeholder.com/300',
        projectUrl: '..'
    },
    {
        title: "Google Wheather App",
        description : "description",
        imageUrl: 'https://via.placeholder.com/300',
        projectUrl: '..'
    }

]

const Projects = () => {
  return (
    <Container id='projects' className='my-5'>
        <h2 className='text-center'>Projects</h2>
        <Row>
            {projects.map((project)=>(
                <Col md={4} className='md-4'>
                    <Card>
                        <Card.Img  variant='top' src={projects.imageUrl}/>
                        <Card.Body>
                            <Card.Title>{projects.title}</Card.Title>
                            <Card.Text>{projects.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            )
            )}

        </Row>

    </Container>
  )
}

export default Projects
