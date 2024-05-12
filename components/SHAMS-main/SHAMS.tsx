import React from 'react';
import { Variants, motion } from 'framer-motion';

const variants: Variants = {
  initial: {
    opacity: 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const charVariants: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const SHAMS = () => {
  return (
    <motion.g variants={variants} initial='initial' animate='animate'>
      <motion.path
        variants={charVariants}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M60.0798 576.364H108.299V584.767L123.421 581.207V579.664C123.421 573.635 122.113 569.457 119.474 567.084C116.859 564.734 112.079 563.547 105.16 563.547H63.3611C56.2042 563.547 51.3774 564.781 48.8571 567.226C46.3607 569.695 45.1004 574.252 45.1004 580.922V589.063C45.1004 595.733 46.3607 600.29 48.8571 602.735C51.3774 605.18 56.2042 606.414 63.3611 606.414H109.298V623.22H57.2267V614.532L42.1045 617.665V619.683C42.1045 626.329 43.3648 630.91 45.9089 633.355C48.4292 635.8 53.3033 637.034 60.5078 637.034H105.993C113.221 637.034 118.071 635.8 120.615 633.355C123.159 630.91 124.42 626.329 124.42 619.683V609.571C124.42 602.878 123.159 598.32 120.615 595.852C118.071 593.407 113.221 592.173 105.993 592.173H60.0798V576.364Z'
        fill='#0078F0'
      />
      <motion.path
        variants={charVariants}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M159.942 563.547V637.034H177.062V605.418H230.56V637.034H247.822V563.547H230.56V592.03H177.062V563.547H159.942Z'
        fill='#0078F0'
      />
      <motion.path
        variants={charVariants}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M271.337 637.034L313.018 563.547H329.543L371.771 637.034H352.535L343.69 620.941H296.992L288.409 637.034H271.337ZM336.581 607.696H304.292L320.674 577.789L336.581 607.696Z'
        fill='#0078F0'
      />

      <motion.path
        variants={charVariants}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M395.31 563.547V637.034H409.148V591.627C409.148 590.464 409.124 589.277 409.052 588.019C408.981 586.761 408.862 585.384 408.72 583.841C409.195 585.004 409.789 586.191 410.503 587.425C411.216 588.66 412.096 589.965 413.118 591.366L440.866 628.204H444.266L471.942 591.485C472.489 590.701 473.107 589.704 473.821 588.47C474.51 587.236 475.318 585.669 476.246 583.77C476.079 585.455 475.913 586.951 475.794 588.304C475.675 589.633 475.628 590.748 475.628 591.627V637.034H491.463V563.547H477.744L443.862 607.981L409.148 563.547H395.31Z'
        fill='#0078F0'
      />
      <motion.path
        variants={charVariants}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M543.083 576.364H591.302V584.767L606.424 581.207V579.664C606.424 573.635 605.117 569.457 602.477 567.084C599.862 564.734 595.083 563.547 588.164 563.547H546.364C539.207 563.547 534.38 564.781 531.86 567.226C529.364 569.695 528.103 574.252 528.103 580.922V589.063C528.103 595.733 529.364 600.29 531.86 602.735C534.38 605.18 539.207 606.414 546.364 606.414H592.301V623.22H540.23V614.532L525.107 617.665V619.683C525.107 626.329 526.368 630.91 528.912 633.355C531.432 635.8 536.306 637.034 543.511 637.034H588.996C596.224 637.034 601.074 635.8 603.619 633.355C606.163 630.91 607.423 626.329 607.423 619.683V609.571C607.423 602.878 606.163 598.32 603.619 595.852C601.074 593.407 596.224 592.173 588.996 592.173H543.083V576.364Z'
        fill='#0078F0'
      />
    </motion.g>
  );
};

export default SHAMS;
