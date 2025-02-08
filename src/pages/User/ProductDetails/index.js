import React from 'react'
import { useState } from 'react';

function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    return (
        <div>
            <div className='container-fluid' style={{ background: '#F8D5D7' }}>
                <div className='container d-flex align-items-center' style={{ height: '50px' }}>
                    <p className='m-0' style={{ color: '#fff' }}>Trang chủ / </p>
                    <p className='m-0' style={{ color: '#d69c52' }}> Chi tiết sản phẩm</p>
                </div>
            </div>
            <div className='mt-3 container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img style={{ width: '500px' }} src='https://product.hstatic.net/200000259653/product/kem-duong-da-mat-tri-lao-hoa-2_d5b7bd2f0fb342068560fdb7e6096c1b_22ca497d0a894817b7cc7ef6083d5fae_master.jpg' />
                    </div>
                    <div className='col-md-6'>
                        <p style={{ fontSize: '20px', fontWeight: '500' }}>Kem Dưỡng Da Mặt Trẻ Hóa Da Image AGELESS Total Retinol A Crème</p>
                        <p>
                            <span style={{ fontWeight: '500' }}>Tình trạng:</span>
                            <span>Còn hàng</span>
                        </p>
                        <p style={{ color: 'red', fontSize: '18px' }}>2.160.000đ</p>
                        <p style={{ fontSize: '20px' }}>Số lượng :</p>
                        <div className='d-flex' style={{ width: '100px', height: '30px' }}>
                            <button
                                className='border-0' style={{ width: '50px', backgroundColor: '#d69c52', marginRight: '8px', borderRadius: '5px' }}>-</button>
                            <input className='w-100' type="number"
                                style={{ borderRadius: '5px' }}
                                value={quantity}
                                readOnly></input>
                            <button
                                className='border-0' style={{ width: '50px', backgroundColor: '#d69c52', marginLeft: '8px', borderRadius: '5px' }}>+</button>
                        </div>
                        <div className='d-flex mt-3'>
                            <button style={{ width: '180px', height: '40px', borderRadius: '5px', margin: '8px', border: 'none', background: '#d69c52', color: '#fff' }}> Thêm vào giỏ hàng</button>
                            <button style={{ width: '180px', height: '40px', borderRadius: '5px', margin: '8px', border: 'none', background: '#d69c52', color: '#fff' }}>Mua ngay</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails