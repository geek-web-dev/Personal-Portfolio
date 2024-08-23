import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const GoTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleGoTopBtn = () => {
      if (window.scrollY > 400) {
        setShow(true);
      }
      else {
        setShow(false);
      }
    }

    window.addEventListener("scroll", handleGoTopBtn);

    return () => {
      window.removeEventListener("scroll", handleGoTopBtn);
    }
  })
  return (
    <Link className={`go-top-btn centering ${show ? "show" : ""}`} to='home'>
      <i className="fa-solid fa-angle-up text-white"></i>
    </Link>
  )
}

export default GoTopButton