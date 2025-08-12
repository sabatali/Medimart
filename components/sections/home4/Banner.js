'use client'
import Link from 'next/link';
import React from 'react';

export default function Banner() {
  return (
    <section className="banner-style-three p_relative">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }}></div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-30.png)' }}></div>
              <span className="upper-text">MEDICAL BILLING COMPANY</span>
              <h2>Top-Rated <span>All-in-One Medical</span> Billing Services for Healthcare Providers in the USA</h2>
              <p>RBS Innovators LLC is a one-stop solution for all your medical billing and coding services. We tirelessly empower USA physicians with seamless, hassle-free revenue cycle management. Let our experts handle the complexities of billing so you can focus on what matters most—patient care!</p>
              <div className="btn-box">
                <Link href="index-4" className="theme-btn btn-one mr_60">
                  <span>Get A Quote</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image-box">
              <div className="image-shape">
                <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-31.png)' }}></div>
                <div className="shape-2 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-9.png)' }}></div>
                <div className="shape-3 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
                <div className="shape-4" style={{ backgroundImage: 'url(assets/images/shape/shape-32.png)' }}></div>
              </div>
              <figure className="image">
                <img src="assets/images/banner/banner-img-2.png" alt="" />
              </figure>
              <div className="text-box">
                <h3>Medical Billing Expert</h3>
                <span className="designation">Professional Billing Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
