import React from 'react';

import Style from './gridContainer.module.scss';
import { GridProps } from './gridContainer.types';

const GridContainer: React.FC<GridProps> = ({ children }) => {
  return <div className={Style.mtbGridContainer}>{children}</div>;
};

export default GridContainer;
