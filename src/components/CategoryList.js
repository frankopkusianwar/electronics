import React from 'react';
import CategoryNav from './nav/CategoryNav'
import Categoryaside from '../containers/categories/Categoryaside'
import Categorycontent from '../containers/categories/Categorycontent'

const CategoryList = () => {
  return(
    <div>
      <CategoryNav />
      <div className="mx-5">
        <div className="row mt-3">
          <Categoryaside />
          <Categorycontent />
        </div>
      </div>
    </div>
  );
}

export default CategoryList
