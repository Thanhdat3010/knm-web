import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer mt-5">
      <div className="container footer-container">
        <div className="row">

          {/* LEFT */}
          <div className="col-md-4 footer-left text-center text-md-start">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-info">
              Nhóm Mê đu sà <br />
              Đại học Khoa học Tự nhiên – ĐHQG TP.HCM <br />
              Việt Nam
            </p>
            <p className="footer-email">medusa.team.contact@gmail.com</p>
          </div>

          {/* MIDDLE */}
          <div className="col-md-4 footer-middle text-center">
            <h5 className="footer-title">Điều hướng</h5>
            <ul className="footer-menu">
              <li onClick={() => scrollToSection("intro")}>Trang chủ</li>
              <li onClick={() => scrollToSection("about")}>Giới thiệu nhóm</li>
              <li onClick={() => scrollToSection("members")}>Thành viên</li>
              <li onClick={() => scrollToSection("gallery")}>Hình ảnh</li>
              <li onClick={() => scrollToSection("project")}>Dự án</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="col-md-4 footer-right text-center text-md-end">
            <h5 className="footer-title">Mạng xã hội</h5>
            <div className="social-links">

              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">YouTube</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">TikTok</a>

            </div>
          </div>

        </div>

        <div className="footer-bottom text-center mt-4">
          © {new Date().getFullYear()} Nhóm Mê đu sà — Tất cả bản quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
