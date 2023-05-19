import React from 'react'
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 }
  },
};

function Resigter(userData) {
  //api 
  axios.post('https://034a-118-70-132-104.ngrok-free.app/api/auth/resigter', userData);
  // Sử dụng hàm resigterUser để gọi Api đăng kí người dùng
  Resigter({
    username: 'exampleuser',
    email: 'text',
    password: 'password123'
  })
    .then(response => {
      console.log(response.data); // Xử lý dữ liệu trả về
    })
    .catch(error => {
      console.error(error); // Xử lý lỗi
    });

  return (
    <div className='resigter-content'>
      <div className='resigter-line'>
        <h2 className='resigter-text'>Đăng kí tài khoản Smartphone</h2>
        <div className='resigter-line-2'>
          <div style={{ marginTop: '25px' }}>
            <Form.Item name="mật khẩu" label="Họ tên"
              rules={[{ required: true, message: 'Please input your nickname!' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email"
              rules={[{ type: 'email', message: 'The input is not valid E-mail!' },
              {
                required: true,
                message: 'Please input your E-mail!',
              }]}>
              <Input />
            </Form.Item>

            <Form.Item name="mật khẩu" label="Mật khẩu"
              rules={[{ required: true, message: 'Please input your password!' }]} >
              <Input.Password />
            </Form.Item>

            <Form.Item name="nhập lại mật khẩu" label="Xác nhận mật khẩu" dependencies={['password']}
              rules={[{ required: true, message: 'Please confirm your password!' }]}>
              <Input.Password />
            </Form.Item>
            <div className='resigter-line-3'>
              <h5 style={{ fontWeight: 'unset' }}>Đã có tài khoản ?</h5>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <h5 className='resigter-text-1'>Đăng nhập tại đây</h5>
              </Link>
            </div>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" style={{ marginTop: '30px' }}>
                Đăng kí
              </Button>
            </Form.Item>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resigter