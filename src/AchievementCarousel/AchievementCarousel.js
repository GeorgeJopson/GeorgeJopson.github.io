import './AchievementCarousel.css';
import '../fonts.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import achievementData from "./achievements.json"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function AchievementCarousel(){
  const achievements = achievementData.achievements
  const carouselItems = achievements.map(achievement=>{
    let titleText = achievement.title

    // if (titleText.length>36){
    //   titleText= titleText.slice(0,33) +"..."
    // }
    return (
      <div className="carouselItem">
        <p className="robotoMedium carouselItemText">{titleText}</p>
        <button className="seeMore btn btn-outline-primary">See More ...</button>
      </div>
    );
  }
    
  );
  return(
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 0.7s ease-in-out" // smoother transition
      transitionDuration={700}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      slidesToSlide={1}
    >
      {carouselItems}
    </Carousel>
  );
}

export default AchievementCarousel