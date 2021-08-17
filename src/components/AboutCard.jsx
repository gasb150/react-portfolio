import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import portfolio from '../api/portfolio';

const AboutCard = ({ title, background, icon }) => {
  const [elements, setElements] = useState([]);

  const onLoad = async () => {
    const response = await portfolio.get(`/${title}.json`);
    setElements(response.data);
  };
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <div className={`bg-${background} col-lg-6 pt-5 pe-0`}>
        <div className="text-uppercase">{title}</div>
        <div>
          {elements.map((element) => (
            <>
              {element.name !== 'NA'
                ? (
                  <>
                    <li key={element.id}>{element.name}</li>
                  </>
                )
                : <></>}
            </>
          ))}
        </div>
        <div className="d-flex justify-content-end">
          <img src={icon} alt="icon" />
        </div>
      </div>
    </>

  );
};

AboutCard.propTypes = {
  title: PropTypes.element.isRequired,
  icon: PropTypes.element.isRequired,
  background: PropTypes.element.isRequired,
};

export default AboutCard;
