import Footer from 'components/Footer';
import MainNav from 'components/MainNav';
import React from 'react';


const App = React.createClass({
  render() {
    return <div>
      <MainNav />

      <Footer />
    </div>
  }
});

export default App;
