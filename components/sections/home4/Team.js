'use client'
import React from 'react';
import Link from 'next/link';

export default function Team() {
  return (
    <section className="team-section sec-pad" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Elements */}
      <div className="bg-elements" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
        <div className="circle-1" style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '100px',
          height: '100px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
        <div className="circle-2" style={{
          position: 'absolute',
          top: '70%',
          right: '15%',
          width: '60px',
          height: '60px',
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          animation: 'pulse 6s ease-in-out infinite 1s'
        }}></div>
        <div className="circle-3" style={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          width: '80px',
          height: '80px',
          backgroundColor: 'rgba(255,255,255,0.06)',
          borderRadius: '50%',
          animation: 'pulse 5s ease-in-out infinite 2s'
        }}></div>
      </div>

      <div className="auto-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="sec-title mb_60 centred">
          <span className="sub-title" style={{
            color: '#FFD700',
            fontSize: '16px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '20px',
            display: 'block',
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
            padding: '10px 25px',
            borderRadius: '25px',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            Our Team
          </span>
          <h2 style={{
            color: 'white',
            fontSize: '48px',
            fontWeight: '700',
            lineHeight: '1.2',
            marginBottom: '25px',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Expert Medical Billing <br />
            <span style={{ color: '#FFD700' }}>Professionals</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '18px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}>
            Meet our dedicated team of certified professionals who are committed to delivering exceptional medical billing services with precision and care.
          </p>
        </div>
        
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
            <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box" style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                <div className="image-box" style={{ position: 'relative' }}>
                  <figure className="image" style={{ 
                    borderRadius: '25px 25px 0 0',
                    overflow: 'hidden',
                    margin: 0
                  }}>
                    <Link href="team-details">
                      <img src="assets/images/home4/team1.jpg" alt="" style={{ 
                        width: '100%', 
                        height: '280px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }} />
                    </Link>
                  </figure>
                  <div className="overlay-box" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(102, 126, 234, 0.9)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '25px 25px 0 0'
                  }}>
                    <div className="overlay-inner">
                      <div className="content">
                        <ul className="social-links clearfix" style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          gap: '15px'
                        }}>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fab fa-linkedin-in" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fab fa-twitter" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fas fa-envelope" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="experience-badge" style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: '#FFD700',
                    color: '#333',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    boxShadow: '0 5px 15px rgba(255, 215, 0, 0.3)'
                  }}>
                    8+ Years
                  </div>
                </div>
                
                <div className="lower-content" style={{ padding: '25px' }}>
                  <h4 style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '8px',
                    textAlign: 'center'
                  }}>
                    <Link href="team-details" style={{ 
                      color: 'inherit', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}>
                      Sarah Johnson
                    </Link>
                  </h4>
                  <span className="designation" style={{
                    color: '#667eea',
                    fontSize: '14px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'block',
                    textAlign: 'center',
                    marginBottom: '15px'
                  }}>
                    Senior Billing Specialist
                  </span>
                  
                  <div className="expertise-tags" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      Claims Processing
                    </span>
                    <span style={{
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      color: '#4CAF50',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      Revenue Cycle
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
            <div className="team-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="inner-box" style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                <div className="image-box" style={{ position: 'relative' }}>
                  <figure className="image" style={{ 
                    borderRadius: '25px 25px 0 0',
                    overflow: 'hidden',
                    margin: 0
                  }}>
                    <Link href="team-details">
                      <img src="assets/images/home4/team2.jpg" alt="" style={{ 
                        width: '100%', 
                        height: '280px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }} />
                    </Link>
                  </figure>
                  <div className="overlay-box" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(102, 126, 234, 0.9)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '25px 25px 0 0'
                  }}>
                    <div className="overlay-inner">
                      <div className="content">
                        <ul className="social-links clearfix" style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          gap: '15px'
                        }}>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fab fa-linkedin-in" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fab fa-twitter" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fas fa-envelope" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="experience-badge" style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    boxShadow: '0 5px 15px rgba(76, 175, 80, 0.3)'
                  }}>
                    10+ Years
                  </div>
                </div>
                
                <div className="lower-content" style={{ padding: '25px' }}>
                  <h4 style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '8px',
                    textAlign: 'center'
                  }}>
                    <Link href="team-details" style={{ 
                      color: 'inherit', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}>
                      Michael Chen
                    </Link>
                  </h4>
                  <span className="designation" style={{
                    color: '#667eea',
                    fontSize: '14px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'block',
                    textAlign: 'center',
                    marginBottom: '15px'
                  }}>
                    Claims Manager
                  </span>
                  
                  <div className="expertise-tags" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      backgroundColor: 'rgba(255, 152, 0, 0.1)',
                      color: '#FF9800',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      Denial Management
                    </span>
                    <span style={{
                      backgroundColor: 'rgba(156, 39, 176, 0.1)',
                      color: '#9C27B0',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      Appeals
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
            <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box" style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                <div className="image-box" style={{ position: 'relative' }}>
                  <figure className="image" style={{ 
                    borderRadius: '25px 25px 0 0',
                    overflow: 'hidden',
                    margin: 0
                  }}>
                    <Link href="team-details">
                      <img src="assets/images/home4/team3.jpg" alt="teame3" style={{ 
                        width: '100%', 
                        height: '280px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }} />
                    </Link>
                  </figure>
                  <div className="overlay-box" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(102, 126, 234, 0.9)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '25px 25px 0 0'
                  }}>
                    <div className="overlay-inner">
                      <div className="content">
                        <ul className="social-links clearfix" style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          gap: '15px'
                        }}>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fab fa-linkedin-in" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fab fa-twitter" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fas fa-envelope" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="experience-badge" style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: '#9C27B0',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    boxShadow: '0 5px 15px rgba(156, 39, 176, 0.3)'
                  }}>
                    12+ Years
                  </div>
                </div>
                
                <div className="lower-content" style={{ padding: '25px' }}>
                  <h4 style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '8px',
                    textAlign: 'center'
                  }}>
                    <Link href="team-details" style={{ 
                      color: 'inherit', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}>
                      Emily Rodriguez
                    </Link>
                  </h4>
                  <span className="designation" style={{
                    color: '#667eea',
                    fontSize: '14px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'block',
                    textAlign: 'center',
                    marginBottom: '15px'
                  }}>
                    Compliance Officer
                  </span>
                  
                  <div className="expertise-tags" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      color: '#4CAF50',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      HIPAA
                    </span>
                    <span style={{
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      Regulations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 col-sm-12 team-block">
            <div className="team-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
              <div className="inner-box" style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                <div className="image-box" style={{ position: 'relative' }}>
                  <figure className="image" style={{ 
                    borderRadius: '25px 25px 0 0',
                    overflow: 'hidden',
                    margin: 0
                  }}>
                    <Link href="team-details">
                      <img src="assets/images/home4/team4.jpg" alt="" style={{ 
                        width: '100%', 
                        height: '280px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }} />
                    </Link>
                  </figure>
                  <div className="overlay-box" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(102, 126, 234, 0.9)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '25px 25px 0 0'
                  }}>
                    <div className="overlay-inner">
                      <div className="content">
                        <ul className="social-links clearfix" style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          gap: '15px'
                        }}>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fab fa-linkedin-in" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fab fa-twitter" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#" style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '45px',
                              height: '45px',
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '50%',
                              color: 'white',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)'
                            }}>
                              <i className="fas fa-envelope" style={{ fontSize: '18px' }}></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="experience-badge" style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: '#FF9800',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    boxShadow: '0 5px 15px rgba(255, 152, 0, 0.3)'
                  }}>
                    6+ Years
                  </div>
                </div>
                
                <div className="lower-content" style={{ padding: '25px' }}>
                  <h4 style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '8px',
                    textAlign: 'center'
                  }}>
                    <Link href="team-details" style={{ 
                      color: 'inherit', 
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}>
                      David Thompson
                    </Link>
                  </h4>
                  <span className="designation" style={{
                    color: '#667eea',
                    fontSize: '14px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'block',
                    textAlign: 'center',
                    marginBottom: '15px'
                  }}>
                    Revenue Analyst
                  </span>
                  
                  <div className="expertise-tags" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      Analytics
                    </span>
                    <span style={{
                      backgroundColor: 'rgba(156, 39, 176, 0.1)',
                      color: '#9C27B0',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      Reporting
                    </span>
                  </div>
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
        
        .team-block-one .inner-box:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2) !important;
        }
        
        .team-block-one .inner-box:hover .overlay-box {
          opacity: 1 !important;
        }
        
        .team-block-one .inner-box:hover .image img {
          transform: scale(1.1);
        }
        
        .social-links li a:hover {
          background-color: rgba(255,255,255,0.3) !important;
          transform: scale(1.1);
        }
        
        .team-block-one .inner-box {
          position: relative;
          overflow: hidden;
        }
        
        .team-block-one .image-box {
          position: relative;
        }
        
        .team-block-one .overlay-box {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        @media (max-width: 991px) {
          .team-block {
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
          
          .team-block {
            margin-bottom: 25px;
          }
        }
      `}</style>
    </section>
  );
};
