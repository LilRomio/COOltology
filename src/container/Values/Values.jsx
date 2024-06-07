import React from 'react';

import { AppWrap } from '../../wrapper';
import './Values.scss';

const Values = () => {
  return (
    <>
      <div className="values__container app__flex">
        <div className="values__title-container">
          <p className=" values__title ">Cooltology is</p>
        </div>
        <div>
          <div className="values__description">
            The blend between culture, stories, tactics, and the coolness of them all. Their ever changing dynamics.
            Superfluous, apparently chaotic but with fascinating coherence.
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(Values, 'Cooltology is');
