import React, {Component} from 'react';
import {Card, Container, CardDeck, Button, Media, Row, Col, ListGroup} from 'react-bootstrap';
import CarouselBox from '../components/CarouselBox';

export default class Blog extends Component {
    render() {
        return (
            <>
                <Container className="text-white">
                    <Row>
                        <Col md="9">
                            <Media className="mt-5">
                                <img
                                    width={150}
                                    heigth={150}
                                    className="mr-3"
                                    src="https://yt3.ggpht.com/a/AATXAJzCBwMFsT5f1ynkh7Z8bbX5YWBAoGzX9Qr-cdLJVQ=s900-c-k-c0xffffffff-no-rj-mo"
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque sodales euismod. Nullam et dui pulvinar, eleifend augue et, luctus tortor. In mi dui, ultrices. 
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="mt-5">
                                <img
                                    width={150}
                                    heigth={150}
                                    className="mr-3"
                                    src="https://yt3.ggpht.com/a/AATXAJzCBwMFsT5f1ynkh7Z8bbX5YWBAoGzX9Qr-cdLJVQ=s900-c-k-c0xffffffff-no-rj-mo"
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque sodales euismod. Nullam et dui pulvinar, eleifend augue et, luctus tortor. In mi dui, ultrices. 
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="mt-5">
                                <img
                                    width={150}
                                    heigth={150}
                                    className="mr-3"
                                    src="https://yt3.ggpht.com/a/AATXAJzCBwMFsT5f1ynkh7Z8bbX5YWBAoGzX9Qr-cdLJVQ=s900-c-k-c0xffffffff-no-rj-mo"
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque sodales euismod. Nullam et dui pulvinar, eleifend augue et, luctus tortor. In mi dui, ultrices. 
                                    </p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col md="3">
                            <h5 className="mt-5 text-center">Categories</h5>
                            <Card className="bg-dark">
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-dark">Html/Css</ListGroup.Item>
                                    <ListGroup.Item className="bg-dark">JavaScript</ListGroup.Item>
                                    <ListGroup.Item className="bg-dark">Java</ListGroup.Item>
                                    <ListGroup.Item className="bg-dark">Python</ListGroup.Item>
                                </ListGroup>
                            </Card>

                            <Card className="bg-dark mt-3">
                                <Card.Body>
                                    <Card.Title>Side widget</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque sodales euismod. Nullam et dui pulvinar, eleifend augue et, luctus tortor. In mi dui, ultrices. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h2 className="text-center m-4 text-white">Our team</h2>
                    <CardDeck>
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src="https://images.pexels.com/photos/3931860/pexels-photo-3931860.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et aliquam nisi.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et aliquam nisi.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src="https://media.istockphoto.com/photos/glad-to-work-with-you-picture-id951514270"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et aliquam nisi.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}