import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { TreeState, Container } from '../treeview/treeview';

const Wrapper = styled('div')(({ theme }) => ({
  marginLeft: -theme.layoutMargin,
  marginRight: -theme.layoutMargin,
}));

// This component gets a ref so it needs to be a class
// eslint-disable-next-line react/prefer-stateless-function
class Explorer extends Component {
  render() {
    const { stories } = this.props;

    return (
      <Wrapper>
        <Container>
          <TreeState dataset={stories} prefix="explorer" />
        </Container>
      </Wrapper>
    );
  }
}

Explorer.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.any),
    })
  ).isRequired,
};

export { Explorer };