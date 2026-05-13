import React, { use } from 'react';
import FriendCard from './FriendCard';

const friendpromise = fetch('/friendsdata.json').then((res) => res.json());

const Friends = () => {
  const friends = use(friendpromise);
  console.log(friends);

  return (
    <div className="w-full md:max-w-[85%] mx-auto px-4 md:px-0 pb-8">
      <h1 className="text-2xl font-bold text-[#1F2937] mb-3">Your Friends</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 w-full">

        {
          friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
        }

      </section>

    </div>
  );
};

export default Friends;