import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={463}
    height={739}
    viewBox="0 0 463 739"
    backgroundColor="#3b434e"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="68" y="145" rx="0" ry="0" width="35" height="1" />
    <rect x="213" y="326" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="0" rx="0" ry="0" width="463" height="386" />
    <rect x="0" y="420" rx="0" ry="0" width="463" height="27" />
    <rect x="0" y="472" rx="0" ry="0" width="463" height="78" />
    <rect x="0" y="583" rx="0" ry="0" width="463" height="96" />
    <rect x="0" y="703" rx="0" ry="0" width="108" height="29" />
  </ContentLoader>
);

export default Skeleton;
