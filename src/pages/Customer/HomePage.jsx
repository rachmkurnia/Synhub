// import components
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import NavbarComponent from "../../components/Customer/NavbarComponent";
import KontakComponent from "../../components/Customer/KontakComponent";
import FooterComponent from "../../components/Customer/FooterComponent";
import { useEffect, useState } from "react";
import Api from "../../api";



const HomePage = () => {
    

  const [banner_1, setBanner_1] = useState({});
  const [banner_2, setBanner_2] = useState({});
  const [banner_3, setBanner_3] = useState({});
  const [banner_4, setBanner_4] = useState({});

  const getDataBanner = async () => {
    await Api.get("/customer/banner")
    .then((res) => {
      //   console.log(res.data);
    
      
    


      setBanner_1(res.data.find(item => item.posisi == '1'));
      setBanner_2(res.data.find(item => item.posisi == '2'));
      setBanner_3(res.data.find(item => item.posisi == '3'));
      setBanner_4(res.data.find(item => item.posisi == '4'));
    });
  };

  
  useEffect(() => {
    getDataBanner();
  }, []);




  return (
    <>
      <NavbarComponent isLoggedIn={true} />
      <div id="banner">
        <Container>
          <Row>
            <Col lg={8}>
              <h1>
                Elegansi dan Produktivitas <br /> dalam satu Ruangan.
              </h1>
            </Col>
            <Col lg={4}>
              <p className="banner-teks">
                Ruang tumbuh untuk bisnis meningkatkan kreatifitas dan
                kenyamanan saat bekerja.
              </p>
            </Col>
          </Row>

          <Row className="banner-image d-none d-lg-flex align-items-center mt-5">
            <Col lg={5}>
              <img src={banner_1.foto} alt={banner_1.judul} />
            </Col>
            <Col lg={7}>
              <Row>
                <Col>
                  <img src={banner_2.foto} alt={banner_2.judul} />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg={6}>
                  <img src={banner_3.foto} alt={banner_3.judul} />
                </Col>
                <Col lg={6}>
                  <img src={banner_4.foto} alt={banner_4.judul} />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="banner-image mt-3 d-lg-none d-block align-items-center">
            <Col>
              <img src="../../src/assets/img-hero1.png" alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="ruangan" className="mt-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">
                Temukan Ruangan yang
                <br />
                cocok untuk Anda
              </h1>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="../../src/assets/img-rmeeting.png"
                />
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
                    Ruang meeting ideal untuk bisnis dan usaha yang ingin
                    melakukan pertemuan atau mencari inspirasi bersama.
                  </Card.Text>
                  <Button variant="outline-dark">4 - 10 kursi</Button>
                  <Button variant="outline-dark">Free drink</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
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
                    Ruang acara untuk workshop, seminar, dan acara lainnya.
                    Dilengkapai dengan peralatan pendukung acara.
                  </Card.Text>
                  <Button variant="outline-dark">30 - 150 kursi</Button>
                  <Button variant="outline-dark">Event Tools</Button>
                  <Button variant="outline-dark">Sound System</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="../../src/assets/img-cospace.png"
                />
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
                    Pilihan terbaik untuk anda yang ingin mencari inspirasi dan
                    bekerja dengan nyaman.
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

      <KontakComponent />
      <FooterComponent />
    </>
  );
}


export default HomePage
