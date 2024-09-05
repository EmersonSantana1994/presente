import React, { useState, useEffect } from 'react';/*eslint-disable*/

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Pergunta9 from "../src/Pergunta9";

import "react-vertical-timeline-component/style.min.css";
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';


export default function Pergunta3() {

    const [mudarp2, setMudarp2] = useState(false);
    const [pesquisar, setPesquisar] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [tenteNovamente, setTenteNovamente] = useState(false);

    async function setEnvioModal() {
        let formatar = ''
        formatar = pesquisar.toLowerCase()
        if (formatar == 'emerson') {
            setTenteNovamente(false)
            setIsVisible(true)
            const timer = setTimeout(() => {
                setIsVisible(false);
                setMudarp2(true)
            }, 3000); // 3000 milissegundos = 3 segundos

            // Cleanup do efeito para evitar vazamentos de memória
            return () => clearTimeout(timer);
        } else {
            setTenteNovamente(true)
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setEnvioModal(true);
        }
    };

    return (
        <div className=''>
            {!mudarp2 &&
                <h2 className="titlee">Qual o nome do cara que tem a sorte de estar beijando esta linda garota da internet?</h2>
            }
            {!mudarp2 &&
                <Form.Group>
                    <Form.Control
                        onChange={e => { setPesquisar(e.target.value) }}
                        value={pesquisar}
                        className='campodepesquisa'
                        onKeyDown={handleKeyPress}
                        placeholder="Digite aqui..."
                    />
                </Form.Group>
            }
            {!mudarp2 &&
                <Button className='' onClick={(e) => { setEnvioModal() }}>
                    Enviar
                </Button>
            }

            {mudarp2 &&
                <Pergunta9></Pergunta9>

            }
            {isVisible && <p>Certa resposta! AGORA A MAIS LINDA DA INTERNT</p>}
            {tenteNovamente && <p>Resposta errada, tente novamente</p>}
        </div>

    );

}