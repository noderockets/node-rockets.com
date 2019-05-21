import React, { useEffect, useState } from "react";
import useScrollPosition from "use-scroll-position";
import styles from "./rocket.module.styl";
import classNames from "classnames";
let lastScrollPosition = -1;

export default function Rocket() {
  const totalHeight = document.body.scrollHeight;
  const scrollPosition = useScrollPosition();
  const [height, setHeight] = useState(window.innerHeight);

  const scrollingDown = lastScrollPosition < scrollPosition;
  console.log(scrollingDown);
  lastScrollPosition = scrollPosition;
  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const position = (scrollPosition * height) / (totalHeight-1000);
  return (
    <div
      className={classNames(
        styles.rocket,
        scrollingDown ? styles.up : styles.down
      )}
      style={{
        bottom: position + "px"
      }}
    />
  );
}
