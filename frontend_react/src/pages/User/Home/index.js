import React from 'react'

function Home() {
    return (
        <div className=" main">
            <div className="main-banner">
                <img className="img-fluid" src="https://file.hstatic.net/200000259653/file/beaux-slider-bg3_e8a7791f2e494ae_cd6b728ecdfe4ce1bc3bed52000a01e4.jpg" alt />
                <div className="ld">
                    <p>Làm đẹp tự nhiên</p>
                    <h4>MỸ PHẨM XUẤT XỨ TỪ HÀN QUỐC</h4>
                    <p style={{ fontSize: 20 }}>Giảm 20% khi mua bất kì sản phẩm</p>
                    <button>Mua ngay</button>
                </div>
            </div>
            <div>
                <div className="main-trademark mt-4">
                    <div className="main-trademark_title">
                        <p style={{ fontFamily: '"Dancing Script", cursive' }}>Mỹ phẩm</p>
                        <p>Thương hiệu</p>
                    </div>
                    <div className="trademark container">
                        <div className="row">
                            <div className="col-md-2">
                                <img className="w-100 h-100" src="https://file.hstatic.net/200000259653/file/brand1_ea4f5ee840ff4f8188e70db81dd062e0.png" alt />
                            </div>
                            <div className="col-md-2">
                                <img src="https://file.hstatic.net/200000259653/file/brand4_f1b4ed755c3f4ba28e996a0316c87fd9.png" alt />
                            </div>
                            <div className="col-md-2">
                                <img src="https://file.hstatic.net/200000259653/file/brand3_de97619a12cd47a7bd4796d99dd9d6f9.png" alt />
                            </div>
                            <div className="col-md-2">
                                <img src="https://file.hstatic.net/200000259653/file/brand6_fca2b08e8f8a4314a50b9898848e28b2.png" alt />
                            </div>
                            <div className="col-md-2">
                                <img src="https://file.hstatic.net/200000259653/file/brand5_192461e3d71a4852be4c012ccf604103.png" alt />
                            </div>
                            <div className="col-md-2">
                                <img src="https://file.hstatic.net/200000259653/file/brand2_ebcd27d7dd61405da0cf5cfff9b46b9c.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="main-sellwell container mt-5" style={{ height: 610 }}>
                    <div className="row">
                        <div className="col-md-7 p-0">
                            <div className="main-trademark_title">
                                <p style={{ fontFamily: '"Dancing Script", cursive' }}>Đang bán chạy</p>
                                <p>Hot trong tuần qua</p>
                            </div>
                            <div>
                                <img className="img-fluid w-100" src="https://file.hstatic.net/200000259653/file/img-19_b4446ec9-ebc9-45ea-8d6f-e_ff8ec716043b40508650470bfd556d3e.jpg" alt />
                            </div>
                        </div>
                        <div className="col-md-5 main-sellwell_product d-flex flex-column align-items-center justify-content-center">
                            <img src="https://product.hstatic.net/200000259653/product/chong-nang-body-2_9ce4407a74d94687aa1860068fc1a5af_7306aa9c14dd4b499e95a77014fe9ff7_grande.jpg" alt />
                            <h6>Kem chống nắng toàn thân dạng xịt</h6>
                            <p style={{ color: 'red' }}>1,285,000 đ</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="mt-5" style={{ height: 444, width: '100%', background: 'url("https://file.hstatic.net/200000259653/file/bg-3-1_ca2321fa-3c9b-416e-aa49-5_9766953b156f449fa0059e1c8c99d5d0.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-6">
                                <div className="ld">
                                    <p style={{ color: '#926625' }}>Điểm đến mỹ phẩm</p>
                                    <h4>Giảm giá cho tất cả các gói mỹ phẩm</h4>
                                    <p style={{ fontSize: 20 }}>Chúng tôi cung cấp các sản phẩm làm đẹp và mỹ phẩm hữu cơ, chất
                                        lượng cao. Tất cả các sản phẩm của chúng tôi đều giàu chất dinh dưỡng và có mùi thơm ngon.
                                        Chắc chắn, nó sẽ mang lại cho bạn cảm giác sang trọng. Chúng tôi cung cấp các sản phẩm mỹ
                                        phẩm chất lượng với giá cả phải chăng.</p>
                                    <button>Mua ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="main-sale mt-5">
                    <div className="main-trademark_title">
                        <p style={{ fontFamily: '"Dancing Script", cursive' }}>Khuyến mãi</p>
                        <p>Giảm giá</p>
                    </div>
                    <div id="productCarousel" className="carousel slide container" data-bs-ride="carousel">
                        {/* Nội dung các sản phẩm */}
                        <div className="carousel-inner">
                            {/* Sản phẩm 1 */}
                            <div className="carousel-item active">
                                <div className="row text-center">
                                    <div className="col-md-3">
                                        <div className="product-card">
                                            <img src="https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg" alt="Sản phẩm 1" />
                                            <p>Kem dưỡng da mặt phục hồi và chống lão hóa</p>
                                            <p style={{ color: 'red' }}>2,930,000đ</p>
                                            <div className="product-icons">
                                                <i className="fas fa-shopping-cart" />
                                                <i className="fas fa-eye" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-card">
                                            <img src="https://product.hstatic.net/200000259653/product/kem-duong-mat-chong-lao-hoa-2_f7b95f7999bc4e50abb8650126b12f3f_cee4831ca0c842009188675d9a2b573e_grande.jpg" alt="Sản phẩm 2" />
                                            <p>Sản phẩm 2</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-card">
                                            <img src="https://product.hstatic.net/200000259653/product/kem-duong-da-mat-phuc-hoi-da_a2a09e1e1d3442cd852c80acfe6d7ba3_be734af94af14ebdb3f8cf4b4d4596eb_grande.jpg" alt="Sản phẩm 3" />
                                            <p>Sản phẩm 3</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-card">
                                            <img src="https://product.hstatic.net/200000259653/product/kem-duong-mat-chong-lao-hoa-md-2_a210dd4dc3d54cdaa18dd691044d838e_d36235c99aea467d905a7ed28d42e6fe_grande.jpg" alt="Sản phẩm 4" />
                                            <p>Sản phẩm 4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Sản phẩm 2 */}
                            <div className="carousel-item">
                                <div className="row text-center">
                                    <div className="col-md-3">
                                        <div className="product-card">
                                            <img src="https://product.hstatic.net/200000259653/product/kem-duong-da-mat-tri-lao-hoa_92b02e0fa3ae4bc0a39179c63f793b95_833d66282c334a1d923364481dbe1dc6_grande.jpg" alt="Sản phẩm 5" />
                                            <p>Sản phẩm 5</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-card">
                                            <img src="https://product.hstatic.net/200000259653/product/chong-nang-body-2_9ce4407a74d94687aa1860068fc1a5af_7306aa9c14dd4b499e95a77014fe9ff7_grande.jpg" alt="Sản phẩm 6" />
                                            <p>Sản phẩm 6</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-card">
                                            <img src="https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg" alt="Sản phẩm 7" />
                                            <p>Sản phẩm 7</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="product-card">
                                            <img src="https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg" alt="Sản phẩm 8" />
                                            <p>Sản phẩm 8</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mũi tên điều hướng */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon " aria-hidden="true" />
                        </button>
                    </div>
                </div>
                {/*  */}
                <div className="mt-5" style={{ height: 444, width: '100%', background: 'url("https://file.hstatic.net/200000259653/file/bg-2-1_1920x_b84cdc8bbfed4197b1b20460e431f2b1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="ld">
                                    <p style={{ color: '#926625' }}>Chiếu sáng vẻ đẹp</p>
                                    <h4>Mua hàng chất lượng sản xuất từ Hàn</h4>
                                    <p style={{ fontSize: 20 }}>Chúng tôi cung cấp các sản phẩm làm đẹp và mỹ phẩm hữu cơ, chất
                                        lượng cao. Tất cả các sản phẩm của chúng tôi đều giàu chất dinh dưỡng và có mùi thơm ngon.
                                        Chắc chắn, nó sẽ mang lại cho bạn cảm giác sang trọng. Chúng tôi cung cấp các sản phẩm mỹ
                                        phẩm chất lượng với giá cả phải chăng.</p>
                                    <button>Mua ngay</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="main-product_wellsale mt-5">
                    <div className="main-trademark_title">
                        <p style={{ fontFamily: '"Dancing Script", cursive' }}>Mỹ phẩm</p>
                        <p>Bán chạy</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 product-card">
                                <img src="https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg" alt="Sản phẩm 1" />
                                <p>Kem dưỡng da mặt phục hồi và chống lão hóa</p>
                                <p style={{ color: 'red' }}>2,930,000đ</p>
                                <div className="product-icons">
                                    <i className="fas fa-shopping-cart" />
                                    <i className="fas fa-eye" />
                                </div>
                            </div>
                            <div className="col-md-3 product-card" />
                            <div className="col-md-3 product-card" />
                            <div className="col-md-3 product-card" />
                            <div className="col-md-3 product-card">
                                <img src="https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg" alt="Sản phẩm 1" />
                                <p>Kem dưỡng da mặt phục hồi và chống lão hóa</p>
                                <p style={{ color: 'red' }}>2,930,000đ</p>
                                <div className="product-icons">
                                    <i className="fas fa-shopping-cart" />
                                    <i className="fas fa-eye" />
                                </div>
                            </div>
                            <div className="col-md-3 product-card">
                                <img src="https://product.hstatic.net/200000259653/product/kem-duong-body_132c28acd8e3451bb141261fd12808fa_a295287c6f3a47d4bf94f99f4d0b3ea4_grande.jpg" alt="Sản phẩm 1" />
                                <p>Kem dưỡng da mặt phục hồi và chống lão hóa</p>
                                <p style={{ color: 'red' }}>2,930,000đ</p>
                                <div className="product-icons">
                                    <i className="fas fa-shopping-cart" />
                                    <i className="fas fa-eye" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ld">
                                <p style={{ color: '#926625' }}>Phương pháp truyền thống</p>
                                <h4>LOTION CƠ THỂ THẢO DƯỢC</h4>
                                <p style={{ fontSize: 20 }}>Tất cả đều là Mỹ phẩm Thảo dược và nó được bào chế, sử dụng các thành
                                    phần mỹ phẩm thảo dược được phép khác nhau, là các sản phẩm 100% từ Thảo dược nguyên chất và an
                                    toàn.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="w-100" src="https://file.hstatic.net/200000259653/file/2_9e320845e270473dbd46a77cb21c6608.jpeg" alt />
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="w-100" src="https://file.hstatic.net/200000259653/file/3_c36448acd2764e8a8d49c4fd740a8523.jpg" alt />
                        </div>
                        <div className="col-md-6">
                            <div className="ld">
                                <p style={{ color: '#926625' }}>Cuộc cách mạng mỹ phẩm</p>
                                <h4>SECRUM HỮU CƠ</h4>
                                <p style={{ fontSize: 20 }}>Thành phần tự nhiên là sản phẩm chăm sóc da, chăm sóc tóc và thảo dược
                                    khác tốt nhất. Các thành phần này làm sạch và thanh lọc làn da và mang lại một làn da khỏe mạnh.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ld">
                                <p style={{ color: '#926625' }}>Công thức bác sĩ</p>
                                <h4>KEM DƯỠNG MẶT THẢO DƯỢC</h4>
                                <p style={{ fontSize: 20 }}>Chứa thành phần dưỡng chất của Aloe Vera, Vitamin E và Vitamin B5, do đó
                                    nó làm dịu và làm mềm làn da của bạn và mang lại cho bạn một làn da sáng tự nhiên trên khuôn mặt
                                    của bạn.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="w-100" src="https://file.hstatic.net/200000259653/file/1_b43b5110a90346c6b860cd09ab127476.jpg" alt />
                        </div>
                    </div>
                </div>
                {/* tin tức */}
                <div className="main-news mt-5">
                    <div className="main-trademark_title">
                        <p style={{ fontFamily: '"Dancing Script", cursive' }}>Hữu ích</p>
                        <p>Tin tức</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="news">
                                    <img src="https://file.hstatic.net/200000259653/article/kem-lot-khoang-co-nhu-innisfree_f1f69d5c34814e858caad96982c228bc_grande.jpg" alt />
                                    <p className="title">DƯỠNG ẨM ĐÚNG CÁCH CHO DA</p>
                                    <p>“Dưỡng ẩm cho da” là cụm từ rất phổ biến. Nếu bạn gõ cụm từ “làm thế nào để dưỡng ẩm” cho ra
                                        đến 56 triệu kết quả. Điều này chứng tỏ có rất nhiều người vẫn còn lúng túng...</p>
                                </div>
                            </div>
                            <div className="col-md-4" />
                            <div className="col-md-4" />
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Home