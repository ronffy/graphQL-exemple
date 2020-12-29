/**
 * @description 
 * @author ronffy
 * @Date 2020-12-29 19:34:32
 * @LastEditTime 2020-12-29 19:34:39
 * @LastEditors ronffy
 */
import React from 'react';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    // eslint-disable-next-line
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
