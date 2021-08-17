import React from 'react';
import '../Styles/MainButton.css';
import PropTypes from 'prop-types';

const MainButton = ({
  url, msj, icon,
}) => (
  <a href={url} className="btn btn-dark p-4 w-100  ">
    {msj}

    {icon}
  </a>
);

MainButton.propTypes = {
  url: PropTypes.element.isRequired,
  icon: PropTypes.element.isRequired,
  msj: PropTypes.element.isRequired,
};

export default MainButton;
