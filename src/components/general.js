import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import generalStyles from "./general.module.css"
import icons from "../images/icons.png";
import mobileIcons from "../images/mobile-icons.png";

const General = () => (
  <div className={generalStyles.general}>
    <h3 className='sub-header'>What is Zooniverse?</h3>
    <span className='descriptor'>
      Zooniverse is the world's largest people-powered research
      platform. What does that mean?
    </span>
    <div className={generalStyles.content}>
      <img alt="Discipline Icons" className="icons-image" src={icons} />
      <div className={generalStyles.column}>
        <span>
          Online at zooniverse.org or on the Zooniverse app, you can participate
          in tons of projects just like this one in topics ranging from astronomy
          to zoology.
        </span>
        <span>
          Scientists need your help to process all their data, whether it's by
          classifying the shapes of galaxies or identifying animals. By answering
          a few questions, you'll make a big difference.
        </span>
      </div>
      <img alt="Discipline Icons" className="icons-image-mobile" src={mobileIcons} />
    </div>
    <button className='hollow-button'>
      <OutboundLink href='https://www.zooniverse.org'>zooniverse.org</OutboundLink>
    </button>
  </div>
);

export default General;
