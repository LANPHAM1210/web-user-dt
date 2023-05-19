import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/context/login';
import Resigter from './pages/context/resigter';
import Forgotpassword from './pages/context/forgotpassword';
import DienThoai from './pages/page/dienthoai';
import Iphone from './pages/page/iphone';
import SamSung from './pages/page/samsung';
import Oppo from './pages/page/oppo';
import Redmi from './pages/page/redmi';
import Giohang from './pages/page/giohang';
import Realme from './pages/page/realme';
import Reno8T from './components/sanpham/reno8T';
import Iphone14Promax128GB from './components/sanpham/ip14promax128gb';
import SamSungs23 from './components/sanpham/samsungs23';
import RealmeC55 from './components/sanpham/realmec55';
import SamSungZ from './components/sanpham/samsungZ';
import KiemTraDonHang from './pages/page/kiemtradonhang';
import Trangchu from './pages/page/trangchu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Trangchu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/resigter' element={<Resigter />} />
        <Route path='/forgotpassword' element={<Forgotpassword />} />
        <Route path='/dien-thoai' element={<DienThoai />} />
        <Route path='/iphone' element={<Iphone />} />
        <Route path='/sam-sung' element={<SamSung />} />
        <Route path='/oppo' element={<Oppo />} />
        <Route path='/realme' element={<Realme />} />
        <Route path='/redmi' element={<Redmi />} />
        <Route path='/kiem-tra-don-hang' element={<KiemTraDonHang />} />
        <Route path='/gio-hang' element={<Giohang />} />
        <Route path='/reno8T' element={<Reno8T />} />
        <Route path='/ip14-pm-128gb' element={<Iphone14Promax128GB />} />
        <Route path='/sam-sung-s23' element={<SamSungs23 />} />
        <Route path='/real-me-c55' element={<RealmeC55 />} />
        <Route path='/sam-sung-Z' element={<SamSungZ />} />
      </Routes>
    </div>
  );
}

export default App;
