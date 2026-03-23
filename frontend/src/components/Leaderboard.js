import React from 'react';

export default function Leaderboard({leaderboard}){
  return (
    <div className="mt-8 p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Top Developers</h2>
      <ol className="list-decimal ml-5">
        {leaderboard.map((user,i)=>(
          <li key={user._id} className="mb-1">
            {user.name} - {user.totalScore} pts
          </li>
        ))}
      </ol>
    </div>
  )
}