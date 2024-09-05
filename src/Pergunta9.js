import React, { useState, useEffect } from 'react';/*eslint-disable*/
import { ReactComponent as WorkIcon } from "../../../garota/garota/src/img/work.svg";
import { ReactComponent as SchoolIcon } from "../../../garota/garota/src/img/school.svg";

import "../src/garota.css";

import {foto1}  from '../../garota/src/img/alternanciaIcones'
import {foto2}  from '../../garota/src/img/alternanciaIcones'
import {foto3}  from '../../garota/src/img/alternanciaIcones'
import {foto4}  from '../../garota/src/img/alternanciaIcones'
import {foto5}  from '../../garota/src/img/alternanciaIcones'
import {foto6}  from '../../garota/src/img/alternanciaIcones'
import {foto7}  from '../../garota/src/img/alternanciaIcones'
import {foto8}  from '../../garota/src/img/alternanciaIcones'


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function TimeLine() {

  let timelineElements = [
    {
      id: 1,
      title: "",
      location: "Dragontail, Ascana",
      description:
        foto1(),
      buttonText: "",
      date: "A mais linda",
      icon: "work",
    },
    {
      id: 2,
      title: "",
      location: "Skystead, Craonia",
      description:
      foto2(),
      buttonText: "",
      date: "inteligente",
      icon: "work",
    },
    {
      id: 3,
      title: "",
      location: "South Warren, Geshington",
      description:
      foto3(),
      buttonText: "",
      date: "iluminada",
      icon: "work",
    },
    {
      id: 4,
      title: "",
      location: "South Warren, Geshington",
      description:
      foto4(),
      buttonText: "",
      date: "determinada",
      icon: "school",
    },
    {
      id: 5,
      title: "",
      location: "Skystead, Craonia",
      description:
      foto5(),
      buttonText: "",
      date: "divertida",
      icon: "school",
    },
    {
      id: 6,
      title: "",
      location: "Dragontail, Ascana",
      description:
      foto6(),
      date: "gostosa",
      icon: "school",
    },
    {
        id: 7,
        title: "",
        location: "Dragontail, Ascana",
        description:
        foto7(),
        date: "incrível",
        icon: "school",
      },
      {
        id: 7,
        title: "",
        location: "Dragontail, Ascana",
        description:
        foto8(),
        date: "flavia",
        icon: "school",
      },
  ];
  
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className='timeline'>
      <h1 className="titlee">Apresento a mais linda</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <img className="campo-select-icone-ativado" src={element.description} alt="drop" />
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default TimeLine;