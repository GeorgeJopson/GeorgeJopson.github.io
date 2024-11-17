import './AchievementCarousel.css';
import '../stylings/fonts.css';
import '../stylings/buttons.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import achievementData from "./achievements.json"

import { isMobile } from "react-device-detect";

import { useState } from 'react';

import Modals from "../Modals/Modals.js"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

function AchievementCarousel(){
  const [openModalIndex, setOpenModalIndex] = useState(-1);

  const achievements = achievementData.achievements
  const carouselItems = achievements.map((achievement, index)=>
      <div className="carouselItem" key={index}>
        <p className="robotoMedium carouselItemText headerText">{achievement.title}</p>
        <button className="btnSeeMore btn btn-outline-primary btnRegular btnPink robotoRegular headerText" onClick={()=>setOpenModalIndex(index)}>See More ...</button>
      </div>
  );
  const modalsInfo = achievements.map((achievement)=>{
    return {
      title:achievement.title,
      content:achievement.content
    }
  });

  return(
    <div>
      <Modals openModalIndex={openModalIndex} modalsInfo={modalsInfo} modalClose={()=>setOpenModalIndex(-1)}/>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={isMobile === false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 0.7s ease-in-out"
        transitionDuration={700}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        slidesToSlide={1}
      >
        {carouselItems}
      </Carousel>
    </div>

  );
}

export default AchievementCarousel