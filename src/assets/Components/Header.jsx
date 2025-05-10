import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Code Splitting and Lazy Loading</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'grey',
    color: 'white',
    padding: '1rem',
    textAlign: 'center'
  }
};

export default Header;
