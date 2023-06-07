import React from 'react'

const SlideShow = () => {
  return (
    <React.Fragment >
      <header>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ backgroundImage: "url('https://source.unsplash.com/RCAhiGJsUUE/1920x1080')" }}>
              <div className="carousel-caption">
                <h5>Refurbish and Reuse</h5>
                <p>Extend the life of electronic devices through refurbishment and contribute to a sustainable future.</p>
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundImage: "url('https://source.unsplash.com/wfh8dDlNFOk/1920x1080')" }}>
              <div className="carousel-caption">
                <h5>Responsible E-Waste Recycling</h5>
                <p>Preserve the environment by establishing specific recycling programs for electronic waste.</p>
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundImage: "url('https://source.unsplash.com/lHGeqh3XhRY/1920x1080')" }}>
              <div className="carousel-caption">
                <h5>Environmental Impact Assessment</h5>
                <p>Measuring the positive environmental outcomes of refurbishing and recycling electronic devices.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>

    </React.Fragment>
  )
}

export default SlideShow