import './App.scss'
import Field from './components/Field'
import Sign from './components/Sign'
import { Provider } from './Context'

function App() {

  return (
    <Provider>
      <div className="App">
        <Sign />
        <Field />
      </div>
    </Provider>
  )
}

export default App
