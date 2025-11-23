import React from "react";
import {
  Navbar as RBNavbar,
  Nav as RBNav,
  Container
} from "react-bootstrap";

import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <RBNavbar expand="lg" className="shadow-sm custom-navbar" fixed="top">
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
          <RBNav className="me-auto custom-nav">

            <RBNav.Link onClick={() => scrollToSection("intro")}>
              Trang Chủ
            </RBNav.Link>

            <RBNav.Link onClick={() => scrollToSection("about")}>
              Giới thiệu nhóm
            </RBNav.Link>

            <RBNav.Link onClick={() => scrollToSection("members")}>
              Thành viên
            </RBNav.Link>

            <RBNav.Link onClick={() => scrollToSection("gallery")}>
              Hình ảnh
            </RBNav.Link>

            <RBNav.Link onClick={() => scrollToSection("project")}>
              Dự án
            </RBNav.Link>

          </RBNav>

          {/* LOGIN BUTTON */}
          <RBNav className="btn-login">
            <RBNav.Link href="#">ĐĂNG NHẬP</RBNav.Link>
          </RBNav>

        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;
