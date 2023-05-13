import PropTypes from 'prop-types';
import { FidgetSpinner } from 'react-loader-spinner';

export const Loader = ({ visible }) => {
  return (
    <FidgetSpinner
      visible={visible}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      wrapperClass="dna-wrapper"
      ballColors={['#ff0000', '#00ff00', '#ffff00']}
      backgroundColor="#3f51b5"
    />
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};
