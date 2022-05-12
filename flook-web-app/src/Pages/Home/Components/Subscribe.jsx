import React from 'react'

export default function Subscribe() {
  return (
    <section className="subscribe-cta">
      <div className="container">
        <div className="row align-center-y">
          {/* Section Title */}
          <div className="col-12 col-m-6 col-l-3">
            <h2>Subscribe</h2>
            <p><strong>To Your Fevorit Anime </strong> To Get The Newest Epioseds</p>
          </div>
          {/* Step 01 */}
          <div className="ti-user cta-column col-12 col-m-6 col-l-3">
            <span className="step">01 <i>step</i></span>
            <h3>Signup <span>Create an Account</span></h3>
          </div>
          {/* Step 02 */}
          <div className="ti-view-module cta-column col-12 col-m-6 col-l-3">
            <span className="step">02 <i>step</i></span>
            <h3>Chose <span>Chose Your Anime</span></h3>
          </div>
          {/* Step 03 */}
          <div className="ti-notifications cta-column col-12 col-m-6 col-l-3">
            <span className="step">03 <i>step</i></span>
            <h3>Subscribe <span>Click to Subscribe</span></h3>
          </div>
        </div>
      </div>
    </section>
  )
}
