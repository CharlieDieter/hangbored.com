import React from "react"

import Image from "./image"

export default () => (
  <section className="hero container">
    <div className="left">
      <h2>Simple and effective training for climbers.</h2>
      <p>
        Sign up now to get early early access and begin your climbing journey.
      </p>

      <div>
        <a href="#form" className="btn">
          Sign up
        </a>
      </div>
    </div>
    <div className="right">
      <Image />
    </div>
  </section>
)
