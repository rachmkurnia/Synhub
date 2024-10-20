import { useEffect, useState } from "react";
import NavbarComponent from "../../components/Customer/NavbarComponent";
import KontakComponent from "../../components/Customer/KontakComponent"
import FooterComponent from "../../components/Customer/FooterComponent"
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
const RuanganPage = () => {
    // handle jumlah orang
    const [jumlah, setJumlah] = useState(2);
    const handleJumlahChange = (event) => {
        setJumlah(parseInt(event.target.value));
    }

    // handle waktu mulai dan selesai
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const times = ['09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00'];

    const handleStartTimeChange = (e) => {
        setStartTime(e.target.value);
        setEndTime(''); // reset endTime saat waktu mulai berubah
    }

const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
}

const availableEndTimes = times.filter(time => time > startTime);

// handle metode pembayaran
const [paymentMethod, setPaymentMethod] = useState('');
const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
};

// menghitung total waktu dan biaya
const calculateDuration = () => {
    if (!startTime || !endTime) return 0;
    const startHour = parseInt(startTime.split(':')[0]);
    const endHour = parseInt(endTime.split(':')[0]);
    return endHour - startHour;
}

const duration = calculateDuration();
const totalCost = duration * 80000;

const {slug} =  useParams();
const [produk, setproduk] = useState ({});

const getDetailDataProduk = async () => {
    await Api.get(`/customer/produk/${slug}`)
    .then ((res) => {
        // console.log(res.data);
        setproduk(res.data);
    })

}

useEffect(() => {
    getDetailDataProduk();
}, []);

    return (
        <>
            <NavbarComponent isLoggedIn={true} />
            <div id="banner">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h1>{produk.judul_pendek} <br /> {produk.judul_panjang}</h1>
                        </Col>
                        <Col lg={4}>
                            <p className="banner-teks">{produk.subjudul}</p>
                        </Col>
                    </Row>

                    <Row className="banner-image mt-3">
                        <Col>
                            <img src={produk.foto} alt={produk.judul_pendek} />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="fasilitas" className="mt-5">
                <Container>
                    <Row>
                        <Col>
                            <h3>Fasilitas</h3>
                            {
                            
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="form-pesan" className="mt-5">
                <Container>
                    <Row>
                        <Col>
                            <h1>Pesan Ruang Meeting</h1>
                            <p>Beritahu kami kebutuhan ruang meeting Anda</p>
                        </Col>
                    </Row>

                    <form action="/payment">
                        <div className="info-pemesan">
                            <Row>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Nama Pemesan</Form.Label>
                                        <Form.Control type="text" name="nama-pemesan" placeholder="cth. Ahmad Fulan" required />
                                    </Form.Group>
                                </Col>

                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Nomor Telepon</Form.Label>
                                        <Form.Control type="text" name="telepon" placeholder="cth. 08123456789" required />
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Row>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Nama Perusahaan</Form.Label>
                                        <Form.Control type="text" name="perusahaan" placeholder="cth. PT.ABC" required />
                                    </Form.Group>
                                </Col>

                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Jumlah Orang</Form.Label>
                                        <Form.Control type="Number" name="jumlah-orang" min={2} value={jumlah} onChange={handleJumlahChange} max={10} required/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>

                        <div className="info-meeting mt-5">
                            <h5 className="title">Informasi Meeting</h5>
                            <Row>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label>Pilih Tanggal</Form.Label>
                                        <Form.Control type="date" name="tanggal" required/>
                                    </Form.Group>
                                </Col>

                                <Col lg={2}>
                                    <Form.Group>
                                        <Form.Label>Waktu Mulai</Form.Label>
                                        <Form.Select onChange={handleStartTimeChange} required>
                                            <option>--</option>
                                            {times.map((time, index) =>(
                                                <option value={time} key={index}>{time}</option>
                                            ) )}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col lg={2}>
                                    <Form.Group>
                                        <Form.Label>Sampai</Form.Label>
                                        <Form.Select onChange={handleEndTimeChange} disabled={!startTime} required>
                                            <option>--</option>
                                            {availableEndTimes.map((time, index) =>(
                                                <option value={time} key={index}>{time}</option>
                                            ) )}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={8}>
                                    <Form.Group>
                                        <Form.Label>Ada kebutuhan lain?</Form.Label>
                                        <Form.Control as="textarea" rows={3} name="deskripsi" required/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>

                        <div className="info-pembayaran mt-5">
                            <h5 className="tittle">Informasi Pembayaran</h5>

                            <Row>
                                <Col lg={4}>
                                <Form.Group>
                                        <Form.Label>Metode Pembayaran</Form.Label>
                                        <Form.Select onChange={handlePaymentMethodChange} required>
                                            <option value="">-- Pilih Metode --</option>
                                            <option value="transfer">Transfer Bank</option>
                                            <option value="Tunai">Tunai</option>
                                            
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <Col lg={4}>
                                    <Form.Label>Ringkasan Pembayaran</Form.Label>
                                    <p>Metode Pembayaran yang dipilih : <b>{paymentMethod}</b> </p>
                                    <p>Total Waktu : <b>{duration} </b> Jam, (IDR {totalCost.toLocaleString()}) </p>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={8}>
                                    <button type="submit" className="btn btn-teal mt-5 w-100">Reservasi</button> 
                                </Col>
                            </Row>
                        </div>

                    </form>
                </Container>
            </div>

            <KontakComponent/>
            <FooterComponent/>
        </>
    );
}

export default RuanganPage
