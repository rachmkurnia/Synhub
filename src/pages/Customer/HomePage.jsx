// import components
import { Col, Container, Row, Button, Card  } from "react-bootstrap";
import NavbarComponent from "../../components/NavbarComponent";
import KontakComponent from "../../components/KontakComponent";
import FooterComponent from "../../components/FooterComponent";

const HomePage = () => {
    return (
        <>
            <NavbarComponent isLoggedIn={true}/>
            <div id="banner">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h1>Elegansi dan Produktivitas <br /> dalam satu Ruangan.</h1>
                        </Col>
                        <Col lg={4}>
                            <p className="banner-teks">Ruang tumbuh untuk bisnis meningkatkan kreatifitas dan kenyamanan saat bekerja.</p>
                        </Col>
                    </Row>

                    <Row className="banner-image mt-5">
                        <Col lg={5}>
                            <img src="../../src/assets/img-hero1.png" alt="" />
                        </Col>
                        <Col lg={7}>
                            <Row>
                                <Col>
                                    <img src="../../src/assets/img-hero2.png" alt="" />
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col lg={6}>
                                    <img src="../../src/assets/img-hero3.png" alt="" />
                                </Col>
                                <Col lg={6}>
                                    <img src="../../src/assets/img-hero4.png" alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="ruangan" className="mt-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center">Temukan Ruangan yang<br />cocok untuk Anda</h1>
                        </Col>
                    </Row>
                    <Row>

                        <Col lg={4}>
                            <Card >
                                <Card.Img variant="top" src="../../src/assets/img-rmeeting.png" />
                                <Card.Body>
                                    <Row>
                                        <Col md={6}>
                                            <Card.Title>Ruang Meeting</Card.Title>
                                        </Col>
                                        <Col>
                                            <p className="text-end">IDR 80K / Jam</p>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        Ruang meeting ideal untuk bisnis dan usaha yang ingin melakukan pertemuan atau mencari inspirasi bersama.
                                    </Card.Text>
                                    <Button variant="outline-dark">4 - 10 kursi</Button>
                                    <Button variant="outline-dark">Free drink</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card >
                                <Card.Img variant="top" src="../../src/assets/img-racara.png" />
                                <Card.Body>
                                    <Row>
                                        <Col md={6}>
                                            <Card.Title>Ruang Acara</Card.Title>
                                        </Col>
                                        <Col>
                                            <p className="text-end">IDR 150K / Jam</p>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        Ruang acara untuk workshop, seminar, dan acara lainnya. Dilengkapai dengan peralatan pendukung acara.
                                    </Card.Text>
                                    <Button variant="outline-dark">30 - 150 kursi</Button>
                                    <Button variant="outline-dark">Event Tools</Button>
                                    <Button variant="outline-dark">Sound System</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card >
                                <Card.Img variant="top" src="../../src/assets/img-cospace.png" />
                                <Card.Body>
                                    <Row>
                                        <Col md={6}>
                                            <Card.Title>Coworking Space</Card.Title>
                                        </Col>
                                        <Col>
                                            <p className="text-end">IDR 15K / Jam</p>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        Pilihan terbaik untuk anda yang ingin mencari inspirasi dan bekerja dengan nyaman.
                                    </Card.Text>
                                    <Button variant="outline-dark">Single</Button>
                                    <Button variant="outline-dark">Free drink</Button>
                                    <Button variant="outline-dark">Free wifi</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        
                    </Row>
                </Container>

            </div>

            <KontakComponent/>
            <FooterComponent/>
        </>
    );
}
export default HomePage