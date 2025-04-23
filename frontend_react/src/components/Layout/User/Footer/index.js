import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='container-fluid pt-3' style={{ height: '300px', background: '#F8D5D7', borderTop: '1px solid #fff', color: 'rgb(214, 156, 82)' }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Link to='/'>
                            <img style={{ width: '150px' }} src='https://file.hstatic.net/200000259653/file/logo_f70542ec0f67426aa376166ef30_cb58b01f399a4e51a49015f5e0862dea.png' />
                        </Link>
                        <p>Cửa hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt với nhất.
                            f1Gen xin chân thành cảm ơn.</p>

                    </div>
                    <div className='col-md-2'>
                        <h4>HƯỚNG DẪN</h4>
                        <p>Hướng dẫn mua hàng</p>
                        <p>Hướng dẫn thanh toán</p>
                        <p>Đăng kí thành viên</p>
                        <p>Hỗ trợ khách hàng</p>

                    </div>
                    <div className='col-md-3'>
                        <h4>CHÍNH SÁCH</h4>
                        <p>Chính sách thành viên</p>
                        <p>Hướng dẫn thanh toán</p>
                        <p>Đăng kí thành viên</p>
                        <p>Hỗ trợ khách hàng</p>
                    </div>
                    <div className='col-md-3'>
                        <h4>CỬA HÀNG CHÍNH</h4>
                        <p>Địa chỉ: 54 Triều Khúc</p>
                        <p>Điện thoại: 0328443736</p>
                        <p>Email: dola@gmail.com</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer