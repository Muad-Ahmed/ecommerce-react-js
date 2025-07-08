import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      //   behavior: "smooth",
    });
  }, [pathname]);

  return <></>;
}

export default ScrollToTop;
