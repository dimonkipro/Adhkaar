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
        setCurrentCount(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setCurrentCount(0);
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

      {/* Count Button */}
      <div className="buttons d-flex justify-content-center align-items-center ">
        <button onClick={handleCount} className="btn btn-secondary m-2">
          count
        </button>
      </div>

      <div className="container col-8 d-flex justify-content-center">
        {/* Previous Button */}

        <button
          onClick={handlePrevious}
          className="btn m-2 fw-bolder fs-1 rounded-5"
          style={{ backgroundColor: "#489a74" }}
        >
          {"<"}
        </button>

        {/* Card */}

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
            <p
              className="card-text fs-4 font-monospace fw-bold"
              style={{ wordSpacing: "4px", lineHeight: "2" }}
            >
              {data[currentIndex].content}
            </p>
          </div>

          {/* card footer */}
          <div className="card-footer text-body-secondary ">
            <p>{data[currentIndex].description}</p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="btn m-2 fw-bolder fs-1 rounded-5"
          style={{ backgroundColor: "#489a74" }}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default Card;
