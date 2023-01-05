import PropTypes from 'prop-types';
import './movies.css';

const Movies = (props) => {
  const { name, images } = props;

  return (
    <>
      <img alt={name} src={images} />
      <p>{name}</p>
    </>
  );
};

Movies.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default Movies;
