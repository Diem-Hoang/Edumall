import React, { Component } from 'react';

class KichHoat extends Component {
    render() {
        return (
            <main className="main" id="top">
                {/* ============================================*/}
                {/* <section> begin ============================*/}
                <section className="bg-danger py-2 d-none d-sm-block">
                    <div className="container"><img src="assets/img/banner/sales.png" height={51} alt />
                        <div className="row align-items-center">
                            <div className="col-auto d-none d-lg-block">
                                <p className="my-2 fs--1"><i className="fas fa-map-marker-alt me-3 text-white" /><span className="text-white">BachKhoa DaNang </span></p>
                            </div>
                            <div className="col-auto ms-md-auto order-md-2 d-none d-sm-block">
                                <ul className="list-unstyled list-inline my-2">
                                    <li className="list-inline-item"><a className="text-decoration-none" href="#!"><i className="fab fa-facebook-f text-900 text-white" /></a></li>
                                    <li className="list-inline-item"><a className="text-decoration-none" href="#!"><i className="fab fa-pinterest text-900 text-white" /></a></li>
                                    <li className="list-inline-item"><a className="text-decoration-none" href="#!"><i className="fab fa-twitter text-900 text-white" /></a></li>
                                    <li className="list-inline-item"><a className="text-decoration-none" href="#!"><i className="fab fa-instagram text-900 text-white"> </i></a></li>
                                </ul>
                            </div>
                            <div className="col-auto">
                                <p className="my-2 fs--1"><i className="fas fa-envelope me-3 text-white" /><a className="text-white text-900" href="contact-HoangNamViet@gmail.com ">contact-HoangNamViet@gmail.com </a></p>
                            </div>
                        </div>
                    </div>{/* end of .container*/}
                </section>
                {/* <section> close ============================*/}
                {/* ============================================*/}
                <nav className="navbar navbar-expand-lg navbar-light sticky-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
                    <div className="container"><a className="navbar-brand" href="index.html"><img src="assets/img/gallery/logo-n.png" height={45} alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
                        <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
                            <li className="nav-item px-2"><a className="nav-link active" aria-current="page" href="/">Trang chủ</a></li>
                                <li className="nav-item px-2"><a className="nav-link" aria-current="page" href="/web-development">Danh mục</a></li>
                                <li className="nav-item px-2"><a className="nav-link" aria-current="page" href="/pricing">Combo khóa học</a></li>
                                <li className="nav-item px-2"><a className="nav-link" aria-current="page" href="/user-research">Nghiên cứu</a></li>
                            </ul>
                            <form className="d-flex my-3 d-block d-lg-none">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                            <div className="dropdown d-none d-lg-block">
                                <button className="btn btn-outline-light ms-2" id="dropdownMenuButton1" type="submit" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-search text-800" /></button>
                                <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1" style={{ top: 55 }}>
                                    <form>
                                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                    </form>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-4 mb-5"><img src="assets/img/gallery/cta.png" width={280} alt="cta" /></div>
                            <div className="col-md-6 col-lg-5">
                                <h2 className="text-primary font-sans-serif fw-bold">Đã đăng ký thành công</h2>
                                <h4 className="mb-5">Mọi thông tin chi tiết sẽ được gửi tới email của bạn!</h4>
                                
                            </div>
                        </div>
                    </div>{/* end of .container*/}
                </section>
            
                <section className="py-0" style={{ marginTop: '-5.8rem' }}>
                    <div className="container bg-danger">
                        <div className="row justify-content-md-between justify-content-evenly py-4">
                            <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                                <p className="fs--1 my-2 fw-bold text-white">Bài Tập Mạng Máy Tính, 2021</p>
                            </div>
                            <div className="col-12 col-sm-8 col-md-6">
                                <p className="fs--1 my-2 text-center text-md-end text-white"> Made with&nbsp;
                                    <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="#EB6453" viewBox="0 0 16 16">
                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                    </svg>&nbsp;by&nbsp;<a className="fw-bold text-900 text-white">NamHoangVietNhom6 </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        );
    }
}

export default KichHoat;