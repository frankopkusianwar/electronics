import React from 'react';
import Categoryasidetop from './Categoryasidetop'
import Categoryasidemiddle from './Categoryasidemiddle'
import Categoryasidebottom from './Categoryasidebottom'

const Categoryaside = () => {
  return (
    <div className="col-3">
      <Categoryasidetop />
      <Categoryasidemiddle />
      <Categoryasidebottom />
    </div>
  );
}

export default Categoryaside;
