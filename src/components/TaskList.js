// TaskList.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, taskDone } from '../store/taskslice';
import { MdEdit, MdDelete, MdDone } from 'react-icons/md'; // Changed to Material Design icons
import '../App.css';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [editingTask, setEditingTask] = useState(null);

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    const handleEdit = (id, text) => {
        dispatch(editTask({ id, text }));
        setEditingTask(null);
    };

    const handleDone = (id) => {
        dispatch(taskDone(id));
    };

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%', fontFamily: 'DMM' }}>
            <div style={{ width: '80%', marginBottom: '20px' }}>
                <div style={{ backgroundColor: '#fff', height: '20px', borderRadius: '10px', overflow: 'hidden', marginTop: '10px' }}>
                    <div style={{ width: `${progress}%`, backgroundColor: '#ac33ef', height: '100%', borderRadius: '10px', transition: 'width 0.5s' }}>
                        {progress === 0 && (
                            <span style={{ color: '#B624FF', fontFamily: 'DMM', padding: '2px' }}>⚡</span>
                        )}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', color: '#f4f4f4' }}>
                    <span>Total Tasks : {totalTasks}</span>
                    <span>Completed Tasks : {completedTasks}</span>
                </div>
            </div>
            {tasks.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '30px', color: '#c5e514', fontSize: '20px' }}>
                    <h1>create some tasks ⚡</h1>
                    <div style={{marginTop:'full'}}>
                        <span style={{ color: '#ff69b4',marginTop:'20px' }}>made with ♥ </span>
                        
                        <br />
                        <span style={{ color: '#fff' }}>Kartikey Mittal</span>
                    </div>

                </div>
            ) : (
                tasks.slice(0).reverse().map((task) => (
                    <div
                        key={task.id}
                        className={`task-card ${task.completed ? 'completed' : ''}`}
                        style={{
                            backgroundColor: editingTask === task.id ? 'yellow' : task.completed ? '#19b715' : '#FF5018',
                            color: 'white',
                            borderRadius: '15px',
                            padding: '10px',
                            marginBottom: '10px',
                            width: '80%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            height: '40px',
                            fontFamily: 'DMM',
                            fontSize: 20,
                        }}
                    >
                        {editingTask === task.id ? (
                            <input
                                type="text"
                                defaultValue={task.text}
                                onBlur={(e) => handleEdit(task.id, e.target.value)}
                                style={{
                                    backgroundColor: 'yellow',
                                    color: 'black',
                                    border: '0', // Remove all borders
                                    borderBottom: '2px solid #1890ff', // Add a bottom border
                                    outline: '1px',
                                    flex: '1',
                                    borderRadius: '5px',
                                    padding: '8px',
                                    marginRight: '10px',
                                    fontFamily: 'DMM',
                                    fontSize: 20,
                                }}
                            />
                        ) : (
                            <span style={{ fontFamily: 'DMM' }}>{task.text}</span>
                        )}
                        <div className="task-actions">
                            <MdEdit className="task-icon" onClick={() => setEditingTask(task.id)} style={{ color: '#fff', backgroundColor: 'blue', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }} />
                            <MdDelete className="task-icon" onClick={() => handleDelete(task.id)} style={{ color: '#fff', backgroundColor: 'red', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }} />
                            <MdDone className="task-icon" onClick={() => handleDone(task.id)} style={{ color: '#fff', backgroundColor: 'green', padding: '5px', borderRadius: '5px', marginRight: '5px', cursor: 'pointer' }} />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TaskList;
