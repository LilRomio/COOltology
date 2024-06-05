import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Values.scss';

const Values = () => {
  return (
    <>
      <div className="about__title app__flex">
        <h1 className="head-text">More on Cooltology</h1>
        <br />

        <h2 className="head-text">The science behind your brand’s becoming a cool cult VOICe. </h2>
        <p className="p-text">
          At Cooltology, we believe that every brand has the potential to become a "cool cult VOICe." Our approach combines the science of branding
          with the search and research for cultural relevance, all meant to transform your brand into one that is here to stay and especially, give
          back.
        </p>
        <p className="p-text">
          We start by understanding your brand’s vision and core truth while crafting a strategic plan that aligns with your goals. We search for the
          aha moments. When the time comes to tell your brand’s story, we blend it with powerful cultural insights in tune with your audience.
          Finally, a COOLT brand isn't just heard; it gives a sense of belonging, building up resonance.
        </p>
        <h2 className="head-text">No man is an island stands for the relationship you want for the brand you built.</h2>
      </div>
    </>
  );
};

export default AppWrap(Values, 'more on COOltology');
