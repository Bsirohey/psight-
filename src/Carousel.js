import React from "react";

export default function Carousel() {
  return (
    <div class="container">
      <div class="tabs section">
        <div class="tab-v2 component">
          <ul class="nav nav-tabs">
            <li class="tab-item">
              <a
                class="tab-link active"
                aria-current="page"
                href="#"
                data-toggle="tab"
              >
                New this Month
              </a>
            </li>
            <li class="tab-item">
              <a class="tab-link" href="#" data-toggle="tab">
                Trending
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="carouselExampleControls"
        class="carousel slide my-3"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card-collection">
              <div class="card caro-card">
                <img
                  src="https://pluralsight.imgix.net/course-images/launching-managing-community-experience-v1.png?h=180&w=320"
                  alt=""
                  class="cardImage"
                />
                <div class="textCard px-2 py-2">
                  <div class="textCardHeading" style={{ color: "white" }}>
                    <h5>
                      Launching and managing a Salesforce Experience Cloud site
                    </h5>
                  </div>
                  <div class="textCardDesc">by jarrod kingston</div>
                  <div class="details">
                    <div class="cardDetails">1h 19m</div>
                    <div class="skillLevel">Intermediate</div>
                  </div>
                </div>
              </div>
              <div class="card caro-card">
                <img
                  src="https://pluralsight.imgix.net/course-images/launching-managing-community-experience-v1.png?h=180&w=320"
                  alt=""
                  class="cardImage"
                />
                <div class="textCard px-2 py-2">
                  <div class="textCardHeading">
                    <h5>
                      Launching and managing a Salesforce Experience Cloud site
                    </h5>
                  </div>
                  <div class="textCardDesc">by jarrod kingston</div>
                  <div class="details">
                    <div class="cardDetails">1h 19m</div>
                    <div class="skillLevel">Intermediate</div>
                  </div>
                </div>
              </div>
              <div class="card caro-card">
                <img
                  src="https://pluralsight.imgix.net/course-images/launching-managing-community-experience-v1.png?h=180&w=320"
                  alt=""
                  class="cardImage"
                />
                <div class="textCard px-2 py-2">
                  <div class="textCardHeading" style={{ color: "white" }}>
                    <h5>
                      Launching and managing a Salesforce Experience Cloud site
                    </h5>
                  </div>
                  <div class="textCardDesc">by jarrod kingston</div>
                  <div class="details">
                    <div class="cardDetails">1h 19m</div>
                    <div class="skillLevel">Intermediate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="card-collection">
              <div class="card caro-card">
                <img
                  src="https://pluralsight.imgix.net/course-images/auto-scaling-aws-resources-v1.jpg?h=180&w=320"
                  alt=""
                  class="cardImage"
                />
                <div class="textCard px-2 py-2">
                  <div class="textCardHeading" style={{ color: "white" }}>
                    <h5>Auto Scaling AWS Resources</h5>
                  </div>
                  <div class="textCardDesc">by Peter Van Weerd</div>
                  <div class="details">
                    <div class="cardDetails">1h 17m</div>
                    <div class="skillLevel">Intermediate</div>
                  </div>
                </div>
              </div>

              <div class="card caro-card">
                <img
                  src="https://pluralsight.imgix.net/course-images/auto-scaling-aws-resources-v1.jpg?h=180&w=320"
                  alt=""
                  class="cardImage"
                />
                <div class="textCard px-2 py-2">
                  <div class="textCardHeading" style={{ color: "white" }}>
                    <h5>Auto Scaling AWS Resources</h5>
                  </div>
                  <div class="textCardDesc">by Peter Van Weerd</div>
                  <div class="details">
                    <div class="cardDetails">1h 17m</div>
                    <div class="skillLevel">Intermediate</div>
                  </div>
                </div>
              </div>

              <div class="card caro-card">
                <img
                  src="https://pluralsight.imgix.net/course-images/auto-scaling-aws-resources-v1.jpg?h=180&w=320"
                  alt=""
                  class="cardImage"
                />
                <div class="textCard px-2 py-2">
                  <div class="textCardHeading" style={{ color: "white" }}>
                    <h5>Auto Scaling AWS Resources</h5>
                  </div>
                  <div class="textCardDesc">by Peter Van Weerd</div>
                  <div class="details">
                    <div class="cardDetails">1h 17m</div>
                    <div class="skillLevel">Intermediate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="card-collection">
              <div class="card caro-card">
                <img
                  src="https://pluralsight.imgix.net/course-images/getting-started-elm-v1.jpg?h=180&w=320"
                  alt=""
                  class="cardImage"
                />
                <div class="textCard px-2 py-2">
                  <div class="textCardHeading" style={{ color: "white" }}>
                    <h5>ELM: Getting Started</h5>
                  </div>
                  <div class="textCardDesc">by Mike Van Sickle</div>
                  <div class="details">
                    <div class="cardDetails">2h 52m</div>
                    <div class="skillLevel">Intermediate</div>
                  </div>
                </div>
              </div>

              <div class="card caro-card">
                <img
                  src="https://pluralsight.imgix.net/course-images/getting-started-elm-v1.jpg?h=180&w=320"
                  alt=""
                  class="cardImage"
                />
                <div class="textCard px-2 py-2">
                  <div class="textCardHeading">
                    <h5>ELM: Getting Started</h5>
                  </div>
                  <div class="textCardDesc">by Mike Van Sickle</div>
                  <div class="details">
                    <div class="cardDetails">2h 52m</div>
                    <div class="skillLevel">Intermediate</div>
                  </div>
                </div>
              </div>

              <div class="card caro-card">
                <img
                  src="https://pluralsight.imgix.net/course-images/getting-started-elm-v1.jpg?h=180&w=320"
                  alt=""
                  class="cardImage"
                />
                <div class="textCard px-2 py-2">
                  <div class="textCardHeading" style={{ color: "white" }}>
                    <h5>ELM: Getting Started</h5>
                  </div>
                  <div class="textCardDesc">by Mike Van Sickle</div>
                  <div class="details">
                    <div class="cardDetails">2h 52m</div>
                    <div class="skillLevel">Intermediate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <h3 class="font-weight-bold text-white mt-4">Browse</h3>
      <div class="d-flex flex-row">
        <div
          class="card rounded-0 px-2 py-2 flex-grow-1"
          style={{ backgroundColor: "#222222" }}
        >
          <div class="input-group">
            <input
              type="text"
              class="form-control rounded-0 border-0 font-weight-bold"
              placeholder="What do you want to learn?"
              style={{ backgroundColor: "#222222" }}
            />

            <div class="input-group-prepend">
              <button class="btn search-btn rounded-0 mr-2 font-weight-bold">
                <i class="bi bi-x-lg my-auto text-white"></i>
              </button>
              <div style={{ border: "1px solid #4f4f4f" }}></div>

              <button class="btn search-btn rounded-0 ml-2 font-weight-bold">
                <i class="bi bi-search my-auto text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="dropdown ml-2">
          <button
            class="btn btn-outline-light dropdown-toggle"
            style={{ height: "100%" }}
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort by
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
