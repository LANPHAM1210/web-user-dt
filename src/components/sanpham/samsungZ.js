import React from 'react'
import { Carousel, Row, Col, Checkbox, Image, Rate, Mentions, Form, Input } from 'antd'
import './sanpham.css'
import { CarOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Header from '../layout/layoutPage/header'
import Footer from '../layout/layoutPage/footer'

function SamSungZ() {
  return (
    <div>
        <Header />
        <div>
            <h3 className='reno-text'>Samsung Galaxy Z Flip4 - 256GB - Chính hãng</h3>
            <div className='reno'>
                <div className='reno-1'>
                <Carousel autoplay>
                    <Image src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/08/11/screenshot-2022-08-11-090237-removebg-preview.png' alt='anh-1' /> 
                    <Image src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/08/11/image-removebg-preview-16.png' alt='anh-2' />
                    <Image src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/08/11/screenshot-2022-08-11-090429-removebg-preview.png' alt='anh-3' />
                    <Image src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/08/11/screenshot-2022-08-11-090402-removebg-preview.png' alt='anh-4' />
                </Carousel>
                </div>
                <div>
                    <div className='reno-line'>
                        <h3>16,990,000 ₫</h3><del>25,990,000 ₫</del>
                        <h5>| Giá đã bao gồm 10% VAT</h5>
                    </div>
                    <putton className='reno-putton'><CarOutlined className='icon-reno8T'/>MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC</putton>
                    <h5 className='reno-3'>Lựa chọn phiên bản</h5>
                    <div className='reno8T'>
                        <div className='reno-line-2'>
                        <Row className='dt-line-3'>
                            <Col span={9}>
                                <Checkbox className='reno-checkbox' value="Realme">128GB</Checkbox>
                            </Col>
                        </Row>
                        <h4>14,990,000 ₫</h4>
                        </div>

                        <div className='reno-line-2'>
                        <Row className='dt-line-3'>
                            <Col span={9}>
                                <Checkbox className='reno-checkbox' value="Realme">256GB</Checkbox>
                            </Col>
                        </Row>
                        <h4>16,990,000 ₫</h4>

                        </div>
                    </div>

                    <h5 className='reno-3'>Lựa chọn màu và xem địa chỉ còn hàng</h5>
                    <div className='reno8T'>
                        <div className='reno-line-2'>
                        <Row className='dt-line-3'>
                            <Col span={9}>
                                <Checkbox className='reno-checkbox' value="Realme">Vàng</Checkbox>
                            </Col>
                        </Row>
                        <h4>16,990,000 ₫</h4>
                        </div>
                        <div className='reno-line-2'>
                        <Row className='dt-line-3'>
                            <Col span={9}>
                                <Checkbox className='reno-checkbox' value="Realme">Hồng</Checkbox>
                            </Col>
                        </Row>
                        <h4>16,990,000 ₫</h4>
                        </div>

                        <div className='reno-line-2'>
                        <Row className='dt-line-3'>
                            <Col span={9}>
                                <Checkbox className='reno-checkbox' value="Realme">Tím</Checkbox>
                            </Col>
                        </Row>
                        <h4>16,990,000 ₫</h4>
                        </div>

                        <div className='reno-line-2'>
                        <Row className='dt-line-3'>
                            <Col span={9}>
                                <Checkbox className='reno-checkbox' value="Realme">Xám</Checkbox>
                            </Col>
                        </Row>
                        <h4>16,990,000 ₫</h4>
                        </div>
                    </div>
                    <h3 className='reno8T-text'>KHUYẾN MÃI</h3>
                    <h5 className='reno8T-text-1'>Bộ quà Smartphone đặc biệt (Chi tiết liên hệ 1900.2091)</h5>
                    <div className='reno-putton-line'>
                        <div className='reno-putton-1'>
                        <putton className='reno8T-putton'>
                            <CarOutlined/>MUA NGAY</putton>
                            <h5>Giao tận nhà (COD)</h5>
                            <h5>Hoặc nhận tại cửa hàng</h5>
                        </div>
                        <div className='reno-putton-2'>
                        <Link to={'/gio-hang'}>
                            <putton>
                                <ShoppingCartOutlined className='icon-reno8T-1'/>
                                <h5>Thêm vào giỏ hàng</h5>
                            </putton>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reno8T-danhgia'>
                <div className='danhgia-line'>
                    <h3 className='danhgia-text-1'>Đánh giá về Samsung Galaxy Z Flip4 - 256GB - Chính hãng</h3>
                    <Rate className='danhgia-rate'/>
                </div>
                <div className='comment'>
                <Form.Item className='comment-line'
                rules={[ { required: true } ]}>
                    <Mentions rows={3} placeholder="Nội dung" />
                </Form.Item>
                <div className='comment-input'>
                    <Input className='comment-input-1' placeholder="Họ tên" />
                    <Input className='comment-input-1' placeholder="Số điện thoại mua hàng" />
                    <Input className='comment-input-1' placeholder="Email" />
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default SamSungZ