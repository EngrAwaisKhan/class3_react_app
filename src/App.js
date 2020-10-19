import React from 'react';
import Dinner from './dinner.js';
function App() {
  return (
    <div>
      <Dinner dishname ="chicken baryani" sweetname="keer"/>
      <hr/>
      <Dinner dishname ="mutton" sweetname ="custer"/>
      <hr/>
      <Dinner dishname ="fish" sweetname ="sala rice"/>
    </div>

  );
}

export default App;
