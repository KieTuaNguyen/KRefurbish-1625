import React from 'react';

const Impact = () => {
  return (
    <React.Fragment>
      <div className="container">
        <section id="block_content" style={{ position: 'relative' }}>
          <div className="container text-center">
            <blockquote className="blockstyle"> &nbsp;
              "The Impact" page on the KRefurbish project showcases
              the project's focus on addressing the environmental
              challenges posed by the increasing consumption of
              digital devices in today's technological era. The
              page emphasizes the positive effects of the project
              in terms of environmental, economic, and social impact.
              The team collects data related to electronic waste (e-waste)
              generation and uses statistical methods and environmental
              assessment tools to analyze the environmental impact of
              their refurbishing practices. By evaluating resource
              savings, waste reduction, and carbon emission reductions
              that can be achieved through refurbishment, the project
              aims to contribute to a more sustainable future. &nbsp;
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
