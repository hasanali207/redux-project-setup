
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import { RootState } from './redux/store';

function App() {

  const dispatch = useDispatch();
  const {count} = useSelector((state : RootState) => state.counter)
  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  // const handleReset = () => {
  //   dispatch(reset());
  // }

  return (
    <div className='body-wrapper'>
      <div>
        <h1>Welcome to React</h1>
        <p>This is a simple React application.</p>
      </div>
      <button onClick={handleIncrement}>Increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App
