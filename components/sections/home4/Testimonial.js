'use client'
import React from 'react';

export default function Testimonial() {
  return (
    <section className="testimonial-section sec-pad" style={{ 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Elements */}
      <div className="bg-elements" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
        <div className="circle-1" style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          backgroundColor: 'rgba(102, 126, 234, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
        <div className="circle-2" style={{
          position: 'absolute',
          top: '60%',
          right: '8%',
          width: '80px',
          height: '80px',
          backgroundColor: 'rgba(118, 75, 162, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 6s ease-in-out infinite 1s'
        }}></div>
        <div className="circle-3" style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '60px',
          height: '60px',
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 5s ease-in-out infinite 2s'
        }}></div>
      </div>

      <div className="auto-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="sec-title mb_60 centred">
          <span className="sub-title" style={{
            color: '#667eea',
            fontSize: '16px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '20px',
            display: 'block',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            padding: '10px 25px',
            borderRadius: '25px',
            border: '1px solid rgba(102, 126, 234, 0.2)'
          }}>
            Testimonials
          </span>
          <h2 style={{
            color: '#2c3e50',
            fontSize: '42px',
            fontWeight: '700',
            lineHeight: '1.2',
            marginBottom: '25px'
          }}>
            What Our Clients Say <br />
            <span style={{ color: '#667eea' }}>About Our Services</span>
          </h2>
          <p style={{
            color: '#5a6c7d',
            fontSize: '17px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover why healthcare providers trust us with their medical billing needs
          </p>
        </div>
        
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
            <div className="testimonial-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box" style={{
                backgroundColor: 'white',
                borderRadius: '25px',
                padding: '35px',
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Quote Icon */}
                <div className="quote-icon" style={{
                  position: 'absolute',
                  top: '25px',
                  right: '25px',
                  fontSize: '48px',
                  color: 'rgba(102, 126, 234, 0.1)',
                  fontFamily: 'serif'
                }}>
                  "
                </div>
                
                <div className="text-box" style={{ marginBottom: '25px' }}>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#5a6c7d',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    "The medical billing service has transformed our practice. Our revenue has increased significantly and the team is incredibly responsive to our needs."
                  </p>
                </div>
                
                <div className="author-info" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <figure className="author-thumb" style={{ margin: 0 }}>
                    <img src="assets/images/home4/doctor2.jpeg" alt="doc 1" style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: '3px solid #667eea',
                      objectFit: 'cover'
                    }} />
                  </figure>
                  <div className="author-name">
                    <h4 style={{
                      color: '#2c3e50',
                      fontSize: '18px',
                      fontWeight: '600',
                      margin: '0 0 5px 0'
                    }}>
                      Dr. Sarah Williams
                    </h4>
                    <span style={{
                      color: '#667eea',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      Family Practice
                    </span>
                  </div>
                </div>
                
                {/* Rating Stars */}
                <div className="rating" style={{
                  position: 'absolute',
                  bottom: '25px',
                  right: '25px',
                  display: 'flex',
                  gap: '3px'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{
                      color: '#FFD700',
                      fontSize: '16px'
                    }}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
            <div className="testimonial-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="inner-box" style={{
                backgroundColor: 'white',
                borderRadius: '25px',
                padding: '35px',
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Quote Icon */}
                <div className="quote-icon" style={{
                  position: 'absolute',
                  top: '25px',
                  right: '25px',
                  fontSize: '48px',
                  color: 'rgba(76, 175, 80, 0.1)',
                  fontFamily: 'serif'
                }}>
                  "
                </div>
                
                <div className="text-box" style={{ marginBottom: '25px' }}>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#5a6c7d',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    "Outstanding service quality and attention to detail. They handle all our billing needs efficiently and keep us updated on every claim status."
                  </p>
                </div>
                
                <div className="author-info" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <figure className="author-thumb" style={{ margin: 0 }}>
                    <img src="assets/images/home4/doctor1.jpg" alt="" style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: '3px solid #4CAF50',
                      objectFit: 'cover'
                    }} />
                  </figure>
                  <div className="author-name">
                    <h4 style={{
                      color: '#2c3e50',
                      fontSize: '18px',
                      fontWeight: '600',
                      margin: '0 0 5px 0'
                    }}>
                      Dr. Michael Brown
                    </h4>
                    <span style={{
                      color: '#4CAF50',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      Cardiology Clinic
                    </span>
                  </div>
                </div>
                
                {/* Rating Stars */}
                <div className="rating" style={{
                  position: 'absolute',
                  bottom: '25px',
                  right: '25px',
                  display: 'flex',
                  gap: '3px'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{
                      color: '#FFD700',
                      fontSize: '16px'
                    }}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
            <div className="testimonial-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box" style={{
                backgroundColor: 'white',
                borderRadius: '25px',
                padding: '35px',
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Quote Icon */}
                <div className="quote-icon" style={{
                  position: 'absolute',
                  top: '25px',
                  right: '25px',
                  fontSize: '48px',
                  color: 'rgba(255, 152, 0, 0.1)',
                  fontFamily: 'serif'
                }}>
                  "
                </div>
                
                <div className="text-box" style={{ marginBottom: '25px' }}>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#5a6c7d',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    "Professional, reliable, and cost-effective. Our billing process is now streamlined and we're seeing faster payments from insurance companies."
                  </p>
                </div>
                
                <div className="author-info" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <figure className="author-thumb" style={{ margin: 0 }}>
                    <img src="assets/images/home4/doctor3.jpeg" alt="doct3" style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: '3px solid #FF9800',
                      objectFit: 'cover'
                    }} />
                  </figure>
                  <div className="author-name">
                    <h4 style={{
                      color: '#2c3e50',
                      fontSize: '18px',
                      fontWeight: '600',
                      margin: '0 0 5px 0'
                    }}>
                      Dr. Jennifer Davis
                    </h4>
                    <span style={{
                      color: '#FF9800',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      Pediatric Practice
                    </span>
                  </div>
                </div>
                
                {/* Rating Stars */}
                <div className="rating" style={{
                  position: 'absolute',
                  bottom: '25px',
                  right: '25px',
                  display: 'flex',
                  gap: '3px'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{
                      color: '#FFD700',
                      fontSize: '16px'
                    }}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        
        .testimonial-block-one .inner-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15) !important;
        }
        
        .testimonial-block-one .inner-box {
          position: relative;
          overflow: hidden;
        }
        
        .testimonial-block-one .inner-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.05), transparent);
          transition: left 0.5s;
        }
        
        .testimonial-block-one .inner-box:hover::before {
          left: 100%;
        }
        
        @media (max-width: 991px) {
          .testimonial-block {
            margin-bottom: 30px;
          }
          
          h2 {
            font-size: 36px !important;
          }
        }
        
        @media (max-width: 768px) {
          h2 {
            font-size: 28px !important;
          }
          
          .testimonial-block {
            margin-bottom: 25px;
          }
        }
      `}</style>
    </section>
  );
};
