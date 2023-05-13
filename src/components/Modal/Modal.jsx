import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWrap } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClose);
  }

  onClose = evt => {
    if (evt?.code === 'Escape' || evt?.target === evt?.currentTarget) {
      this.props.closeWindow();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <Overlay onClick={this.onClose}>
        <ModalWrap>{children}</ModalWrap>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeWindow: PropTypes.func.isRequired,
};
