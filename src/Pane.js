import React from 'react'

export default function Pane() {
    return (
        <div className="container">
            <div class="row my-4">
        <div class="col-md-4 col-sm-auto">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed font-weight-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="true"
                  aria-controls="flush-collapseOne">
                  Library
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      />
                    <label class="form-check-label" for="flexRadioDefault1">
                      All
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Core
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Expanded
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed font-weight-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="true"
                  aria-controls="flush-collapseTwo">
                  Subject
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse show"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Aec
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Architecture & construction
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Business professional
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Creative professional
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Data professional
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      IT ops
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Manufacturing & design
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Information & cyber security
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Software developer
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Software development
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Web development
                    </label>
                  </div>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed font-weight-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="true"
                  aria-controls="flush-collapseThree">
                  Skill level
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse show"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Advanced
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Beginner
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                      id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Intermediate
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="card card-entry">
            <div class="card-body">
              <h6 class="card-title font-weight-bold">
                SQL Extensibility Features with Snowflake
              </h6>
              <p class="card-text">by Pinal Dave</p>
              <div class="d-flex flow-row">
                <div class="align-self-start">
                  <button
                    class="btn btn-primary btn-sm font-weight-bold"
                    style={{fontSize: "10px"}}>
                    EXPANDED
                  </button>
                </div>
                <p class="entry-tag mx-3">
                  1h 1m <i class="bi bi-clock small mx-2"></i>
                </p>
                <p class="entry-tag mx-3">
                  Intermediate <i class="bi bi-bar-chart-fill small mx-2"></i>
                </p>
                <div>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <p class="entry-tag">(15)</p>
              </div>
            </div>
          </div>

          <div class="card card-entry">
            <div class="card-body">
              <h6 class="card-title font-weight-bold">
                Implementing Nutanix High Availability and Disaster Recovery
              </h6>
              <p class="card-text">by Jaya Bodkhey</p>
              <div class="d-flex flow-row">
                <div class="align-self-start">
                  <button
                    class="btn btn-primary btn-sm font-weight-bold"
                    style={{fontSize: "10px"}}>
                    EXPANDED
                  </button>
                </div>
                <p class="entry-tag mx-3">
                  51m <i class="bi bi-clock small mx-2"></i>
                </p>
                <p class="entry-tag mx-3">
                  Intermediate <i class="bi bi-bar-chart-fill small mx-2"></i>
                </p>
                <div>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <p class="entry-tag">(16)</p>
              </div>
            </div>
          </div>

          <div class="card card-entry">
            <div class="card-body">
              <h6 class="card-title font-weight-bold">
                Implementing Nutanix High Availability and Disaster Recovery
              </h6>
              <p class="card-text">by Jaya Bodkhey</p>
              <div class="d-flex flow-row">
                <div class="align-self-start">
                  <button
                    class="btn btn-primary btn-sm font-weight-bold"
                    style={{fontSize: "10px"}}>
                    EXPANDED
                  </button>
                </div>
                <p class="entry-tag mx-3">
                  51m <i class="bi bi-clock small mx-2"></i>
                </p>
                <p class="entry-tag mx-3">
                  Intermediate <i class="bi bi-bar-chart-fill small mx-2"></i>
                </p>
                <div>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <p class="entry-tag">(16)</p>
              </div>
            </div>
          </div>

          <div class="card card-entry">
            <div class="card-body">
              <h6 class="card-title font-weight-bold">
                Implementing Nutanix High Availability and Disaster Recovery
              </h6>
              <p class="card-text">by Jaya Bodkhey</p>
              <div class="d-flex flow-row">
                <div class="align-self-start">
                  <button
                    class="btn btn-primary btn-sm font-weight-bold"
                    style={{fontSize: "10px"}}>
                    EXPANDED
                  </button>
                </div>
                <p class="entry-tag mx-3">
                  51m <i class="bi bi-clock small mx-2"></i>
                </p>
                <p class="entry-tag mx-3">
                  Intermediate <i class="bi bi-bar-chart-fill small mx-2"></i>
                </p>
                <div>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <p class="entry-tag">(16)</p>
              </div>
            </div>
          </div>

          <div class="card card-entry">
            <div class="card-body">
              <h6 class="card-title font-weight-bold">
                Implementing Nutanix High Availability and Disaster Recovery
              </h6>
              <p class="card-text">by Jaya Bodkhey</p>
              <div class="d-flex flow-row">
                <div class="align-self-start">
                  <button
                    class="btn btn-primary btn-sm font-weight-bold"
                    style={{fontSize: "10px"}}>
                    EXPANDED
                  </button>
                </div>
                <p class="entry-tag mx-3">
                  51m <i class="bi bi-clock small mx-2"></i>
                </p>
                <p class="entry-tag mx-3">
                  Intermediate <i class="bi bi-bar-chart-fill small mx-2"></i>
                </p>
                <div>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <p class="entry-tag">(16)</p>
              </div>
            </div>
          </div>

          <div class="card card-entry">
            <div class="card-body">
              <h6 class="card-title font-weight-bold">
                Implementing Nutanix High Availability and Disaster Recovery
              </h6>
              <p class="card-text">by Jaya Bodkhey</p>
              <div class="d-flex flow-row">
                <div class="align-self-start">
                  <button
                    class="btn btn-primary btn-sm font-weight-bold"
                    style={{fontSize: "10px"}}>
                    EXPANDED
                  </button>
                </div>
                <p class="entry-tag mx-3">
                  51m <i class="bi bi-clock small mx-2"></i>
                </p>
                <p class="entry-tag mx-3">
                  Intermediate <i class="bi bi-bar-chart-fill small mx-2"></i>
                </p>
                <div>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <p class="entry-tag">(16)</p>
              </div>
            </div>
          </div>
          <div class="my-5">
            <nav aria-label="Page navigation example">
              <ul class="pagination pagination-circle justify-content-center">
                <li class="page-item disabled m-1">
                  <a class="page-link" href="#" tabindex="-1">
                    <span aria-hidden="true">
                      &laquo;
                    </span>
                  </a>
                </li>
                <li class="page-item active m-1"><a class="page-link" href="#">1</a></li>
                <li class="page-item m-1"><a class="page-link" href="#">2</a></li>
                <li class="page-item m-1"><a class="page-link" href="#">3</a></li>
                <li class="page-item m-1"><a class="page-link" href="#">4</a></li>
                <li class="page-item m-1"><a class="page-link" href="#">5</a></li>
                <li class="page-item m-1"><a class="page-link" href="#">6</a></li>
                <li class="page-item m-1">
                  <a class="page-link" href="#">
                    <span aria-hidden="true">
                      &raquo;
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
        </div>
    )
}
