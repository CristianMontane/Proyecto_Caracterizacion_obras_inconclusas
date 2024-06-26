import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Noticias  Relacionadas</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <a href={d.link}><img src={d.img} alt="" />{" "}</a>
                    </div>
                    <div className="testimonial-content">
                      <a href={d.link}><p>"{d.text}"</p></a>
                      <a href={d.link}><div className="testimonial-meta"> - {d.name} </div></a>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
