import React from 'react'
import ProductItem from '../../../components/share/ProductItem'

function Product() {
    return (
        <div>
            <div className='container-fluid' style={{ background: '#F8D5D7' }}>
                <div className='container d-flex align-items-center' style={{ height: '50px' }}>
                    <p className='m-0' style={{ color: '#fff' }}>Trang chủ / </p>
                    <p className='m-0' style={{ color: '#d69c52' }}>  Sản phẩm</p>
                </div>
            </div>
            <div className='container ' >
                <div className='row' style={{ margin: '30px 0' }}>
                    <div className='col-md-3'>
                        <ProductItem
                            name='Kem dưỡng da mặt phục hồi và chống lão hóa'
                            imgSrc='https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg'
                            price='2.930.000đ'

                        />
                    </div>
                    <div className='col-md-3'>
                        <ProductItem
                            name='Kem dưỡng da mặt phục hồi '
                            imgSrc='https://product.hstatic.net/200000259653/product/kem-duong-da-mat-phuc-hoi-da_a2a09e1e1d3442cd852c80acfe6d7ba3_be734af94af14ebdb3f8cf4b4d4596eb_grande.jpg'
                            price='1.760.000đ'

                        />
                    </div>
                    <div className='col-md-3'>
                        <ProductItem
                            name='Kem chống nắng'
                            imgSrc='https://product.hstatic.net/200000259653/product/chong-nang-body-2_9ce4407a74d94687aa1860068fc1a5af_7306aa9c14dd4b499e95a77014fe9ff7_grande.jpg'
                            price='1.285.000đ'

                        />
                    </div>
                    <div className='col-md-3'>
                        <ProductItem
                            name='Kem dưỡng da mặt phục hồi và chống lão hóa'
                            imgSrc='https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg'
                            price='2.930.000đ'

                        />
                    </div>
                    <div className='col-md-3'>
                        <ProductItem
                            name='Kem dưỡng da mặt '
                            imgSrc='https://product.hstatic.net/200000259653/product/kem-duong-da-mat-tri-lao-hoa_92b02e0fa3ae4bc0a39179c63f793b95_833d66282c334a1d923364481dbe1dc6_grande.jpg'
                            price='2.930.000đ'

                        />
                    </div>
                    <div className='col-md-3'>
                        <ProductItem
                            name='Kem dưỡng da mặt phục hồi và chống lão hóa'
                            imgSrc='https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg'
                            price='2.930.000đ'

                        />
                    </div>
                    <div className='col-md-3'>
                        <ProductItem
                            name='Kem dưỡng da mặt phục hồi và chống lão hóa'
                            imgSrc='https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg'
                            price='2.930.000đ'

                        />
                    </div>
                    <div className='col-md-3'>
                        <ProductItem
                            name='Kem dưỡng da mặt phục hồi và chống lão hóa'
                            imgSrc='https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg'
                            price='2.930.000đ'

                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product