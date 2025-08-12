'use client'
import React from 'react';

export default function Contact() {
  return (
    <section className="contact-section pt_120 pb_120" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Elements */}
      <div className="bg-elements" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
        <div className="circle-1" style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '120px',
          height: '120px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
        <div className="circle-2" style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '80px',
          height: '80px',
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          animation: 'pulse 6s ease-in-out infinite 1s'
        }}></div>
        <div className="circle-3" style={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          width: '100px',
          height: '100px',
          backgroundColor: 'rgba(255,255,255,0.06)',
          borderRadius: '50%',
          animation: 'pulse 5s ease-in-out infinite 2s'
        }}></div>
      </div>

      <div className="auto-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row clearfix" style={{ alignItems: 'center' }}>
          <div className="col-lg-6 col-md-12 col-sm-12 map-column">
            {/* Contact Info Box Above Map */}
            <div className="contact-info-box" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              padding: '30px',
              marginBottom: '30px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)'
            }}>
              <div className="contact-info-map">
                {/* Location Info */}
                <div className="info-item" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(102, 126, 234, 0.1)'
                }}>
                  <div className="icon" style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: '#667eea'
                  }}>
                    📍
                  </div>
                  <div className="text">
                    <h4 style={{
                      color: '#2c3e50',
                      fontSize: '16px',
                      fontWeight: '600',
                      margin: '0 0 5px 0'
                    }}>
                      Our Location
                    </h4>
                    <p style={{
                      color: '#5a6c7d',
                      fontSize: '14px',
                      margin: 0,
                      lineHeight: '1.4'
                    }}>
                      San Rafael, California, USA
                    </p>
                  </div>
                </div>
                
                {/* Email Info */}
                <div className="info-item" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(102, 126, 234, 0.1)'
                }}>
                  <div className="icon" style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: '#667eea'
                  }}>
                    📧
                  </div>
                  <div className="text">
                    <h4 style={{
                      color: '#2c3e50',
                      fontSize: '16px',
                      fontWeight: '600',
                      margin: '0 0 5px 0'
                    }}>
                      Email Us
                    </h4>
                    <p style={{
                      color: '#5a6c7d',
                      fontSize: '14px',
                      margin: 0,
                      lineHeight: '1.4'
                    }}>
                      info@rbsinnovators.com
                    </p>
                  </div>
                </div>
                
                {/* Phone Info */}
                <div className="info-item" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <div className="icon" style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: '#4CAF50'
                  }}>
                    📞
                  </div>
                  <div className="text">
                    <h4 style={{
                      color: '#2c3e50',
                      fontSize: '16px',
                      fontWeight: '600',
                      margin: '0 0 5px 0'
                    }}>
                      Call Us
                    </h4>
                    <p style={{
                      color: '#5a6c7d',
                      fontSize: '14px',
                      margin: 0,
                      lineHeight: '1.4'
                    }}>
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Container */}
            <div className="map-inner" style={{ 
              borderRadius: '25px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
              position: 'relative'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" 
                height={570} 
                style={{ 
                  border: 0, 
                  width: "100%",
                  borderRadius: '25px'
                }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
              />
            </div>
          </div>
          
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '25px',
              padding: '50px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
            }}>
              <div className="sec-title mb_50">
                <span className="sub-title" style={{
                  color: '#667eea',
                  fontSize: '16px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '15px',
                  display: 'block',
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  border: '1px solid rgba(102, 126, 234, 0.2)'
                }}>
                  Contact Us
                </span>
                <h2 style={{
                  color: '#2c3e50',
                  fontSize: '36px',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  marginBottom: '20px'
                }}>
                  Get In Touch With <br />
                  <span style={{ color: '#667eea' }}>Our Team</span>
                </h2>
                <p style={{
                  color: '#5a6c7d',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Ready to streamline your medical billing? Contact us today for a free consultation and discover how we can help optimize your revenue cycle.
                </p>
              </div>
              
              <div className="form-inner">
                <form action="#" method="post" className="default-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group" style={{ marginBottom: '20px' }}>
                        <input 
                          type="text" 
                          name="fname" 
                          placeholder="First Name" 
                          required 
                          style={{
                            width: '100%',
                            padding: '16px 22px',
                            border: '2px solid #e0e0e0',
                            borderRadius: '15px',
                            fontSize: '15px',
                            transition: 'all 0.3s ease',
                            boxSizing: 'border-box',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)'
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group" style={{ marginBottom: '20px' }}>
                        <input 
                          type="text" 
                          name="lname" 
                          placeholder="Last Name" 
                          required 
                          style={{
                            width: '100%',
                            padding: '16px 22px',
                            border: '2px solid #e0e0e0',
                            borderRadius: '15px',
                            fontSize: '15px',
                            transition: 'all 0.3s ease',
                            boxSizing: 'border-box',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email Address" 
                      required 
                      style={{
                        width: '100%',
                        padding: '16px 22px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '15px',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone Number" 
                      style={{
                        width: '100%',
                        padding: '16px 22px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '15px',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '25px' }}>
                    <textarea 
                      name="message" 
                      placeholder="Your Message"
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '16px 22px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '15px',
                        fontSize: '15px',
                        resize: 'vertical',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                    ></textarea>
                  </div>
                  
                  <div className="form-group message-btn">
                    <button 
                      type="submit" 
                      className="theme-btn btn-one"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        border: 'none',
                        padding: '18px 35px',
                        borderRadius: '15px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        width: '100%',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                      }}
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
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
        
        .theme-btn.btn-one:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
        }
        
        .theme-btn.btn-one:active {
          transform: translateY(-1px);
        }
        
        input:focus, textarea:focus {
          border-color: #667eea !important;
          outline: none;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
          background-color: white !important;
        }
        
        .map-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.25);
        }
        
        .map-inner {
          transition: all 0.3s ease;
        }
        
        .contact-info-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }
        
        .contact-info-box {
          transition: all 0.3s ease;
        }
        
        @media (max-width: 991px) {
          .content-box {
            text-align: center;
          }
          
          h2 {
            font-size: 30px !important;
          }
          
          .contact-info-box {
            margin-bottom: 25px;
          }
        }
        
        @media (max-width: 768px) {
          h2 {
            font-size: 26px !important;
          }
          
          .content-box {
            padding: 30px !important;
          }
          
          .contact-info-box {
            padding: 25px !important;
          }
        }
      `}</style>
    </section>
  );
};
