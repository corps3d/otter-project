import React from "react";
import "./Accordian.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPager, faLink } from "@fortawesome/free-solid-svg-icons";
const Accordian = ({ display }) => {
  return (
    <div style={{ display: display }}>
      <div className="top">
        <div>Collapse All</div>
        <div style={{ display: "flex" }}>
          <FontAwesomeIcon icon={faPager} className="accordian-icon" />
          <FontAwesomeIcon icon={faLink} className="accordian-icon" />
        </div>
      </div>
      <div className="accordian-wrapper">
        <div class="accordion" id="accordionExample" style={{ width: "100%" }}>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Here is Your data
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show accordian-data"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">Hello! How are you</div>
              <div class="accordion-body">Hello! Whats going on?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
