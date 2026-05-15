import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
  let statusClasses = "";

  if (friend.status === "overdue") {
    statusClasses = "bg-[#EB5757] text-white"; 
  } 
  else if (friend.status === "almost due") {
    statusClasses = "bg-[#f0ae43] text-white";
  } 
  else if (friend.status === "on-track") {
    statusClasses = "bg-[#244d3f] text-white";
  } 
  else {
    statusClasses = "bg-gray-100 text-gray-600"; // Fallback style
  }


  return (
    <Link to={`/friendDetail/${friend.id}`} className="card bg-white shadow-sm border border-gray-50 hover:shadow-md transition-shadow py-10 items-center text-center rounded-2xl">
      <figure className="mb-4">
        <img
          src={friend.picture}
          alt={friend.name}
          className="rounded-full w-28 h-28 object-cover" />
      </figure>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold text-[#1F2937]">{friend.name}</h2>

        <p className="text-gray-400 text-sm font-medium">{friend.days_since_contact}d ago</p>

        <div className="flex gap-2 mt-1">
          {
          friend.tags.map((tag, index) => (<span key={index} className="bg-[#D1FAE5] text-[#065F46] font-bold px-3 py-1 rounded-full uppercase text-[12px]">{tag}</span>))
          }
        </div>

        <div className="mt-3">
          <span className={`px-3 py-2 rounded-full font-medium text-sm capitalize ${statusClasses}`}>
            {friend.status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;