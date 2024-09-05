import React, { useState, useEffect } from 'react';/*eslint-disable*/
import {foto1}  from '../../garota/src/img/alternanciaIcones'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Pergunta2 from "../src/Pergunta2";

import "react-vertical-timeline-component/style.min.css";
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';


export default function Pergunta1() {

    const [mudarp2, setMudarp2] = useState(false);

    async function mudar2() {

        setMudarp2()

    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setMudarp2(true);
        }
    };

    return (
        <div className=''>

            {!mudarp2 &&
                <h1 className="titlee">Bem vindo</h1>
            }
            {!mudarp2 &&
                <h1 className="titlee">Por aqui vamos te mostrar a garota mais bonita da internet</h1>
            }
            {!mudarp2 &&
                <Button className='' onClick={(e) => { setMudarp2(true) }} onKeyDown={handleKeyPress}>
                    Click aqui!
                </Button>
            }

            {mudarp2 &&
                <Pergunta2></Pergunta2>

            }
        </div>

    );

}