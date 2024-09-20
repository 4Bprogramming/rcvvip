"use client";
import React from "react";
import logo from "../../../public/resources/we.png";
import "./lib/font-awesome/css/font-awesome.min.css";
import "./lib/animate/animate.min.css";
import "./lib/ionicons/css/ionicons.min.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "./lib/bootstrap/css/bootstrap.min.css";
import "./css/style.css";

function Sedes() {
  return (
    <>
      <h1 class="title-single">PROYECTOS</h1>
      <section class="property-grid grid">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="grid-option"></div>
            </div>

            <div class="col-md-4">
              <div class="card-box-a card-shadow">
                <div class="img-box-a">
                  <img src={logo} alt="" class="img-a img-fluid" />
                </div>
                <div class="card-overlay">
                  <div class="card-overlay-a-content">
                    <div class="card-header-a">
                      <h2 class="card-title-a">
                        <a href="#">Arelauquen Lodge</a>
                      </h2>
                    </div>
                    <div class="card-body-a">
                      <a href="property-single.html" class="link-a">
                        ver
                        <span class="ion-ios-arrow-forward"></span>
                      </a>
                    </div>
                    <div class="card-footer-a">
                      <ul class="card-info d-flex justify-content-around">
                        <li>
                          <h4 class="card-info-title">Area</h4>
                          <span>
                            1400m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Año</h4>
                          <span>2001</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Ubicación</h4>
                          <span>Arelauquen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card-box-a card-shadow">
                <div class="img-box-a">
                  <img src={logo} alt="" class="img-a img-fluid" />
                </div>
                <div class="card-overlay">
                  <div class="card-overlay-a-content">
                    <div class="card-header-a">
                      <h2 class="card-title-a">
                        <a href="#">Vivienda unifamiliar</a>
                      </h2>
                    </div>
                    <div class="card-body-a">
                      <a href="property-single.html" class="link-a">
                        Ver
                        <span class="ion-ios-arrow-forward"></span>
                      </a>
                    </div>
                    <div class="card-footer-a">
                      <ul class="card-info d-flex justify-content-around">
                        <li>
                          <h4 class="card-info-title">Area</h4>
                          <span>
                            345m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Año</h4>
                          <span>2003</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Ubicación</h4>
                          <span>Arelauquen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sedes;
