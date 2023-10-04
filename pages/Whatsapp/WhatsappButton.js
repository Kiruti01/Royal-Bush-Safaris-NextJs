import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.link/1qezrk', '_blank');
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
    backgroundColor: '#25d366',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  };

  const iconStyle = {
    width: '30px',
    height: '30px',
  };

  return (
    <div style={buttonStyle} onClick={handleWhatsAppClick}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
        alt="WhatsApp Icon"
        style={iconStyle}
      />
    </div>
  );
};

export default WhatsAppButton;
