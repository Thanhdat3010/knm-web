import React from 'react';
import MultiLevelNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './home.css';
import groupPhoto from '../assets/group_photo.jpg';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';
import member4 from '../assets/member4.jpg';
import member5 from '../assets/member5.jpg';
import member6 from '../assets/member6.jpg';

const Home = () => {

  const members = [
    { id: 1, name: 'Hà Trần Bội Anh', nickname: 'Anh Trần', img: member1, role: 'Director' },
    { id: 2, name: 'Trương Thành Đạt', nickname: 'Dat T. Truong', img: member2, role: 'Producer' },
    { id: 3, name: 'Võ Lê Hoàng', nickname: 'Salt Poyz', img: member3, role: 'Editor' },
    { id: 4, name: 'Nguyễn Đình Hùng', nickname: 'Alex Ben', img: member4, role: 'Actor' },
    { id: 5, name: 'Hồ Đăng Thiên Phúc', nickname: 'PHC', img: member5, role: 'Cameraman' },
    { id: 6, name: 'Nguyễn Quốc Tuấn', nickname: 'Tuấn', img: member6, role: 'Script' }
  ];

  const btsVideos = [
    { id: 1, src: '/bts1.mp4', caption: 'Hậu trường: Ben Alex quên lời' },
    { id: 2, src: '/bts2.mp4', caption: 'Cảnh quay hỏng #2' },
    { id: 3, src: '/bts3.mp4', caption: 'Nỗ lực của cả team' },
  ];

  return (
    <div className="netflix-wrapper">
      <MultiLevelNavbar />

      {/* 1. HERO SECTION (INTRO)*/}
      <section id="intro" className="hero-section">
        {/* Ảnh nền với lớp phủ tối */}
        <div className="hero-bg" style={{ backgroundImage: `url(${groupPhoto})` }}></div>
        <div className="hero-gradient"></div>

        <div className="hero-content container">
            <h1 className="hero-title">ĐÁNH ĐỔI</h1>
            <p className="hero-subtitle">Nhóm 4 • Mê đu sà</p>
            <p className="hero-desc">
                Chào mừng bạn đến với thế giới của chúng tôi. Nơi những ý tưởng điên rồ nhất trở thành hiện thực.
                Khám phá thành viên, hậu trường và hành trình làm phim.
            </p>
            <div className="hero-buttons">
                <Button variant="light" className="btn-netflix-white" href="#members">
                    <i className="bi bi-play-fill"></i> Khám Phá (Cast)
                </Button>
                <Button variant="secondary" className="btn-netflix-gray" onClick={() => window.open('/hop_dong.pdf', '_blank')}>
                    <i className="bi bi-info-circle"></i> Tài Liệu
                </Button>
            </div>
        </div>
      </section>

      {/* 2. MEMBERS*/}
      <section id="members" className="section dark-section">
        <Container fluid className="px-5">
          <h2 className="section-title">Diễn viên & Ekip (The Cast)</h2>
          <Row className="g-4"> {/* g-4 tạo khoảng cách đều */}
            {members.map((m) => (
              <Col xs={6} md={4} lg={2} key={m.id}>
                <div className="movie-card">
                    <Link to={`/member/${m.id}`}>
                        <div className="poster-frame">
                            <img src={m.img} alt={m.name} className="poster-img" />
                        </div>
                    </Link>
                    <div className="movie-info">
                        <h5>{m.nickname}</h5>
                        <p>{m.name}</p>
                    </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 3. ABOUT & PROJECT INFO */}
      <section id="about" className="section dark-section">
        <Container>
            <Row className="align-items-center">
                <Col md={12} className="text-center">
                    <h2 className="section-title">Dự án "Đánh Đổi"</h2>
                    <p className="project-desc">
                        Đồ án video này mang tên "Đánh Đổi" nhằm mục tiêu thức tỉnh sinh viên về cái giá tàn khốc của việc đánh đổi sức khỏe để theo đuổi thành công. Câu chuyện theo chân Nam, một người trẻ bị lòng đố kỵ và hối tiếc chi phối, người đã ký giao ước với một Hệ thống bí ẩn để đổi sinh mệnh lấy danh vọng và chiến thắng tình địch.
Xuyên suốt bộ phim là hình ảnh ẩn dụ về việc Nam liên tục hy sinh giấc ngủ, sức khỏe và các mối quan hệ (yếu tố cốt lõi của Well-being) để đạt được thành công sự nghiệp. Bi kịch lên đến đỉnh điểm khi Nam ngất xỉu và được chẩn đoán mắc ung thư giai đoạn cuối, nhận ra mọi thành tựu đều vô nghĩa.
Qua đó, đồ án muốn truyền tải thông điệp mạnh mẽ rằng: Thành công đạt được bằng cái giá của sức khỏe là một thất bại; hãy trân trọng sự cân bằng và các mối quan hệ trước khi quá muộn.
                    </p>
                    <p className="project-desc">
                    
                    </p>
           
                    <div className="meta-tags">
                        <span className="tag">Drama</span>
                        <span className="tag">Business Life</span>
                        <span className="tag">2025</span>
                        <span className="tag hd">HD</span>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>

      {/* 4. BEHIND THE SCENE (Netflix Trailers style) */}
      <section id="bts" className="section dark-section bts-section">
        <Container>
          <h2 className="section-title">Hậu trường & Trailers</h2>
          <div className="bts-carousel-wrapper">
            <Carousel interval={null} indicators={true} fade>
              {btsVideos.map((video) => (
                <Carousel.Item key={video.id}>
                  <div className="video-container">
                    <video 
                      src={video.src} 
                      controls 
                      className="bts-video"
                      poster={groupPhoto} 
                    >
                        Trình duyệt không hỗ trợ video.
                    </video>
                  </div>
                  {/* <Carousel.Caption className="netflix-caption">
                    <h3>{video.caption}</h3>
                  </Carousel.Caption> */}
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;