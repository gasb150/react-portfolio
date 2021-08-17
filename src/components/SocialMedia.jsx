import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({ url, icon, bg }) => (
  <>
    <a href={url} target="_blank" rel="noreferrer noopener" className={`text-${bg} h2`}>
      <FontAwesomeIcon icon={['fab', icon]} />
    </a>

  </>
);

SocialMedia.propTypes = {

  url: PropTypes.element.isRequired,
  icon: PropTypes.element.isRequired,
  bg: PropTypes.element.isRequired,
};

export default SocialMedia;
