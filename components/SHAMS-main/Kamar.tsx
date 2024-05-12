import React from 'react';
import { motion } from 'framer-motion';

const Kamar = () => {
  return (
    <g>
      <motion.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M437.69 81.899L461.858 140.258L320.977 81.899L420.51 40.6232L437.69 81.899Z'
        fill='#FFCD38'
        initial={{ opacity: 0, x: 145, y: -145 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          duration: 0.7,
          delay: 0.5,
        }}
      />
      <motion.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M179.983 140.258L204.15 81.899L221.331 40.6232L320.978 81.899L179.983 140.258Z'
        fill='#FFCD38'
        initial={{ opacity: 0, x: -145, y: -145 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          duration: 0.7,
          delay: 0.5,
        }}
      />
      <motion.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M162.916 181.649L121.683 281.284L80.4492 181.649L179.982 140.258L162.916 181.649Z'
        fill='#FFCD38'
        initial={{ opacity: 0, x: -195 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          duration: 0.7,
          delay: 0.5,
        }}
      />
      <motion.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M561.391 181.649L520.158 281.284L478.924 181.649L461.858 140.258L561.391 181.649Z'
        fill='#FFCD38'
        initial={{ opacity: 0, x: 195 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          duration: 0.7,
          delay: 0.5,
        }}
      />
      <motion.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M461.858 422.309L478.924 381.033L520.158 281.284L561.391 381.033L461.858 422.309Z'
        fill='#FFCD38'
        initial={{ opacity: 0, x: 195 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          duration: 0.7,
          delay: 0.5,
        }}
      />
      <motion.path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M179.982 422.309L80.4492 381.033L121.683 281.284L162.916 381.033L179.982 422.309Z'
        fill='#FFCD38'
        initial={{ opacity: 0, x: -195 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          duration: 0.7,
          delay: 0.5,
        }}
      />
    </g>
  );
};

export default Kamar;
