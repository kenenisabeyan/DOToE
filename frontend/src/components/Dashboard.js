import React, { useEffect, useState } from 'react';
import API from '../services/api';
import TaskCard from './TaskCard';
import Leaderboard from './Leaderboard';

export default function Dashboard(){
  const [tasks, setTasks] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(()=>{
    API.get('/tasks').then(res=>setTasks(res.data));
    API.get('/leaderboard').then(res=>setLeaderboard(res.data));
  },[]);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid gap-4">
        {tasks.map(task=><TaskCard key={task._id} task={task}/>)}
      </div>
      <Leaderboard leaderboard={leaderboard}/>
    </div>
  )
}