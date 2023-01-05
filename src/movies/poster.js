import PropTypes from 'prop-types';
import './movies.css';

const Poster = (props) => {
  const { name, images } = props;

  return (
    <>
      <img alt={name} src={images} />

      <p className="movie-name">{name}</p>
    </>
  );
};

Poster.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default Poster;
