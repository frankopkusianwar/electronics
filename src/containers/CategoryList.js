import React from 'react';

const CategoryList = () => {
  return(
    <div className="mx-5">
      <div className="row mt-3">
        <div className="col-3">
          <div className="top-aside">
            <h5 className="p-2">Categories</h5>
            <p className="px-2">Computers</p>
            <div className="top-aside-text mx-4 pb-2">
              <p>Laptops | 1234</p>
              <p>Desktops | 3456</p>
              <p>Macbooks | 300</p>
              <p>Convertible | 100</p>
            </div>
          </div>
          <div className="middle-aside p-2 mt-4">
            <p>Location</p>
            <small>All Uganda</small>
          </div>
          <div className="bottom-aside p-2 mt-4">
            <p>Price</p>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input type="text" class="form-control" id="inputCity" placeholder="min" />
                </div>
                <div class="form-group col-md-6">
                  <input type="text" class="form-control" id="inputCity" placeholder="max" />
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="radio1" />
                  <label class="form-check-label" for="gridCheck">
                    Under 60 K
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="radio1" />
                  <label class="form-check-label" for="gridCheck">
                    60 - 280.90 K
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="radio1" />
                  <label class="form-check-label" for="gridCheck">
                    280.90 K - 1 M
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="radio1" />
                  <label class="form-check-label" for="gridCheck">
                    1 - 20.50 M
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="radio1" />
                  <label class="form-check-label" for="gridCheck">
                    More than 20.5
                  </label>
                </div>
              </div>
              <div className="d-flex  justify-content-between bottom-aside-btn">
                <p>clear</p>
                <p>save</p>
              </div>
            </form>
          </div>
        </div>
        <div className="col-9 category-content">
          <div className="row category-item">
            <div className="col-3">
              <img src="" alt="category-item" />
            </div>
            <div className="col-9 p-2">
              <div className="d-flex justify-content-between category-item-title">
                <h5>HP ProBook 635 Aero G7</h5>
                <h4>Ush 1,800,000</h4>
              </div>
              <p>
                In perfect working condition with wide screen and long life battery, no technical faults, 
                properly...  
              </p>
              <div className="category-item-tags d-flex">
                <p className="px-2 py-1">tag1 text</p>
                <p className="px-2 py-1 mx-4">tag2 text</p>
                <p className="px-2 py-1">tag3 text</p>
              </div>
              <div className="category-location-text">
                <small>location here</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList
