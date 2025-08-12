'use client'
import React from 'react';

export default function Features() {
  return (
    <section className="features-section sec-pad" style={{ 
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
          width: '120px',
          height: '120px',
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
        <div className="row clearfix" style={{ alignItems: 'center' }}>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_two">
              <div className="content-box" style={{ paddingRight: '40px' }}>
                <div className="sec-title mb_30">
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
                    Why Choose Us
                  </span>
                  <h2 style={{
                    color: '#2c3e50',
                    fontSize: '42px',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    marginBottom: '25px'
                  }}>
                    Advanced Features for <br />
                    <span style={{ color: '#667eea' }}>Medical Billing Excellence</span>
                  </h2>
                </div>
                <div className="text-box mb_40">
                  <p style={{
                    fontSize: '17px',
                    lineHeight: '1.7',
                    color: '#5a6c7d',
                    marginBottom: '30px'
                  }}>
                    Our platform provides cutting-edge features designed specifically for medical billing professionals, ensuring accuracy, efficiency, and compliance.
                  </p>
                </div>
                <div className="feature-list">
                  <div className="feature-item" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '30px',
                    padding: '25px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.8)'
                  }}>
                    <div className="icon-box" style={{
                      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      width: '60px',
                      height: '60px',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '25px',
                      flexShrink: 0,
                      fontSize: '24px',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                    }}>
                      📊
                    </div>
                    <div className="text">
                      <h4 style={{
                        color: '#2c3e50',
                        fontSize: '20px',
                        fontWeight: '600',
                        marginBottom: '12px'
                      }}>
                        Real-time Analytics
                      </h4>
                      <p style={{
                        color: '#5a6c7d',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Comprehensive reporting and analytics to track your billing performance and revenue trends with real-time insights.
                      </p>
                    </div>
                  </div>
                  
                  <div className="feature-item" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '30px',
                    padding: '25px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.8)'
                  }}>
                    <div className="icon-box" style={{
                      background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                      color: 'white',
                      width: '60px',
                      height: '60px',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '25px',
                      flexShrink: 0,
                      fontSize: '24px',
                      boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)'
                    }}>
                      ⚡
                    </div>
                    <div className="text">
                      <h4 style={{
                        color: '#2c3e50',
                        fontSize: '20px',
                        fontWeight: '600',
                        marginBottom: '12px'
                      }}>
                        Automated Processing
                      </h4>
                      <p style={{
                        color: '#5a6c7d',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Streamlined workflows and automated processes to reduce manual errors and increase efficiency dramatically.
                      </p>
                    </div>
                  </div>
                  
                  <div className="feature-item" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '30px',
                    padding: '25px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.8)'
                  }}>
                    <div className="icon-box" style={{
                      background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
                      color: 'white',
                      width: '60px',
                      height: '60px',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '25px',
                      flexShrink: 0,
                      fontSize: '24px',
                      boxShadow: '0 8px 25px rgba(255, 152, 0, 0.3)'
                    }}>
                      🏥
                    </div>
                    <div className="text">
                      <h4 style={{
                        color: '#2c3e50',
                        fontSize: '20px',
                        fontWeight: '600',
                        marginBottom: '12px'
                      }}>
                        Multi-payer Support
                      </h4>
                      <p style={{
                        color: '#5a6c7d',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        Support for all major insurance carriers and government programs with specialized handling and expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_two">
              <div className="image-box" style={{ position: 'relative' }}>
                <div className="image-container" style={{
                  position: 'relative',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
                }}>
                  <figure className="image">
                    <img src="assets/images/resource/features-1.png" alt="" style={{ 
                      width: '100%', 
                      height: 'auto',
                      borderRadius: '25px'
                    }} />
                  </figure>
                  
                  {/* Floating Stats Card */}
                  <div className="stats-card" style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '20px',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    minWidth: '150px'
                  }}>
                    <div className="stat-item" style={{ textAlign: 'center' }}>
                      <div className="stat-number" style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#667eea',
                        marginBottom: '5px'
                      }}>
                        99.9%
                      </div>
                      <div className="stat-label" style={{
                        fontSize: '14px',
                        color: '#5a6c7d',
                        fontWeight: '500'
                      }}>
                        Accuracy Rate
                      </div>
                    </div>
                  </div>
                  
                  {/* Success Badge */}
                  <div className="success-badge" style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: '600',
                    boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>✅</span>
                    HIPAA Compliant
                  </div>
                </div>
                
                {/* Decorative Shapes */}
                <div className="shape float-bob-y" style={{ 
                  backgroundImage: 'url(assets/images/shape/shape-7.png)',
                  opacity: 0.8,
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  zIndex: -1,
                  animation: 'float 6s ease-in-out infinite'
                }}></div>
                
                <div className="shape-2" style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  borderRadius: '50%',
                  zIndex: -1,
                  animation: 'pulse 4s ease-in-out infinite 2s'
                }}></div>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .feature-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
        }
        
        .feature-item {
          position: relative;
          overflow: hidden;
        }
        
        .feature-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }
        
        .feature-item:hover::before {
          left: 100%;
        }
        
        .icon-box {
          transition: all 0.3s ease;
        }
        
        .feature-item:hover .icon-box {
          transform: scale(1.1) rotate(5deg);
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
          
          .stats-card, .success-badge {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            bottom: auto !important;
            left: auto !important;
            margin: 20px auto;
            display: inline-block;
          }
        }
        
        @media (max-width: 768px) {
          h2 {
            font-size: 28px !important;
          }
          
          .feature-item {
            flex-direction: column;
            text-align: center;
          }
          
          .icon-box {
            margin-right: 0 !important;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};
