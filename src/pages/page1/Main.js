import React, { useState } from 'react';
import {
    Container,
    Button,
    Col,
    Row,
    Tooltip,
} from 'reactstrap';
import "./Main.css";
import Logo from '../../images/Logo.svg';

function Main() {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Formulário enviado, mas sem recarregar a página.");
    };

    return (
        <Container fluid className='Apresentacao'>
            <div id='Apresentacao'>
                <h1>Protegendo o Futuro,<br /> Preservando o Presente</h1>
                <p>
                    A EcoGuard tem o compromisso de adotar medidas e<br />
                    promover  ações que assegurem a sustentabilidade<br />
                    do nosso planeta para as  gerações futuras.
                </p>
                <Button id='btn-ap'>Assine nossas notícias!</Button>
            </div>
            <div className='ImageApresentacao'>
                <img src={Logo} />
                <p>Dúvidas Sobre o Site?<br /> Acesse o Guia do Site.</p>
                <Button id='btn-img'>Guia do Site!</Button>
                <Tooltip
                    placement="right"
                    isOpen={tooltipOpen}
                    target="btn-img"
                    toggle={toggleTooltip}>
                        Herística 1 - Visibilidade do status do sistema
                </Tooltip>
            </div>
        </Container>
    );
}

export default Main;