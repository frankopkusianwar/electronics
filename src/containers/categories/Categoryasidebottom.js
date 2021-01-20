import React from 'react';


const Categoryasidebottom = () => {
  return(
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
  );
}

export default Categoryasidebottom
