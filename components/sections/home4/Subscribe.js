'use client'
import React from 'react';

export default function Subscribe() {
  return (
    <section className="subscribe-section pt_120 pb_120" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Elements */}
      <div className="bg-elements" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
        <div className="circle-1" style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '100px',
          height: '100px',
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          animation: 'pulse 5s ease-in-out infinite'
        }}></div>
        <div className="circle-2" style={{
          position: 'absolute',
          top: '70%',
          right: '20%',
          width: '80px',
          height: '80px',
          backgroundColor: 'rgba(255,255,255,0.06)',
          borderRadius: '50%',
          animation: 'pulse 6s ease-in-out infinite 2s'
        }}></div>
      </div>

      <div className="auto-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="inner-container">
          <div className="row clearfix" style={{ alignItems: 'center' }}>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box" style={{
                paddingRight: '50px'
              }}>
                <div className="sec-title">
                  <span className="sub-title" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '16px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '15px',
                    display: 'block'
                  }}>
                    Stay Connected
                  </span>
                  <h2 style={{
                    color: 'white',
                    fontSize: '36px',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    marginBottom: '20px',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                  }}>
                    Subscribe to Our <br />
                    <span style={{ color: '#FFD700' }}>Newsletter</span>
                  </h2>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    margin: 0,
                    textShadow: '0 1px 5px rgba(0, 0, 0, 0.1)'
                  }}>
                    Stay updated with the latest medical billing trends, industry insights, and exclusive offers delivered directly to your inbox.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <div className="subscribe-form-container" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '25px',
                  padding: '40px',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                }}>
                  <form action="#" method="post" className="subscribe-form">
                    <div className="form-group" style={{ marginBottom: '0' }}>
                      <div style={{
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'center'
                      }}>
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Enter your email address" 
                          required 
                          style={{
                            flex: 1,
                            padding: '18px 22px',
                            border: '2px solid #e0e0e0',
                            borderRadius: '15px',
                            fontSize: '15px',
                            transition: 'all 0.3s ease',
                            boxSizing: 'border-box',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            minWidth: '0'
                          }}
                        />
                        <button 
                          type="submit" 
                          className="theme-btn btn-one"
                          style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            border: 'none',
                            padding: '18px 30px',
                            borderRadius: '15px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.3s ease',
                            textTransform: 'uppercase',
                            letterSpacing: '0.8px',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                          }}
                        >
                          <span>Subscribe</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  
                  <div className="form-note" style={{
                    marginTop: '20px',
                    textAlign: 'center'
                  }}>
                    <p style={{
                      color: '#5a6c7d',
                      fontSize: '14px',
                      margin: 0,
                      fontStyle: 'italic'
                    }}>
                      🔒 We respect your privacy. Unsubscribe at any time.
                    </p>
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
        
        .theme-btn.btn-one:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
        }
        
        .theme-btn.btn-one:active {
          transform: translateY(-1px);
        }
        
        input:focus {
          border-color: #667eea !important;
          outline: none;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
          background-color: white !important;
        }
        
        .subscribe-form-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
        }
        
        .subscribe-form-container {
          transition: all 0.3s ease;
        }
        
        @media (max-width: 991px) {
          .content-box {
            text-align: center;
            padding-right: 0 !important;
            margin-bottom: 30px;
          }
          
          h2 {
            font-size: 30px !important;
          }
          
          .subscribe-form-container {
            padding: 30px !important;
          }
        }
        
        @media (max-width: 768px) {
          h2 {
            font-size: 26px !important;
          }
          
          .subscribe-form-container {
            padding: 25px !important;
          }
          
          .form-group > div {
            flex-direction: column;
            gap: 15px;
          }
          
          .theme-btn.btn-one {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
