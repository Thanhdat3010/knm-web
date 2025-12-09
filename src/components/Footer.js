import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        // Trừ đi chiều cao navbar để scroll chính xác hơn
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
    <footer className="footer">
      <div className="container footer-container">
        <div className="row">

          {/* LEFT - LOGO & INFO */}
          <div className="col-md-4 footer-left text-center text-md-start mb-4 mb-md-0">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-info">
              <strong>Nhóm Mê đu sà</strong> <br />
              Trường Đại học Khoa học Tự nhiên – ĐHQG TP.HCM <br />
              K25 • C11
            </p>
          </div>

          {/* MIDDLE - NAVIGATION */}
          <div className="col-md-4 footer-middle text-center mb-4 mb-md-0">
            <h5 className="footer-title">Khám Phá</h5>
            <ul className="footer-menu">
              <li onClick={() => scrollToSection("intro")}>Trang chủ</li>
              <li onClick={() => scrollToSection("about")}>Giới thiệu</li>
              <li onClick={() => scrollToSection("members")}>Diễn viên (Cast)</li>
              <li onClick={() => scrollToSection("bts")}>Hậu trường (BTS)</li>
              <li onClick={() => scrollToSection("project")}>Dự án phim</li>
            </ul>
          </div>

          {/* RIGHT - SOCIAL */}
          <div className="col-md-4 footer-right text-center text-md-end">
            <h5 className="footer-title">Kết Nối</h5>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">YouTube</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">TikTok</a>
            </div>
            <p className="footer-tagline mt-3">
                "Cháy hết mình vì nghệ thuật."
            </p>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="footer-bottom text-center mt-5">
          <p>© {new Date().getFullYear()} Nhóm Mê đu sà. Dự án phim ngắn "Đánh Đổi".</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;