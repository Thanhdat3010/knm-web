import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MemberDetail.css';

// Ảnh thành viên
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';
import member4 from '../assets/member4.jpg';
import member5 from '../assets/member5.jpg';
import member6 from '../assets/member6.jpg';

const members = [
  { id: 1, name: 'Hà Trần Bội Anh', nickname: 'Anh Trần', img: member1, traits: 'Hay cười', hobby: 'Đọc sách', goal: 'Sống an nhàn', darkside: 'Không chịu trách nhiệm sau 22h' },
  { id: 2, name: 'Trương Thành Đạt', nickname: 'Dat T. Truong', img: member2, traits: 'Hiền hòa', hobby: 'Game', goal: 'Có người yêu', darkside: 'Hay nói chuyện vô tri' },
  { id: 3, name: 'Võ Lê Hoàng', nickname: 'Salt Poyz', img: member3, traits: 'Hòa đồng', hobby: 'Rubik', goal: 'Săn phú bà', darkside: 'Không có mặt sáng' },
  { id: 4, name: 'Nguyễn Đình Hùng', nickname: 'Alex Ben', img: member4, traits: 'Chưa cập nhật', hobby: 'Chưa cập nhật', goal: 'Chưa cập nhật', darkside: 'Chưa cập nhật' },
  { id: 5, name: 'Hồ Đăng Thiên Phúc', nickname: 'PHC', img: member5, traits: 'Chưa cập nhật', hobby: 'Chưa cập nhật', goal: 'Chưa cập nhật', darkside: 'Chưa cập nhật' },
  { id: 6, name: 'Nguyễn Quốc Tuấn', nickname: 'Tuấn', img: member6, traits: 'Chưa cập nhật', hobby: 'Chưa cập nhật', goal: 'Chưa cập nhật', darkside: 'Chưa cập nhật' }
];

export default function MemberDetail() {
  const { id } = useParams();
  const member = members.find((m) => m.id === parseInt(id));

  if (!member) return <h2>Không tìm thấy thành viên</h2>;

  return (
    <div className="member-body">

      <header className="member-header">
        <h1>{member.name} – Thông Tin Chi Tiết</h1>
      </header>

      <div className="member-container">

        {/* GIỚI THIỆU */}
        <section className="member-section">
          <h2>Giới Thiệu</h2>

          <img src={member.img} alt={member.name} className="member-image" />

          <div className="content">
            <p><strong>{member.name}</strong> ({member.nickname}) là một thành viên trong nhóm <b>Mê đu sà</b>.  
            Dưới đây là tính cách, sở thích và thông tin nổi bật.</p>
          </div>
        </section>

        {/* ĐẶC ĐIỂM */}
        <section className="member-section">
          <h2>Các Đặc Điểm Nổi Bật</h2>

          <ul>
            <li><strong>Biệt danh:</strong> {member.nickname}</li>
            <li><strong>Tính cách:</strong> {member.traits}</li>
            <li><strong>Sở thích:</strong> {member.hobby}</li>
            <li><strong>Mục tiêu:</strong> {member.goal}</li>
            <li><strong>Mặt tối:</strong> {member.darkside}</li>
          </ul>
        </section>

      </div>

      <footer className="member-footer">
        <p>© 2024 Nhóm Mê đu sà | <Link to="/">Quay về trang chủ</Link></p>
      </footer>
    </div>
  );
}
