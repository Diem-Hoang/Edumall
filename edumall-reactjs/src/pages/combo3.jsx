import React, { Component } from 'react';

class Combo3 extends Component {
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
                        <div className="row">
                            <h1 className="text-center mb-5"> Combo 12 khóa học</h1>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/mmt.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1"> Nhập môn Mạng máy tính</h5>   <a className="text-muted fs--1 stretched-link text-decoration-none" href="/post01">Giang Vien A</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/hero-header.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Học nhanh Guitar 30 ngày</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="/post02">guitar artist</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/ReactJS.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Nhập môn cơ bản với ReactJS</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="/post03">A University</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/nhat.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Khóa học Dokkai Somatome N3</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="/post04">JPan Kosei </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/nhinnhan.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Làm sao để nhìn nhận vấn đề thực tiễn hơn</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="/post05">Nhà văn B</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/experience-design.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Cách tạo thời gian biểu cho chính mình</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="/post06">Bloger C</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/user-research.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Viết lách như bậc thầy văn học</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="/post07">Lê Quốc Việt</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/critical-thinking.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Introduction to Logic and Critical Thinking</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="/post08">Trần Ng Diễm Hoàng</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/art-design.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Nghệ thuật và Thiết kế đồ họa</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="/post09">Nguyễn Đức Nam</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/user-research.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Viết lách như bậc thầy văn học</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="/post07">Lê Quốc Việt</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/hero-header.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Học nhanh Guitar 30 ngày</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="/post02">guitar artist</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/mmt.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1"> Nhập môn Mạng máy tính</h5>   <a className="text-muted fs--1 stretched-link text-decoration-none" href="/post01">Giang Vien A</a>
                                    </div>
                                </div>
                            </div>
                           
                           
                          
                        </div>
                    </div>{/* end of .container*/}
                </section>
                {/* <section> close ============================*/}
                {/* ============================================*/}
                {/* ============================================*/}
                {/* <section> begin ============================*/}
                <section className="pt-0">
                    <div className="container">
                        <div className="row h-40 align-items-center">
                        <h1 className="text-center my-5">Học viên nói gì về khóa học<br /><span className="text-primary">Bình luận</span></h1>
                            <div className="col-md-12 col-lg-6 h-20">
                                <div className="card card-span text-white h-20"><img className="w-30" src="assets/img/gallery/woman6.jpg" alt="..." />
                                    <div className="card-body px-xl-5 px-md-3 pt-0">
                                        <div className="d-flex flex-column align-items-center bg-100" style={{ marginTop: '-2.4rem' }}>
                                            <h5 className="mt-3 mb-0">Tanakasan</h5>
                                            <p className="text-muted">Sinh Viên CNTT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 h-50">
                                <h1 className=" my-4">Phản hồi của Tanakasan</h1>
                                <p>Tham gia khóa học là 1 lựa chọn sáng suốt vừa giúp tìm hiểu thêm nhiều kiến thức một cách dễ tiếp thu mà còn tiết kiệm được rất nhiều thời gian. Cám ơn rất nhiều</p>
                            </div>
                            <div className="col-md-12 col-lg-6 h-20">
                                <div className="card card-span text-white h-20"><img className="w-30" src="assets/img/gallery/woman5.jpg" alt="..." />
                                    <div className="card-body px-xl-5 px-md-3 pt-0">
                                        <div className="d-flex flex-column align-items-center bg-100" style={{ marginTop: '-2.4rem' }}>
                                            <h5 className="mt-3 mb-0">Sakura</h5>
                                            <p className="text-muted">Sinh Viên CNTT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 h-50">
                                <h1 className=" my-4">Phản hồi của Sakura</h1>
                                <p>Có nhiều khóa học để lựa chọn với mức phí rất vừa túi tiền sinh viên. Có nhiều bài test để kiểm tra năng lực sau mỗi khóa học</p>
                            </div>

                        </div>
                    </div>{/* end of .container*/}
                </section>
                {/* <section> close ============================*/}
                {/* ============================================*/}
                <section>
                    <div className="bg-holder" style={{ backgroundImage: 'url(assets/img/gallery/funfacts-2-bg.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    </div>
                    {/*/.bg-holder*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 text-center mb-5"><img src="assets/img/gallery/published.png" height={100} alt="..." />
                                <h1 className="my-2">768</h1>
                                <p className="text-info fw-bold">COURSES PUBLISHED</p>
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center mb-5"><img src="assets/img/gallery/instructors.png" height={100} alt="..." />
                                <h1 className="my-2">120</h1>
                                <p className="text-info fw-bold">EXPERT INSTRUCTORS</p>
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center mb-5"><img src="assets/img/gallery/learners.png" height={100} alt="..." />
                                <h1 className="my-2">8300</h1>
                                <p className="text-info fw-bold">HAPPY LEARNERS</p>
                            </div>
                            <div className="col-sm-6 col-lg-3 text-center mb-5"><img src="assets/img/gallery/awards.png" height={100} alt="..." />
                                <h1 className="my-2">32</h1>
                                <p className="text-info fw-bold">AWARDS ACHIEVED</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ============================================*/}
                {/* <section> begin ============================*/}
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-4 mb-5"><img src="assets/img/gallery/cta.png" width={280} alt="cta" /></div>
                            <div className="col-md-6 col-lg-5">
                                <h5 className="text-primary font-sans-serif fw-bold">Đăng kí ngay</h5>
                                <h1 className="mb-5">Nhận ngay<br />Mỗi bản cập nhập</h1>
                                <form className="row g-0 align-items-center">
                                    <div className="col">
                                        <div className="input-group-icon">
                                            <input className="form-control form-little-squirrel-control" type="email" placeholder="Nhập email" aria-label="email" /><i className="fas fa-envelope input-box-icon" />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary rounded-0" type="submit">Đăng kí ngay</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>{/* end of .container*/}
                </section>
                {/* <section> close ============================*/}

                {/* <section> begin ============================*/}
            {/*      <section className="bg-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0"><a className="text-decoration-none" href="#"><img src="assets/img/gallery/footer-logo.png" height={100} alt /></a>
                                <p className="text-dark my-4"> <i className="fas fa-map-marker-alt me-3" /><span className="text-dark">Bach Khoa - Da Nang  &nbsp;</span><a className="text-dark" href="tel:+8483213123">+00000000</a><br />Edumail, CA 94110</p>
                                <p className="text-dark"> <i className="fas fa-envelope me-3"> </i><a className="text-dark" href="contact-NamHoangNhat@gmail.com">contact-NamHoangNhat@gmail.com </a></p>
                                <p className="text-dark"> <i className="fas fa-phone-alt me-3" /><a className="text-dark" href="tel:1-800-800-2299">1-000-888-2222 (Support)</a></p>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
                                <h5 className="lh-lg fw-bold mb-4 text-dark font-sans-serif">Cộng đồng </h5>
                                <ul className="list-unstyled mb-md-4 mb-lg-0">
                                    <li className="lh-lg"><a className="text-200" href="#!">Người học</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Đối tác</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Lập trình viên</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Người kiểm thử</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Phiên dịch viên</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Blog</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Blog công nghệ</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Trung tâm dạy học</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                                <h5 className="lh-lg fw-bold text-dark mb-4 font-sans-serif">Thông tin</h5>
                                <ul className="list-unstyled mb-md-4 mb-lg-0">
                                    <li className="lh-lg"><a className="text-200" href="#!">Thông tin về chúng tôi</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Giá</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Blog</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Nghề nghiệp</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Liên hệ</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                                <h5 className="lh-lg fw-bold text-dark mb-4 font-sans-serif"> Hơn nữa</h5>
                                <ul className="list-unstyled mb-md-4 mb-lg-0">
                                    <li className="lh-lg"><a className="text-200" href="#!">Nhà đầu tư</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Khóa học</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Riêng tư</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Hỗ trợ</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Khả năng tiếp cận</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Liên hệ</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Bài viết</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Danh mục</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Chi nhánh</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>{/* end of .container
                </section>     */ }
                {/* <section> close ============================*/}
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

export default Combo3;