import React, { useState } from 'react';
import MultiLevelNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './home.css';

import logo from '../assets/logo.png';
import groupPhoto from '../assets/group_photo.jpg';

// Member images (placeholder)
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';
import member4 from '../assets/member4.jpg';
import member5 from '../assets/member5.jpg';
import member6 from '../assets/member6.jpg';

const Home = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    { id: 1, name: 'Hà Trần Bội Anh', nickname: 'Anh Trần', img: member1, traits: 'Hay cười', hobby: 'Đọc sách', goal: 'Sống an nhàn', darkside: 'Không chịu trách nhiệm sau 22h' },
    { id: 2, name: 'Trương Thành Đạt', nickname: 'Dat T. Truong', img: member2, traits: 'Hiền hòa', hobby: 'Game', goal: 'Có người yêu', darkside: 'Hay nói chuyện vô tri' },
    { id: 3, name: 'Võ Lê Hoàng', nickname: 'Salt Poyz', img: member3, traits: 'Hòa đồng', hobby: 'Rubik', goal: 'Săn phú bà', darkside: 'Không có mặt sáng' },
    { id: 4, name: 'Nguyễn Đình Hùng', nickname: '', img: member4 },
    { id: 5, name: 'Hồ Đăng Thiên Phúc', nickname: 'PHC', img: member5 },
    { id: 6, name: 'Nguyễn Quốc Tuấn', nickname: '', img: member6 }
  ];

  return (
    <div>
      <MultiLevelNavbar />

      {/* INTRO */}
      <section id="intro" className="section intro-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={logo} alt="Team Logo" className="intro-logo" />
              <p className="intro-text">
                Chào mừng bạn đến với website của nhóm <b>Mê đu sà</b>. Đây là nơi tổng hợp thông tin nhóm, thành viên, hình ảnh và tài liệu.
              </p>
              <Button variant="primary" href="#members">Khám phá ngay</Button>
            </Col>
            <Col md={6}>
              <img src={groupPhoto} alt="Group" className="intro-image" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <Container>
          <h1 className="section-title">Thông tin chung của nhóm</h1>
          <p><b>Tên nhóm:</b> Mê đu sà</p>
          <p><b>Logo nhóm:</b> (đặt file logo vào thư mục assets)</p>
          <p><b>Hợp đồng – Quy tắc – Kế hoạch giao tiếp:</b></p>
          <Button className="download-btn" href="/mnt/data/nội dung website.docx" download>
            Tải tài liệu
          </Button>
        </Container>
      </section>

      {/* MEMBERS */}
      <section id="members" className="section members-section">
        <Container>
          <h1 className="section-title">Thành viên</h1>
          <Row>
            {members.map((m) => (
              <Col md={4} key={m.id} className="member-card">
                <img src={m.img} alt={m.name} className="member-img" />
                <h2>{m.name}</h2>
                <p className="nickname">{m.nickname}</p>
                <Button className="view-btn" onClick={() => setSelectedMember(m)}>Xem chi tiết</Button>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section gallery-section">
        <Container>
          <h1 className="section-title">Hình ảnh</h1>
          <div className="gallery-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="gallery-box">Ảnh {i + 1}</div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROJECT */}
      <section id="project" className="section project-section">
        <Container>
          <h1 className="section-title">Dự án "Đánh Đổi"</h1>
          <p className="project-description">Phim ngắn về áp lực sinh viên và đánh đổi sức khỏe.</p>
        </Container>
      </section>

      <Footer />

      {/* MODAL */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMember(null)}>✕</button>
            <img src={selectedMember.img} alt={selectedMember.name} className="modal-img" />
            <h2>{selectedMember.name}</h2>
            <p><b>Tính cách:</b> {selectedMember.traits || 'Chưa cập nhật'}</p>
            <p><b>Sở thích:</b> {selectedMember.hobby || 'Chưa cập nhật'}</p>
            <p><b>Mục tiêu:</b> {selectedMember.goal || 'Chưa cập nhật'}</p>
            <p><b>Mặt tối:</b> {selectedMember.darkside || 'Chưa cập nhật'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
