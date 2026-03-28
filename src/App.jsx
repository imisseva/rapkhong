import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>
      {/* Lớp nền đen toàn trang và font chữ trắng */}
      <div className="min-h-screen bg-black text-white selection:bg-rap-red">
        <Header />
        
        {/* Nội dung chính sẽ thay đổi tùy theo Route */}
        <main className="pt-20"> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Sau này bạn thêm <Route path="/events" element={<EventsPage />} /> ở đây */}
          </Routes>
        </main>

        {/* Footer đơn giản cho giống Wix */}
        <footer className="py-10 text-center border-t border-white/5 text-gray-600 text-xs uppercase tracking-widest">
          © 2026 Rap Không. Tất cả các quyền được bảo lưu.
        </footer>
      </div>
    </Router>
  );
}

export default App;