import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

//-- Components
//import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";

//-- Stylesheet
import "./carousel.scss";

const getWidth = () => window.innerWidth;
gsap.registerPlugin(Draggable);

// const Slide = ({ imageSource, content, width }) => {
//   const { date, desc } = content;
//   return (
//     <div className="slide">
//       <div
//         className="preview"
//         style={{ backgroundImage: `url(${imageSource})`, width: `${width}px` }}
//       >
//         {/* <img src={imageSource} alt="The Plant" draggable="false" /> */}
//       </div>
//       <div className="infos">
//         <h3>{date}</h3>
//         <h2>{desc}</h2>
//       </div>
//     </div>
//   );
// };

export const Slider = (props) => {
  const { slides, showDots, autoPlay } = props;

  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { activeSlide, translate, _slides, transition } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    //console.log(sliderRef.current.clientWidth, sliderRef.current.innerWidth);

    let interval = null;

    const slider = sliderRef.current;
    const play = () => autoPlayRef.current();
    const resize = () => resizeRef.current();

    const smooth = (e) => {
      if (e.target.className.includes("SliderContent")) {
        transitionRef.current();
      }
    };

    const transitionEnd = slider.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    if (autoPlay) {
      interval = setInterval(play, autoPlay * 1000);
    }

    // Draggable.create(sliderRef.current, {
    //   type: "x",
    //   bounds: {
    //     minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
    //     maxX: 0,
    //   },
    //   zIndex: 0,
    // });

    return () => {
      slider.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);

      if (autoPlay) {
        clearInterval(interval);
      }
    };
  }, [autoPlay]);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition, state]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const smoothTransition = () => {
    let _slides = [];

    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });

  const prevSlide = () =>
    setState({
      ...state,
      translate: translate - getWidth(),
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });

  return (
    <div id="slider" className="slider" ref={sliderRef}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide key={_slide + i} width={getWidth()} content={_slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      {showDots && <Dots slides={slides} activeSlide={activeSlide} />}
    </div>
  );
};

const SliderContent = (props) => {
  const { children, translate, transition, width } = props;
  return (
    <div
      style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        height: `100%`,
        width: `${width}px`,
        display: `flex`,
      }}
    >
      {children}
    </div>
  );
};

export const Slide = ({ content, width }) => (
  <div
    style={{
      height: `100%`,
      width: `${width}px`,
      backgroundImage: `url('${content}')`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center`,
    }}
  />
);
