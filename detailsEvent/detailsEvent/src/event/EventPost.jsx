import React from "react";
import img from "./img_1.jpg";
import img1 from "./event2.jpg";
import img2 from "./event3.jpg";
import img3 from "./eventImg.jpg";
import "./eventPost.css";
import Pagination from "./Pagination";

function EventPost() {
  return (
    <div
      style={{ marginTop: "100vh", marginLeft: 20, marginRight: 20 }}
      className=" row"
    >
      <div className="col-4">
        <div class="card">
          <div class="card-body">
            <p class="cardtext" style={{ margin: 10, fontSize: 25,color:"black" }}>
              Search
            </p>
            <hr />
            <div class="input-group input-group-sm mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
              <span class="input-group-text" id="inputGroup-sizing-sm" style={{backgroundColor:"orange"}}>
                <i class="fa fa-search" aria-hidden="false"></i>
              </span>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 15 }}>
          <p 
            class="cardtext"
            style={{ marginTop: 30, fontSize: 25, textTransform: "uppercase" }}
          >
            Resent Event
          </p>
          <hr />
        </div>
        <div style={{ marginBottom: 15 }}>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={img1}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ height: 130, width: 130 }}
                />
              </div>
              <div class="col-md-8" style={{ height: 130 }}>
                <div class="card-body">
                  <h5 class="cardtitleL">Card title</h5>
                  <p class="card-textL">
                    This is a wider card with supporting text below as a natural 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 15 }}>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={img2}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ height: 130, width: 130 }}
                />
              </div>
              <div class="col-md-8" style={{ height: 130 }}>
                <div class="card-body">
                  <h5 class="cardtitleL">Card title</h5>
                  <p class="card-textL">
                    This is a wider card with supporting text below as a natural 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 15 }}>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={img3}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ height: 130, width: 130 }}
                />
              </div>
              <div class="col-md-8" style={{ height: 130 }}>
                <div class="card-body">
                  <h5 class="cardtitleL">Card title</h5>
                  <p class="card-textL">
                    This is a wider card with supporting text below as a natural 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 15 }}>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={img}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ height: 130, width: 130 }}
                />
              </div>
              <div class="col-md-8" style={{ height: 130 }}>
                <div class="card-body">
                  <h5 class="cardtitleL">Card title</h5>
                  <p class="card-textL">
                    This is a wider card with supporting text below as a natural 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 15 }}>
          <p
            class="cardtext"
            style={{ marginTop: 30, fontSize: 26, textTransform: "uppercase" }}
          >
            Archive
          </p>
          <hr />
        </div>
        <div class="cardT">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">An item </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">An item </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
        </div>
        <div style={{ marginBottom: 15 }}>
          <p
            class="cardtext"
            style={{ marginTop: 30, fontSize: 20, textTransform: "uppercase" }}
          >
            tags
          </p>
          <hr />
        </div>
        <div className="cardTg">
          <p>
            Tag 1 <span>Tag 2</span> <span>Tag 2</span>
          </p>
          <p>
            Tag 1 <span>Tag 2</span>
          </p>
          <p>
            Tag 1 <span>Tag 2</span>
          </p>
        </div>
      </div>

      <div className="col-8">
        <div class="row">
          <div class="col-sm-6">
            <div class="card" style={{ marginTop: 12 }}>
              <div class="card-body">
                <img
                  src={img3}
                  className="card-img-top img-hover-effect"
                  alt="..."
                  style={{ height: 315 }}
                />

                <h5 class="cardtitleR">Special title treatment</h5>
                <p class="cardtextD">
                  With supporting text below as a natural lead-in to additional
                  content.text below as a natural lead-in to additional
                </p>
                <div class="d-flex justify-content-between">
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                  <a href="#" class="btn btn-primary">
                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" style={{ marginTop: 12 }}>
              <div class="card-body">
                <img
                  src={img1}
                  className="card-img-top img-hover-effect"
                  alt="..."
                  style={{ height: 315 }}
                />

                <h5 class="cardtitleR">Special title treatment</h5>
                <p class="cardtextD">
                  With supporting text below as a natural lead-in to additional
                  content.text below as a natural lead-in to additional
                </p>
                <div class="d-flex justify-content-between">
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                  <a href="#" class="btn btn-primary">
                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card" style={{ marginTop: 12 }}>
              <div class="card-body">
                <img
                  src={img1}
                  className="card-img-top img-hover-effect"
                  alt="..."
                  style={{ height: 315 }}
                />

                <h5 class="cardtitleR">Special title treatment</h5>
                <p class="cardtextD">
                  With supporting text below as a natural lead-in to additional
                  content.text below as a natural lead-in to additional
                </p>
                <div class="d-flex justify-content-between">
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                  <a href="#" class="btn btn-primary">
                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" style={{ marginTop: 12 }}>
              <div class="card-body">
                <img
                  src={img1}
                  className="card-img-top img-hover-effect"
                  alt="..."
                  style={{ height: 315 }}
                />

                <h5 class="cardtitleR">Special title treatment</h5>
                <p class="cardtextD">
                  With supporting text below as a natural lead-in to additional
                  content.text below as a natural lead-in to additional
                </p>
                <div class="d-flex justify-content-between">
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                  <a href="#" class="btn btn-primary">
                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card" style={{ marginTop: 12 }}>
              <div class="card-body">
                <img
                  src={img2}
                  className="card-img-top img-hover-effect"
                  alt="..."
                  style={{ height: 315 }}
                />

                <h5 class="cardtitleR">Special title treatment</h5>
                <p class="cardtextD">
                  With supporting text below as a natural lead-in to additional
                  content.text below as a natural lead-in to additional
                </p>
                <div class="d-flex justify-content-between">
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                  <a href="#" class="btn btn-primary">
                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" style={{ marginTop: 12 }}>
              <div class="card-body">
                <img
                  src={img3}
                  className="card-img-top img-hover-effect"
                  alt="..."
                  style={{ height: 315 }}
                />

                <h5 class="cardtitleR">Special title treatment</h5>
                <p class="cardtextD">
                  With supporting text below as a natural lead-in to additional
                  content.text below as a natural lead-in to additional
                </p>
                <div class="d-flex justify-content-between">
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                  <a href="#" class="btn btn-primary">
                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination/>
      </div>

    </div>
  );
}

export default EventPost;
