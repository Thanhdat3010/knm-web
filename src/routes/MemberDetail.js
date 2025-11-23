import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './MemberDetail.css';
import Navbar from '../components/Navbar'; // Import Navbar để giữ điều hướng
import Footer from '../components/Footer'; // Import Footer

// Ảnh thành viên
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';
import member4 from '../assets/member4.jpg';
import member5 from '../assets/member5.jpg';
import member6 from '../assets/member6.jpg';

const members = [
  { 
    id: 1, 
    name: 'Hà Trần Bội Anh', 
    nickname: 'Anh Trần siu cấp vjp pro', 
    img: member1, 
    traits: 'Hay cười và bị khờ', 
    hobby: 'Đọc sách, truyện; nghe nhạc; cầu lông; đánh đàn;...', 
    goal: 'Sống an nhàn ở tủi 20, có (anh chủ) homestay trên đà lạt =))))', 
    darkside: 'Không chịu trách nhiệm cho bất cứ hành động nào sau 22h' 
  },
  { 
    id: 2, 
    name: 'Trương Thành Đạt', 
    nickname: 'Dat T. Truong', 
    img: member2, 
    traits: 'Hiền hòa dễ nuôi', 
    hobby: 'Chơi game, cầu lông, chơi cờ, đánh piano, nghe nhạc', 
    goal: 'Có người yêu', 
    darkside: 'Lâu lâu nói chuyện vô tri' 
  },
  { 
    id: 3, 
    name: 'Võ Lê Hoàng', 
    nickname: 'Hoàng Salt Poyz', 
    img: member3, 
    traits: 'Hướng lung tung, hoà đồng với bạn bè', 
    hobby: 'Chơi thể thao, chơi game, giải rubik, tập gym', 
    goal: 'Săn phú bà', 
    darkside: 'Không có mặt sáng' 
  },
  { 
    id: 4, 
    name: 'Nguyễn Đình Hùng', 
    nickname: 'Ben Alex hay Alex Ben hay Bex Len hay Alẽ', 
    img: member4, 
    traits: 'Một tổ hợp không hề dễ chịu của vui vẻ và trầm kẻm', 
    hobby: 'Mọi thứ có thể làm cho tui tò mò (even sth dark 😈)', 
    goal: 'Lật đổ 🔥🔥🔥', 
    darkside: 'Hay thao túng tâm lý người khác 👀' 
  },
  { 
    id: 5, 
    name: 'Hồ Đăng Thiên Phúc', 
    nickname: 'PHC', 
    img: member5, 
    traits: 'Hòa đồng với bạn bè', 
    hobby: 'Cầu lông, chơi game, đá banh, nghe nhạc', 
    goal: 'Học tốt lập trình', 
    darkside: 'Dễ nổi nóng' 
  },
  { 
    id: 6, 
    name: 'Nguyễn Quốc Tuấn', 
    nickname: 'Nguyễn Quốc Tuấn', 
    img: member6, 
    traits: 'Hướng nội', 
    hobby: 'Đọc truyện tranh, tiểu thuyết, chơi game, chơi đàn, tập gym', 
    goal: 'Qua môn, đi concert idol', 
    darkside: 'Hay tách lẻ' 
  }
];

export default function MemberDetail() {
  const { id } = useParams();
  const member = members.find((m) => m.id === parseInt(id));

  // Scroll lên đầu trang khi vào trang chi tiết
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!member) return <div className="text-white text-center mt-5"><h2>Không tìm thấy thành viên (404)</h2></div>;

  return (
    <div className="member-page-wrapper">
      <Navbar />
      
      {/* BACKGROUND BLUR LAYER */}
      <div 
        className="member-backdrop" 
        style={{ backgroundImage: `url(${member.img})` }}
      ></div>

      <div className="member-content-layer">
        <Container>
            <Row className="align-items-center justify-content-center">
                
                {/* CỘT TRÁI: ẢNH POSTER */}
                <Col md={5} lg={4} className="mb-4 mb-md-0 text-center">
                    <div className="poster-wrapper">
                        <img src={member.img} alt={member.name} className="member-poster" />
                    </div>
                </Col>

                {/* CỘT PHẢI: THÔNG TIN */}
                <Col md={7} lg={8}>
                    <div className="info-wrapper">
                        <h4 className="member-subtitle">CAST MEMBER</h4>
                        <h1 className="member-name">{member.name}</h1>
                        
                        <div className="meta-badge">
                            <span className="badge-nickname">{member.nickname}</span>
                            <span className="badge-hd">HD</span>
                        </div>

                        <p className="member-intro">
                            Thành viên chủ chốt của nhóm <b>Mê đu sà</b>. 
                            Đóng vai trò quan trọng trong dự án phim ngắn "Đánh Đổi".
                        </p>

                        {/* ATTRIBUTES GRID */}
                        <div className="attributes-grid">
                            <div className="attr-item">
                                <span className="attr-label">Tính cách</span>
                                <span className="attr-value">{member.traits}</span>
                            </div>
                            <div className="attr-item">
                                <span className="attr-label">Sở thích</span>
                                <span className="attr-value">{member.hobby}</span>
                            </div>
                            <div className="attr-item">
                                <span className="attr-label">Mục tiêu</span>
                                <span className="attr-value">{member.goal}</span>
                            </div>
                            <div className="attr-item darkside">
                                <span className="attr-label text-danger">⚠️ Mặt tối (Darkside)</span>
                                <span className="attr-value">{member.darkside}</span>
                            </div>
                        </div>

                        <div className="action-buttons mt-4">
                            <Link to="/">
                                <Button variant="secondary" className="btn-back">
                                    <i className="bi bi-arrow-left"></i> Quay về trang chủ
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}