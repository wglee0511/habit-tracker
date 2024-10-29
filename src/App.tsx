import React from 'react';

import Theme from './components/Theme';
import Main from './page/Main';

function App() {
  return (
    <div className="App">
      <Theme>
        <Main />
      </Theme>
    </div>
  );
}

export default App;
