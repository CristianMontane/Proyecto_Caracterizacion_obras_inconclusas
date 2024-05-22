import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Informacion del Contrato</h2>
          <p>
            La obra se encuentra en el municipio de Soacha, el predio cuenta con un area de 74.863 m2 De estos, se intervendrán cerca de 1.500 m2.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" >
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p style={{fontWeight:"inherit",fontSize:"15px"}}>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
