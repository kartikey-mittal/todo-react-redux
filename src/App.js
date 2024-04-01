import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './DMM.ttf'
function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{
        backgroundColor: '#232e58', background: `
repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(242, 242, 242, 0.1) 10px, rgba(242, 242, 242, 0.1) 51px),
repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(242, 242, 242, 0.1) 10px, rgba(242, 242, 242, 0.1) 51px),
#232e58`,
      }}>
        <span style={{ fontFamily: 'DMM', color: 'white', fontWeight: '600', fontSize: 40, marginTop: 20, margin: 20, }}>Todo App 👋</span>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;

//