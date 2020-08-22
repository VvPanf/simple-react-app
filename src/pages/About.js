import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container className="text-white">
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" >Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" >Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth" >Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className={"mt-3"}>
                                <Tab.Pane eventKey="first">
                                    <img src="http://www.add3d.ru/wp-content/uploads/2018/12/firma-free-ui-kit-31-freebies-0.jpg" width="800px"/>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt convallis porttitor. Sed at quam mattis, eleifend risus in, finibus felis. Praesent pretium ullamcorper dignissim. Aliquam lobortis orci a sapien sollicitudin facilisis. Sed tincidunt ex orci, vulputate placerat urna dictum at. Maecenas sapien elit, pellentesque at nunc sed, iaculis porta. 
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://bcn-a.akamaihd.net/img/news/news_09.12.17._zchash_update.jpg" width="800px"/>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt convallis porttitor. Sed at quam mattis, eleifend risus in, finibus felis. Praesent pretium ullamcorper dignissim. Aliquam lobortis orci a sapien sollicitudin facilisis. Sed tincidunt ex orci, vulputate placerat urna dictum at. Maecenas sapien elit, pellentesque at nunc sed, iaculis porta. 
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://im0-tub-ru.yandex.net/i?id=168c02951eca3a7615e77ca2e234afe3&n=13&exp=1" width="800px"/>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt convallis porttitor. Sed at quam mattis, eleifend risus in, finibus felis. Praesent pretium ullamcorper dignissim. Aliquam lobortis orci a sapien sollicitudin facilisis. Sed tincidunt ex orci, vulputate placerat urna dictum at. Maecenas sapien elit, pellentesque at nunc sed, iaculis porta. 
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://codelatte.org/wp-content/uploads/2018/09/js-framework.jpg" width="800px"/>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt convallis porttitor. Sed at quam mattis, eleifend risus in, finibus felis. Praesent pretium ullamcorper dignissim. Aliquam lobortis orci a sapien sollicitudin facilisis. Sed tincidunt ex orci, vulputate placerat urna dictum at. Maecenas sapien elit, pellentesque at nunc sed, iaculis porta. 
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://im0-tub-ru.yandex.net/i?id=fc8e912aa27fd9e3249cbc0a59fbba1b&n=13&exp=1" width="800px"/>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt convallis porttitor. Sed at quam mattis, eleifend risus in, finibus felis. Praesent pretium ullamcorper dignissim. Aliquam lobortis orci a sapien sollicitudin facilisis. Sed tincidunt ex orci, vulputate placerat urna dictum at. Maecenas sapien elit, pellentesque at nunc sed, iaculis porta. 
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}