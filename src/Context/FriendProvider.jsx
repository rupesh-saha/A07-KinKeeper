import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';



export const FriendContext = createContext();

const FriendProvider = ({children}) => {

  const [storeAll, setStoreAll] = useState([]);
  const [storeCall, setStoreCall] = useState([]);
  const [storeText, setStoreText] = useState([]);
  const [storeVideo, setStoreVideo] = useState([]);


  const handleTimeline = (currentfriend, action) => {
    console.log(currentfriend);
    console.log(action);

    const newInteraction = {
    ...currentfriend,
    actionType: action,
    timestamp: new Date().toLocaleString(), 
  };

    setStoreAll([...storeAll, newInteraction]);

    if(action == "call") {
      setStoreCall([...storeCall, currentfriend]);
      
      toast.success(`${currentfriend.name} is called`);
      console.log(storeCall);
    }
    else if (action == "text") {
      setStoreText([...storeText, currentfriend]);
      console.log(storeText);
      toast.success(`${currentfriend.name} is texted`);
    }
    else if (action == "video") {
      setStoreVideo([...storeVideo, currentfriend]);
      console.log(storeVideo);
      toast.success(`${currentfriend.name} is video called`);
    }

    console.log(storeAll);
  }

  const data = {
    storeAll,
    storeCall,
    storeText,
    storeVideo,
    setStoreAll,
    setStoreCall,
    setStoreText,
    setStoreVideo,
    handleTimeline
  }

  return <FriendContext.Provider value={data}>
    {children}
  </FriendContext.Provider>
};

export default FriendProvider;