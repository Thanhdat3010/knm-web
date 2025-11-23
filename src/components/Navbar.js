import React, { useState, useEffect } from "react";
import {
  Navbar as RBNavbar,
  Nav as RBNav,
  Container
} from "react-bootstrap";

import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  // Hàm xử lý cuộn trang để đổi màu navbar
  const changeNavBackground = () => {
    if (window.scrollY >= 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackground);
    return () => {
      window.removeEventListener('scroll', changeNavBackground);
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Trừ đi chiều cao navbar để không bị che nội dung
      const headerOffset = 70; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <RBNavbar 
        expand="lg" 
        fixed="top" 
        variant="dark" // Quan trọng: để nút toggle (hamburger) màu trắng
        className={`custom-navbar ${navBackground ? 'scrolled' : ''}`}
    >
      <Container>

        {/* LOGO */}
        <RBNavbar.Brand
          onClick={() => scrollToSection("intro")}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="Logo" className="navbar-logo" />
        </RBNavbar.Brand>

        <RBNavbar.Toggle aria-controls="main-navbar" />

        <RBNavbar.Collapse id="main-navbar" className="menu">
          <RBNav className="ms-auto custom-nav"> {/* ms-auto đẩy menu sang phải */}

            <RBNav.Link onClick={() => scrollToSection("intro")}>
              Trang Chủ
            </RBNav.Link>

            <RBNav.Link onClick={() => scrollToSection("about")}>
              Giới thiệu
            </RBNav.Link>

            <RBNav.Link onClick={() => scrollToSection("members")}>
              Diễn viên
            </RBNav.Link>

            <RBNav.Link onClick={() => scrollToSection("bts")}>
              Hậu trường
            </RBNav.Link>

            <RBNav.Link onClick={() => scrollToSection("gallery")}>
              Hình ảnh
            </RBNav.Link>

          </RBNav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;