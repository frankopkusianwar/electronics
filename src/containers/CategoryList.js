import React from 'react';

const CategoryList = () => {
  return(
    <div className="container">
      <div className="row mt-3">
        <div className="col-4">
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
              <div className="row">
                <div className="col">
                  <input type="text" class="form-control" placeholder="min"/>
                </div>
                <div className="col">
                  <input type="text" class="form-control" placeholder="max"/>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-8">2</div>
      </div>
    </div>
  );
}

export default CategoryList
