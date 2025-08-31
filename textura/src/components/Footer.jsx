import React from 'react'

const Footer = () => {
  return (
    <div>
        
        <div className="footer-section pt-80" data-background="assets/img/home3.jpg">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-5 col-lg-5 col-md-6">
                <div className="footer-content-wrap">
                    <div className="section-title">
                    <h2 className="text-white visible-slowly-right">
                        Transform Your Space
                    </h2>
                    </div>
                    <hr />
                    <p
                    className="text-white wow fadeInUp animated"
                    data-wow-delay="400ms"
                    >
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                    </p>
                    <a
                    href="contact.html"
                    className="white-btn mt-20 wow fadeInDown animated"
                    data-wow-delay="600ms"
                    >
                    Let's Talk <i className="fa-light fa-arrow-right" />
                    </a>
                </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-1" />
                <div className="col-xl-3 col-lg-3 col-md-5">
                <div className="contact-info-wrap mt-40">
                    <div
                    className="single-contact-info wow fadeInUp animated"
                    data-wow-delay="200ms"
                    >
                    <h6 className="text-white">Phone</h6>
                    <p className="p-xl">+34 567 721 12 35</p>
                    </div>
                    <div
                    className="single-contact-info wow fadeInUp animated"
                    data-wow-delay="400ms"
                    >
                    <h6 className="text-white">E-mail</h6>
                    <p>info@Textura.com</p>
                    </div>
                    <div
                    className="single-contact-info wow fadeInUp animated"
                    data-wow-delay="600ms"
                    >
                    <h6 className="text-white">Directions</h6>
                    <p>
                        77 Kennedy Road <br />
                        Soho Manhattan <br />
                        New York - USA
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* <div className="footer-bottom">
            <div className="row align-items-center justify-content-center">
            <div className="site-info text-center">
                <p className="mb-0">
                Copyright © 2025 Textura, Inc. - All rights reserved.
                </p>
            </div>
            </div>
        </div> */}
    </div>
  )
}

export default Footer