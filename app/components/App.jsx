import RaisedButton from 'material-ui/RaisedButton';
import { Parallax, Background } from 'react-parallax';
import React from 'react';

const App = React.createClass({
  render() {
    return <div>
      <Parallax strength={300}>
        <Background>
          <img src="http://www.fillmurray.com/400/300"/>
          <div style={{width: 800, height: 300, backgroundColor: '#450093'}}></div>
          <img src="http://www.fillmurray.com/500/300"/>
        </Background>
        <h1>A collection of textile samples lay spread out on the table ...</h1>
      </Parallax>
    </div>
  }
});

export default App;
