import React from 'react';

const Impact = () => {
  return (
    <React.Fragment>
      <div className="container">
        <section id="block_content" style={{ position: 'relative' }}>
          <div className="container text-center">
            <blockquote className="blockstyle">
              <span className="triangle"></span>Dang suy nghi caption cho trang nay hehehe
            </blockquote>
          </div>
          <div className="image-container">
            <img
              src="https://www.tier1.com/wp-content/uploads/2023/01/refurb_1920.jpg"
              className="img-fluid rounded-start"
              alt="Refurbished Business"
              style={{ width: '75%', maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Impact;
