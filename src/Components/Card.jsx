import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const handleCount = () => {
    const targetCount = parseInt(data[currentIndex].count, 10);

    if (currentCount + 1 < targetCount) {
      // Increment the count for the current adhkar
      setCurrentCount((prevCount) => prevCount + 1);
    } else {
      setCurrentCount(targetCount); // Ensure progress bar reaches 100%
      setTimeout(() => {
        if (currentIndex + 1 === data.length) {
          setCurrentIndex(0)
          setCurrentCount(0);
          return alert("نهاية الأذكار");
        }else{
          setCurrentCount(0);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);

        }
      }, 700); // Delay for 700ms
    }
  };

  

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    setCurrentCount(0);
  };

  const handleNext = () => {
     if (currentIndex + 1 === data.length) {
       setCurrentIndex(0);
       setCurrentCount(0);
       return alert("نهاية الأذكار");
     } else {
       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
       setCurrentCount(0);
     }
  };

  const targetCount = parseInt(data[currentIndex].count, 10);
  const progressPercentage = (currentCount / targetCount) * 100;

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft": // Previous
          handleNext();
          break;
        case "ArrowRight": // Next
          handlePrevious();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <>
      {/* Category name  */}

      <div className="card-header d-flex justify-content-center">
        <h2 className="fw-bold mx-auto text-bg-success position-relative p-3 mt-1 rounded-4 font-monospace">
          {data[currentIndex].category}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill 
          text-bg-danger fs-6 fw-normal"
          >
            {currentIndex + 1}/{data.length}
          </span>
        </h2>
      </div>

      {/* BUTTONS  */}
      <div className="buttons d-flex justify-content-evenly align-items-center ">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="btn m-2 rounded-5 fs-5"
          style={{ backgroundColor: "#489a74" }}
        >
          {"< السّابق"}
        </button>

        {/* Count Button */}
        <button
          onClick={handleCount}
          className="btn btn-secondary fw-bolder fs-4 m-2 rounded-4"
        >
          count
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="btn m-2 rounded-5 fs-5"
          style={{ backgroundColor: "#489a74" }}
        >
          {"التّالي >"}
        </button>
      </div>

      {/* Card */}
      <div className="container col-12 col-lg-8 d-flex justify-content-center">
        <div className="card text-center rounded-5 shadow-lg col-12 mx-2">
          {/* Counter */}

          <div className="card-header text-body-secondary">
            <h4 className="fw-bold">{targetCount - currentCount}</h4>

            {/* Progress bar */}
            <div
              className="progress"
              role="progressbar"
              aria-label="Progress bar"
              aria-valuenow={progressPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "4px", backgroundColor: "lightgrey" }}
            >
              <div
                className="progress-bar"
                style={{
                  width: `${progressPercentage}%`,
                  backgroundColor: "green",
                }}
              ></div>
            </div>
          </div>

          {/* card body */}

          <div className="card-body">
            <figure className="text-center">
              <blockquote
                className="blockquote"
                style={{ wordSpacing: "3px", lineHeight: "2" }}
              >
                <p>{data[currentIndex].content}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                {data[currentIndex].reference}
                <cite title="Source Title">
                  {data[currentIndex].description}
                </cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default Card;
