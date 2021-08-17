import React from 'react';
import '../Styles/MainButton.css';
import PropTypes from 'prop-types';

const MainButton = ({
  url, msj, icon, dowmload,
}) => {
  if (dowmload === '') {
    return (
      <a href={url} className="btn btn-dark p-4 w-100  ">
        {msj}
        {icon}
      </a>
    );
  }
  return (
    <a href={url} dowmload={dowmload} className="btn btn-dark">
      {msj}
      {icon}
    </a>
  );
};

MainButton.propTypes = {
  url: PropTypes.element.isRequired,
  icon: PropTypes.element.isRequired,
  msj: PropTypes.element.isRequired,
  dowmload: PropTypes.string,
};

MainButton.defaultProps = {
  dowmload: '',
};

export default MainButton;
