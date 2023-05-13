import PropTypes from 'prop-types';
import { BtnLoadMore } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <BtnLoadMore type="button" onClick={onClick}>
      Load more
    </BtnLoadMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
