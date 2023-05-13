import { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from './Searchbar.styled';
import { FaSistrix } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class Searchbar extends Component {
  handlerFormSubmit = evt => {
    evt.preventDefault();
    const word = evt.target.elements[1].value.trim();
    if (word) {
      this.props.onSubmit(word);
    } else {
      Notify.warning('Please enter a picture title');
    }
    evt.target.reset();
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.handlerFormSubmit}>
          <button type="submit">
            <FaSistrix size={20} className="icon" />
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
