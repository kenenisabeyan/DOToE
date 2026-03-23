import React, { useState } from 'react';
import API from '../services/api';

export default function TaskCard({task}){
  const [link, setLink] = useState('');

  const submitTask = async ()=>{
    await API.post(`/submissions/${task._id}/submit`, {codeLink: link});
    alert('Submitted!');
  }

  return (
    <div className="border p-3 rounded">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <input className="border p-1 mt-2" placeholder="GitHub link" value={link} onChange={e=>setLink(e.target.value)}/>
      <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded" onClick={submitTask}>Submit</button>
    </div>
  )
}