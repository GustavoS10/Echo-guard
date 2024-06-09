import React, { useState } from 'react';
import {
    Container,
    Button,
    Col,
    Row,
    Form,
    Label,
    Input,
    Tooltip
} from 'reactstrap';
import "./Form.css";
import FormImage from '../../images/FormImage.svg';

function Forms() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formulario enviado");
    }

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    return (
        <Container fluid id='Forms'>
            <Row className="form-row align-items-center">
                <Col xs="12" md="6">
                    <div className="form-image">
                        <img src={FormImage} alt="Form" />
                    </div>
                </Col>
                <Col xs="12" md="6">
                    <div className="form-content">
                        <h2>Newsletter</h2>
                        <p>Assine para não perder nada!</p>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Col xs="12" md="6">
                                    <Label for="Nome">Nome</Label>
                                    <Input
                                        id="Nome"
                                        name="text"
                                        placeholder="João"
                                        type="text"
                                    />
                                </Col>
                                <Col xs="12" md="6">
                                    <Label for="Sobrenome">Sobrenome</Label>
                                    <Input
                                        id="Sobrenome"
                                        name="text"
                                        placeholder="Silva"
                                        type="text"
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xs="12" md="6">
                                    <Label for="Email">Email</Label>
                                    <Input
                                        id="Email"
                                        name="email"
                                        placeholder="joao@gmail.com"
                                        type="email"
                                    />
                                </Col>
                                <Tooltip
                                    placement="right"
                                    isOpen={tooltipOpen}
                                    target="Email"
                                    toggle={toggleTooltip}>
                                    Herística 5 - Prevenção de erros
                                </Tooltip>
                                <Col xs="12" md="6">
                                    <Label for="Telefone">Telefone</Label>
                                    <Input
                                        id="Telefone"
                                        name="text"
                                        placeholder="+55 11 99999-9999"
                                        type="text"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button id="submit-button">
                                        Assinar!
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Forms;
