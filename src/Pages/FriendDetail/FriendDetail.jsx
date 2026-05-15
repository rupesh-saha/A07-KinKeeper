import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { Bell, Archive, Trash2, Phone, MessageSquare, Video } from 'lucide-react';

const FriendDetail = () => {
  const {id} = useParams();

  const friends = useLoaderData();

  const expectedFriend = friends.find(friend => friend.id == id);

  let statusClasses = "";

  if (expectedFriend.status === "overdue") {
    statusClasses = "bg-[#EB5757] text-white"; 
  } 
  else if (expectedFriend.status === "almost due") {
    statusClasses = "bg-[#f0ae43] text-white";
  } 
  else if (expectedFriend.status === "on-track") {
    statusClasses = "bg-[#244d3f] text-white";
  } 
  else {
    statusClasses = "bg-gray-100 text-gray-600"; // Fallback style
  }

  return (
    <div className="h-auto bg-gray-50 p-4 md:p-10">
      <div className="max-w-[85%] mx-auto flex flex-col md:flex-row gap-6">
        
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          
          <div className="card bg-white shadow-sm border border-gray-100 p-7 flex flex-col items-center text-center">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full">
                <img src={expectedFriend.picture} alt="Profile" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#1F2937]">{expectedFriend.name}</h2>
            <div className="flex flex-col gap-2 mt-2">

              <div className="mb-2">
                <span className={`px-3 py-2 rounded-full font-medium text-sm capitalize ${statusClasses}`}>
                  {expectedFriend.status}
                </span>
              </div>

              <div className="flex gap-2">
                {
                expectedFriend.tags.map((tag, index) => (<span key={index} className="bg-[#D1FAE5] text-[#065F46] font-bold px-3 py-1 rounded-full uppercase text-[12px]">{tag}</span>))
                }
              </div>
            </div>
            <p className="mt-4 italic text-gray-500 font-medium">
              {expectedFriend.bio}
            </p>
            <p className="text-gray-400 text-sm mt-2">Preferred: {expectedFriend.email}</p>
          </div>

          
          <div className="flex flex-col gap-2">
            <button className="btn btn-ghost bg-white border-gray-200 normal-case flex justify-center gap-2 text-gray-700">
              <Bell size={18} /> Snooze 2 Weeks
            </button>
            <button className="btn btn-ghost bg-white border-gray-200 normal-case flex justify-center gap-2 text-gray-700">
              <Archive size={18} /> Archive
            </button>
            <button className="btn btn-ghost bg-white border-gray-200 border-red-100 normal-case flex justify-center gap-2 text-red-500 hover:bg-red-50">
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>

        
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-4xl font-bold text-[#244D3F]">{expectedFriend.days_since_contact}</h3>
              <p className="text-gray-500 text-sm font-medium mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-4xl font-bold text-[#244D3F]">{expectedFriend.goal}</h3>
              <p className="text-gray-500 text-sm font-medium mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-xl font-bold text-[#244D3F] mt-3">{expectedFriend.next_due_date}</h3>
              <p className="text-gray-500 text-sm font-medium mt-3">Next Due</p>
            </div>
          </div>


          <div className="card bg-white shadow-sm border border-gray-100 p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-[#1F2937]">Relationship Goal</h3>
              <button className="btn btn-sm btn-ghost bg-gray-50 border-gray-200 normal-case">Edit</button>
            </div>
            <p className="text-gray-600">
              Connect every <span className="font-bold text-black">30 days</span>
            </p>
          </div>

          <div className="card bg-white shadow-sm border border-gray-100 p-8">
            <h3 className="text-lg font-bold text-[#1F2937] mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                <Phone size={28} className="text-[#1F2937]" />
                <span className="font-medium">Call</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                <MessageSquare size={28} className="text-[#1F2937]" />
                <span className="font-medium">Text</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                <Video size={28} className="text-[#1F2937]" />
                <span className="font-medium">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetail;