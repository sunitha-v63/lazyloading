import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Footer</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem'
  }
};

export default Footer;
