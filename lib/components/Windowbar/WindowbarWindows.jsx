import React from 'react';

const WindowbarWindows = ({ classes, onDoubleClick, onClose, onMinimize, onMaximize }) => {
  return (
    <div className={classes} onDoubleClick={onDoubleClick}>
      <div className="windowbar-controls">
        <div className="windowbar-minimize" onClick={onMinimize}>
          <svg x="0px" y="0px" viewBox="0 0 10 1">
            <rect fill="#000000" width={10} height={1} />
          </svg>
        </div>
        <div className="windowbar-maximize" onClick={onMaximize}>
          <svg className="maximize-svg" x="0px" y="0px" viewBox="0 0 10 10">
            <path fill="#000000" d="M 0 0 L 0 10 L 10 10 L 10 0 L 0 0 z M 1 1 L 9 1 L 9 9 L 1 9 L 1 1 z " />
          </svg>
          <svg className="unmaximize-svg" x="0px" y="0px" viewBox="0 0 10 10">
            <mask id="Mask">
              <rect fill="#ffffff" width={10} height={10} />
              <path fill="#000000" d="M 3 1 L 9 1 L 9 7 L 8 7 L 8 2 L 3 2 L 3 1 z" />
              <path fill="#000000" d="M 1 3 L 7 3 L 7 9 L 1 9 L 1 3 z" />
            </mask>
            <path fill="#000000" d="M 2 0 L 10 0 L 10 8 L 8 8 L 8 10 L 0 10 L 0 2 L 2 2 L 2 0 z" mask="url(#Mask)" />
          </svg>
        </div>
        <div className="windowbar-close" onClick={onClose}>
          <svg x="0px" y="0px" viewBox="0 0 12 12">
            <polygon fill="#000000" points="12,1 11,0 6,5 1,0 0,1 5,6 0,11 1,12 6,7 11,12 12,11 7,6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WindowbarWindows;
