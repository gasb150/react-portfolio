import React from 'react';
import PropTypes from 'prop-types';
import SocialMedia from '../components/SocialMedia';

const SocialContent = ({ bg }) => (
  <>
    <div className="d-flex justify-content-between">
      <SocialMedia url="https://github.com/gasb150" icon="github" bg={bg} />
      <SocialMedia url="https://twitter.com/7aves" icon="twitter" bg={bg} />
      <SocialMedia url="" icon="linkedin" bg={bg} />
    </div>
  </>
);

SocialContent.propTypes = {

  bg: PropTypes.element.isRequired,
};

export default SocialContent;
