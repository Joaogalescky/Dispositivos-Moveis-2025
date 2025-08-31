import Greeting from './AppEx1';
import Counter from './AppEx2';
import AppEx3 from './AppEx3';

const App = () => (
  // AppEx1
  <div>
    <Greeting name='João Vitor' size={18} />
    <Greeting name='Emerson Bottega' />

    <div>
      <Counter />
    </div>

    <div>
      <AppEx3 />
    </div>
  </div>
);
export default App;