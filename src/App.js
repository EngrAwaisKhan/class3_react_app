import React from 'react';
import Dinner from './dinner.js';
function App() {
  return (
    <div>
      <Dinner dishname ="chicken shorma" sweetname="keer"/>
      <hr/>
      <Dinner dishname ="chicken takka" sweetname ="custer"/>
      <hr/>
      <Dinner dishname ="fish" sweetname ="sala rice"/>
    </div>

  );
}

export default App;
