import React from 'react';

const WindowbarMac = ({ classes, onDoubleClick, onClose, onMinimize, onMaximize }) => {
  return (
    <div className={classes} onDoubleClick={onDoubleClick}>
      <div className="windowbar-controls">
        <div className="windowbar-close" onClick={onClose}>
          <svg x="0px" y="0px" viewBox="0 0 6 6">
            <polygon fill="#860006" points="6,1 6,0 5,0 3,2 1,0 0,0 0,1 2,3 0,5 0,6 1,6 3,4 5,6 6,6 6,5 4,3" />
          </svg>
        </div>
        <div className="windowbar-minimize" onClick={onMinimize}>
          <svg x="0px" y="0px" viewBox="0 0 7 2">
            <rect fill="#9d5615" width={7} height={2} />
          </svg>
        </div>
        <div className="windowbar-maximize" onClick={onMaximize}>
          <svg className="fullscreen-svg" x="0px" y="0px" viewBox="0 0 6 6">
            <path fill="#006413" d="M0,1.4v3.8c0.4,0,0.8,0.3,0.8,0.8h3.8L0,1.4z" />
            <path fill="#006413" d="M6,4.6V0.8C5.6,0.8,5.2,0.4,5.2,0H1.4L6,4.6z" />
          </svg>
          <svg className="exit-fullscreen-svg" x="0px" y="0px" viewBox="0 0 6 6">
            <path fill="#006413" d="M3,0v2.5c0.3,0,0.5,0.2,0.5,0.5H6L3,0z" />
            <path fill="#006413" d="M3,6V3.5C2.7,3.5,2.5,3.3,2.5,3H0L3,6z" />
          </svg>
          <svg className="maximize-svg" x="0px" y="0px" viewBox="0 0 7.9 7.9">
            <polygon fill="#006413" points="7.9,4.5 7.9,3.4 4.5,3.4 4.5,0 3.4,0 3.4,3.4 0,3.4 0,4.5 3.4,4.5 3.4,7.9 4.5,7.9 4.5,4.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WindowbarMac;
