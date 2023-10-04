// WhatsAppButton.js
import React, { Component } from 'react';
// import './WhatsAppButton.css'; // Import the CSS

class WhatsAppButton extends Component {
  handleWhatsAppClick = () => {
    window.open('https://wa.link/1qezrk', '_blank');
  };

  render() {
    return (
      <div className="whatsapp-button" onClick={this.handleWhatsAppClick}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" alt="WhatsApp Icon" />
      </div>
    );
  }
}

export default WhatsAppButton;
