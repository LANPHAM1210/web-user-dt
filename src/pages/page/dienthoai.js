import React from 'react'
import { Row, Carousel, Col, Checkbox } from 'antd'
import './style.css'
import Footer from '../../components/layout/layoutPage/footer'
import Header from '../../components/layout/layoutPage/header'

function DienThoai() {
  return (
    <div>
    <Header />
      <div className='content-line-1'>
        <Carousel autoplay>
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/13/ip-pc.png' alt='anh-1' /> 
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/01/showcase-redmi-buds-4-lite-web-01.jpg' alt='anh-2' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/03/20/xiaomi-13-series-01.jpg' alt='anh-3' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/14/galaxy-z-fold4-z-flip4-02.jpg' alt='anh-4' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/18/web-galaxy-s23-ultra-03.jpg' alt='anh-5' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/15/web-c55.png' alt='anh-6' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/18/taba8-web-1.jpg' alt='anh-7' />
          <img src='https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/10/oppo-find-n2-flip-web.jpg' alt='anh-8' />
        </Carousel>
      </div>
      
      <div className='content-dt-1'>
        <div className='content-dt-line'>
          <div>
            <h3 className='dt-text-1'>Hãng sản xuất</h3>
              <Row className='dt-line-1'>
              <Col span={9}>
                <Checkbox value="Tất cả">Tất cả</Checkbox>
              </Col>
              <Col span={9}>
                <Checkbox value="Iphone">Iphone</Checkbox>
              </Col>
              </Row>

              <Row className='dt-line-1'>
              <Col span={9}>
                <Checkbox>Samsung</Checkbox>
              </Col>
              <Col span={9}>
                <Checkbox>Oppo</Checkbox>
              </Col>
              </Row>
    
              <Row className='dt-line-1'>
              <Col span={9}>
                <Checkbox className='dt-text-2' value="Realme">Realme</Checkbox>
              </Col>
              <Col span={9}>
                <Checkbox className='dt-text-2' value="Redmi">Redmi</Checkbox>
              </Col>
              </Row>
          </div>

          <div>
            <h3 className='dt-text-1'>Mức giá</h3>
              <Row className='dt-line-1'>
              <Col span={9}>
                <Checkbox value="Tất cả">Tất cả</Checkbox>
              </Col>
              </Row>

              <Row className='dt-line-1'>
              <Col span={9}>
                <Checkbox>Dưới 2 triệu</Checkbox>
              </Col>
              </Row>
    
              <Row className='dt-line-1'>
              <Col span={9}>
                <Checkbox className='dt-text-2' value="Redmi">Từ 2 - 7 triệu</Checkbox>
              </Col>
              </Row>

              <Row className='dt-line-1'>
              <Col span={9}>
                <Checkbox className='dt-text-2' value="Redmi">Từ 7 - 13 triệu</Checkbox>
              </Col>
              </Row>

              <Row className='dt-line-1'>
              <Col span={9}>
                <Checkbox className='dt-text-2' value="Redmi">Trên 13 triệu</Checkbox>
              </Col>
              </Row>
          </div>

          <div>
            <h3 className='dt-text-1'>Trả góp ưu đãi</h3>
              <Row className='dt-line-1'>
              <Col span={9}>
                <Checkbox value="Tất cả">Tất cả</Checkbox>
              </Col>
              </Row>

              <Row className='dt-line-1'>
              <Col span={9}>
                <Checkbox>Trả góp 0%</Checkbox>
              </Col>
              </Row>
    
              <Row className='dt-line-1'>
              <Col span={10}>
                <Checkbox className='dt-text-2' value="Redmi">Trả góp 0đ</Checkbox>
              </Col>
              </Row>

              <Row className='dt-line-1'>
              <Col span={11}>
                <Checkbox className='dt-text-2' value="Redmi">Trả góp 0đ và 0%</Checkbox>
              </Col>
              </Row>
          </div>
        </div>
        <div className='content-dt-line-1'> 
          <div className='content-dt-text-1'>
            <h3>Điện thoại</h3>
            <div className='content-dt-text-2'>
              <a href='/iphone'><h4>iPhone</h4></a>
              <a href='/sam-sung'><h4 className='sam-sung'>SamSung</h4></a>
              <a href='/oppo'><h4 className='Op-po'>Oppo</h4></a>
              <a href='/realme'><h4 className='realme'>Realme</h4></a>
              <a href='/redmi'><h4 className='redmi'>Redmi</h4></a>
            </div>
          </div>

          <div className='content-line-dt'>
          <Row gutter={22}>
            <Col className="gutter-dien-thoai" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/10/S20%20FE%20-%20Mint%20%20(1).png' alt='anh-1' className='anh'/>
              <h4>Samsung Galaxy S20 FE 256GB - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>8,550,000₫</h3><del>15,490,000₫</del>
              </ul>
            </div>
            </Col>
            <Col className="gutter-dien-thoai" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/02/02/image-removebg-preview-2_638109032737377121.png' alt='anh-2' className='anh'/>
              <h4>Samsung Galaxy S23 Ultra 8GB/256GB - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>23,790,000₫</h3><del>31,990,000₫</del>
              </ul>
            </div>
            </Col>
            <Col className="gutter-dien-thoai" span={4}>
            <div>
            <h6 className='icon-ip'>Aurthorised Reseller</h6>
            <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/09/08/anh-chup-man-hinh-2022-09-08-luc-01-57-13-removebg-preview.png' alt='anh-5' className='anh' />
            <h4>iPhone 14 (512GB) - Chính hãng VN/A</h4>
            <ul className='text-1'>
              <h3 className='text-2'>24,950,000₫</h3>
            </ul>
            </div>
            </Col>
          </Row>
          
          <div className='content-line-dt'>
          <Row gutter={22}>
            <Col className="gutter-dien-thoai" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/08/02/combo-product-reno8-z-gold.png' alt='anh-1' className='anh'/>
              <h4>Reno8 Z 5G - Chính hãng</h4>
              <ul className='text-1'>
                <h3 className='text-2'>7,890,000₫</h3><del>9,790,000₫</del>
              </ul>
            </div>
            </Col>
            <Col className="gutter-dien-thoai" span={4}>
            <div>
              <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2020/10/24/6%20Pro%20-%20Purple%20(2).png' alt='anh-2' className='anh'/>
              <h4>realme 6 pro - 8GB/128GB - Snapdragon 720G</h4>
              <ul className='text-1'>
                <h3 className='text-2'>7,150,000₫</h3>
              </ul>
            </div>
            </Col>
            <Col className="gutter-dien-thoai" span={4}>
            <div>
            <img src='https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2022/02/17/note-11-pro-5g-2.png' alt='anh-5' className='anh' />
            <h4>Redmi Note 11 Pro 5G - Chính hãng</h4>
            <ul className='text-1'>
              <h3 className='text-2'>7,250,000₫</h3><del>8,990,000₫</del>
            </ul>
            </div>
            </Col>
          </Row>
          </div>
          </div>

        </div>
      </div>
    <Footer />
    </div>
  )
}

export default DienThoai