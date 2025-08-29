import Greeting from './AppEx1';
import Counter from './AppEx2';

const App = () => (
  // AppEx1
  <div>
    <Greeting name='João Vitor' size='16px'/>
    <Greeting name='Emerson Bottega' />
    
    <div>
    <Counter />
    </div>
  </div>
);
export default App;