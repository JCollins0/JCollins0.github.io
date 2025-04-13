function* numGen(iterations: number): Generator<number, void, unknown> {
  for (let i = 0; i < iterations; i++) {
    const num = Math.floor(Math.random() * 10);
    yield num;
  }
}

const animationNums = Array.from(numGen(200));

import { Typography, useMediaQuery } from "@mui/material";
import "./home-animation.css";

const HomeComponent: React.FC = () => {
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );
  return (
    <div className="home-container">
      <div>
        {!prefersReducedMotion &&
          animationNums.map((value, index) => (
            <span
              aria-hidden
              className="rand-num"
              style={{
                color: "green",
                display: "none",
                left: `${Math.random() * 99}vw`,
                top: `${Math.random() * -200}px`,
                animationDuration: `${Math.floor(Math.random() * 8) + 4}s`,
              }}
              key={index}
            ></span>
          ))}
      </div>
      <div className="wrapper">
        <Typography variant="h1">Welcome to My Website</Typography>
        <Typography>
          This is a personal website where I share my projects, blogs, and
          interests.
        </Typography>
      </div>
    </div>
  );
};
export default HomeComponent;
