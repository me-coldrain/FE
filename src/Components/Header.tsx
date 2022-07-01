import React from 'react';
// style
import styled from 'styled-components';

const Header = () => {
  return <div></div>;
};

const Heading = styled.div`
  height: 790px;
  background-color: white;
  border-radius: 2px;
  width: 1160px;
  margin: 0 auto;

  @media ${(props) => props.theme.tabletM} {
    width: 100%;
    margin: 0 auto;
  }
`;

export { Header };
