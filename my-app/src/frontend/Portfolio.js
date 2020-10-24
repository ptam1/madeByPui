import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Container from 'react-bootstrap/Container';
import './Portfolio.css';
import MariasCleaningServiceSlide from './MariasCleaningServiceSlide.js';
import BambinellisSlide from './BambinellisSlide.js';
import FitnessSlide from './FitnessSlide.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
/*
function PopUpModal(props) {
    return (
        <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1> Bambinelli's Itlian Restaurant </h1>
                    <p> Website Redesign </p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <BambinellisSlide display /> 
            </Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1> Maria's Cleaning Service </h1>
                    <p> Website Redesign </p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MariasCleaningServiceSlide display />
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
            </Modal>
        </>
    );
}
*/


/*function Portfolio() {
    const [modalShow, setModalShow] = React.useState(false);
 */
class Portfolio extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: null
        };
    }

    handleClose() {
        this.setState({ show: null });
    }

    handleShow(id) {
        this.setState({ show: id });
    }

    render() {
        return (
            <>
                <Container fluid="md">

                    <div id="backgroundColor">
                        <NavBar displaytext=" " />

                        <div className="titleProperties">
                            <h1> Portfolio </h1>
                        </div>

                        <div id="portfolioWrapper">
                        <Row class="row" lg={4}>
                            <Col>
                                <div class="hovereffect" onClick={() => this.handleShow('Bambinellis')}>
                                    <img class="img-responsive" src="Bambinellis portfolio.JPG" alt="" />
                                    <div class="overlay">
                                        <h2>Bambinelli's</h2>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div class="hovereffect" onClick={() => this.handleShow('mariasCleaning')}>
                                    <img class="img-responsive" src="After Homepage Portfolio.JPG" alt="" />
                                    <div class="overlay">
                                        <h2>Maria's Cleaning Service</h2>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div class="hovereffect" onClick={() => this.handleShow('FitnessSlide')}>
                                    <img class="img-responsive" src="After - Fitness Product Page.JPG" alt="" />
                                    <div class="overlay">
                                        <h2>Scoop Babe Fitness</h2>
                                    </div>
                                </div>
                            </Col>
                            </Row>
                    </div>
                    </div>
                </Container>

                
                <Modal
                    show={this.state.show == 'Bambinellis'}
                    onHide={this.handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <p> Website Redesign </p>
                            <p> <a href="https://bambinellis.com/">Visit Website</a> </p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BambinellisSlide display />
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.show == 'mariasCleaning'}
                    onHide={this.handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p> Website Redesign </p>
                    <p> <a href="https://sites.google.com/mariascleaningatl.com/atl/home?authuser=1">Visit Website</a> </p>
                </Modal.Title>
            </Modal.Header>
                    <Modal.Body>
                        <MariasCleaningServiceSlide display />
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.show == 'FitnessSlide'}
                    onHide={this.handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <p> Shopify - Website Additional Features Update </p>
                            <p> <a href="https://scoopbabefitness.com/">Visit Website</a> </p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FitnessSlide display />
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

            </>
        );
    }
}


    /*render(<Portfolio />);
     <PopUpModal
    show={modalShow, modalShow}
    onHide={() => setModalShow(false)}
    />
    */
export default Portfolio;