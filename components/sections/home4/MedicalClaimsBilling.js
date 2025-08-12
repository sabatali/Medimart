'use client'
import React from 'react';

export default function MedicalClaimsBilling() {
  return (
    <section className="medical-claims-section pt_120 pb_120 p_relative" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      {/* Background Pattern Overlay */}
      <div className="pattern-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        zIndex: 1
      }}></div>
      
      {/* Floating Elements */}
      <div className="floating-elements" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
        <div className="float-1" style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '60px',
          height: '60px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div className="float-2" style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '40px',
          height: '40px',
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        <div className="float-3" style={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          width: '80px',
          height: '80px',
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
      </div>

      <div className="auto-container" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="row align-items-center" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
          {/* Left Column - Content */}
          <div className="col-lg-7 col-md-12 col-sm-12 content-column">
            <div className="content_block_medical_claims">
              <div className="content-box" style={{ color: 'white', paddingRight: '40px' }}>
                <div className="sec-title mb_30">
                  <div className="badge" style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '25px',
                    display: 'inline-block',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>
                    Medical Claims Billing Service
                  </div>
                  <h2 style={{ 
                    color: 'white', 
                    fontSize: '48px', 
                    fontWeight: '700',
                    lineHeight: '1.1',
                    marginBottom: '20px',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    The billing firm that does <span style={{ color: '#FFD700' }}>medical claims processing</span>
                  </h2>
                </div>
                
                <div className="text-box mb_40">
                  <p style={{ 
                    color: 'rgba(255,255,255,0.9)', 
                    fontSize: '18px',
                    lineHeight: '1.7',
                    marginBottom: '25px',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                  }}>
                    Our comprehensive medical claims billing service ensures accurate and timely processing 
                    of all your healthcare claims. We specialize in navigating complex billing requirements 
                    and maximizing your revenue through efficient claims management.
                  </p>
                  <p style={{ 
                    color: 'rgba(255,255,255,0.9)', 
                    fontSize: '18px',
                    lineHeight: '1.7',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                  }}>
                    With years of experience in the healthcare industry, our team of certified billing 
                    specialists handles everything from claim submission to payment processing, ensuring 
                    compliance with all regulatory requirements.
                  </p>
                </div>
                
                <div className="features-list">
                  <div className="feature-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px',
                    marginBottom: '30px'
                  }}>
                    <div className="feature-item" style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      padding: '20px',
                      borderRadius: '15px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease'
                    }}>
                      <div className="icon-box" style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#FFD700',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '15px',
                        fontSize: '20px',
                        color: '#333'
                      }}>
                        🔒
                      </div>
                      <h4 style={{
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        SECURE CLAIM DATA TRANSMISSION
                      </h4>
                    </div>
                    
                    <div className="feature-item" style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      padding: '20px',
                      borderRadius: '15px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease'
                    }}>
                      <div className="icon-box" style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#4CAF50',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '15px',
                        fontSize: '20px',
                        color: 'white'
                      }}>
                        💰
                      </div>
                      <h4 style={{
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        INCREASE REVENUE
                      </h4>
                    </div>
                    
                    <div className="feature-item" style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      padding: '20px',
                      borderRadius: '15px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease'
                    }}>
                      <div className="icon-box" style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#2196F3',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '15px',
                        fontSize: '20px',
                        color: 'white'
                      }}>
                        ⚡
                      </div>
                      <h4 style={{
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        FAST CLAIM PROCESSING
                      </h4>
                    </div>
                    
                    <div className="feature-item" style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      padding: '20px',
                      borderRadius: '15px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease'
                    }}>
                      <div className="icon-box" style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#9C27B0',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '15px',
                        fontSize: '20px',
                        color: 'white'
                      }}>
                        ✅
                      </div>
                      <h4 style={{
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        COMPLIANCE ASSURANCE
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Consultation Form */}
          <div className="col-lg-5 col-md-12 col-sm-12 form-column">
            <div className="consultation-form-card" style={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
              height: 'fit-content',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}>
              <div className="form-inner">
                <div className="form-title text-center mb_30">
                  <div className="form-icon" style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '32px',
                    color: 'white'
                  }}>
                    📋
                  </div>
                  <h3 style={{
                    color: '#333',
                    fontSize: '26px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1.2px',
                    margin: 0
                  }}>
                    GET FREE CONSULTATION
                  </h3>
                </div>
                
                <form action="#" method="post" className="default-form">
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name" 
                      required 
                      style={{
                        width: '100%',
                        padding: '16px 22px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '12px',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(255,255,255,0.9)'
                      }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      required 
                      style={{
                        width: '100%',
                        padding: '16px 22px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '12px',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(255,255,255,0.9)'
                      }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone" 
                      required 
                      style={{
                        width: '100%',
                        padding: '16px 22px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '12px',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(255,255,255,0.9)'
                      }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <input 
                      type="text" 
                      name="help" 
                      placeholder="How Can We Help?" 
                      required 
                      style={{
                        width: '100%',
                        padding: '16px 22px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '12px',
                        fontSize: '15px',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(255,255,255,0.9)'
                      }}
                    />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <textarea 
                      name="message" 
                      placeholder="Message" 
                      rows="4"
                      style={{
                        width: '100%',
                        padding: '16px 22px',
                        border: '2px solid #e0e0e0',
                        borderRadius: '12px',
                        fontSize: '15px',
                        resize: 'vertical',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                        backgroundColor: 'rgba(255,255,255,0.9)'
                      }}
                    ></textarea>
                  </div>
                  
                  <div className="form-group checkbox-group mb_25">
                    <label style={{ 
                      fontSize: '13px', 
                      color: '#555',
                      display: 'flex',
                      alignItems: 'flex-start',
                      lineHeight: '1.5'
                    }}>
                      <input 
                        type="checkbox" 
                        name="terms" 
                        required 
                        style={{ 
                          marginRight: '10px',
                          marginTop: '3px',
                          flexShrink: 0
                        }}
                      />
                      By signing up, you agree to RBS Innovators LLC's Terms of Service and Privacy Policy. 
                      You may reply STOP to opt-out.
                    </label>
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
                        borderRadius: '12px',
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
                      <span>Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .feature-item:hover {
          transform: translateY(-5px);
          background-color: rgba(255,255,255,0.2) !important;
          border-color: rgba(255,255,255,0.4) !important;
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
        
        @media (max-width: 991px) {
          .content-box {
            padding-right: 0 !important;
            margin-bottom: 40px;
            text-align: center;
          }
          
          h2 {
            font-size: 36px !important;
          }
          
          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          h2 {
            font-size: 28px !important;
          }
          
          .consultation-form-card {
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  );
};
