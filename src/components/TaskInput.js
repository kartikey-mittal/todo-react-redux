import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskslice';
import { FaPlus } from 'react-icons/fa'; // Import the icon

const TaskInput = () => {
 const [task, setTask] = useState('');
 const dispatch = useDispatch();

 const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask('');
    }
 };

 return (
    <div style={{ display: 'flex', alignItems: 'center', width: '50%', justifyContent: 'center' }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        style={{ flex: '1', padding: '12px', borderRadius: '30px', borderColor: '#b624ff', borderWidth: 5, outline: 'none', color: 'white', fontWeight: 'normal', backgroundColor: '#22214f', fontFamily: 'DMM', fontSize: 20, marginBottom: 10 }}
      />
      <FaPlus
        style={{ marginLeft: '10px', padding: '10px', borderRadius: '25px', border: 'none', outline: 'none', cursor: 'pointer', backgroundColor: '#b624ff', color: 'white', fontSize: '20px' }}
        onClick={handleSubmit}
      />
    </div>
 );
};

export default TaskInput;
