import React, { useContext } from 'react';
import { MessageSquare, Phone, Video } from 'lucide-react';
import { FriendContext } from '../../Context/FriendProvider';

const TimelineDetails = ({filterType}) => {
  const { storeAll, storeCall, storeText, storeVideo, } = useContext(FriendContext);

  
  const getActionIcon = (action) => {
    if (action === "text") {
      return <img src="/text.png" alt="text" className="w-12 h-12 object-contain" />;;
    } else if (action === "call") {
      return <img src="/call.png" alt="text" className="w-12 h-12 object-contain" />;;
    } else if (action === "video") {
      return <img src="/video.png" alt="text" className="w-12 h-12 object-contain" />;;
    }
    return null;
  };

  if (filterType == "call") {
    return(
        <div className="w-full py-10 px-4">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">Interaction History</h2>

          <div className="flex flex-col gap-4">

            {storeAll.length > 0 && (
              storeCall.toReversed().map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  
                  <div className="shrink-0">
                    <img src="/call.png" alt="text" className="w-12 h-12 object-contain" />
                  </div>


                  <div className="flex flex-col">
                    <p className="text-lg text-gray-500">
                      <span className="font-bold text-[#244D3F] capitalize">
                        Call
                      </span>
                      {" with "}
                      <span className="font-medium text-[#4B5563]">
                        {item.name}
                      </span>
                    </p>
                    
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

    )
  }

  if (filterType == "text") {
    return(
        <div className="w-full py-10 px-4">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">Interaction History</h2>

          <div className="flex flex-col gap-4">

            {storeAll.length > 0 && (
              storeText.toReversed().map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  
                  <div className="shrink-0">
                    <img src="/text.png" alt="text" className="w-12 h-12 object-contain" />
                  </div>


                  <div className="flex flex-col">
                    <p className="text-lg text-gray-500">
                      <span className="font-bold text-[#244D3F] capitalize">
                        Text
                      </span>
                      {" with "}
                      <span className="font-medium text-[#4B5563]">
                        {item.name}
                      </span>
                    </p>
                    
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

    )
  }

  if (filterType == "video") {
    return(
        <div className="w-full py-10 px-4">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">Interaction History</h2>

          <div className="flex flex-col gap-4">

            {storeAll.length > 0 && (
              storeVideo.toReversed().map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  
                  <div className="shrink-0">
                    <img src="/video.png" alt="text" className="w-12 h-12 object-contain" />
                  </div>


                  <div className="flex flex-col">
                    <p className="text-lg text-gray-500">
                      <span className="font-bold text-[#244D3F] capitalize">
                        Video Call
                      </span>
                      {" with "}
                      <span className="font-medium text-[#4B5563]">
                        {item.name}
                      </span>
                    </p>
                    
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

    )
  }



  if (filterType== ""){
    return (
    <div className="w-full py-10 px-4">
      <h2 className="text-3xl font-bold text-[#1F2937] mb-8">Interaction History</h2>

      <div className="flex flex-col gap-4">

        {storeAll.length > 0 ? (
          storeAll.toReversed().map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
              
              <div className="shrink-0">
                {getActionIcon(item.actionType)}
              </div>


              <div className="flex flex-col">
                <p className="text-lg text-gray-500">
                  <span className="font-bold text-[#244D3F] capitalize">
                    {item.actionType}
                  </span>
                  {" with "}
                  <span className="font-medium text-[#4B5563]">
                    {item.name}
                  </span>
                </p>
                
                <span className="text-sm text-gray-400 font-medium">
                  {item.timestamp}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-400">No interactions recorded yet.</p>
          </div>
        )}
      </div>
    </div>
  );

  }

  return (
    <div className="w-full py-10 px-4">
      <h2 className="text-3xl font-bold text-[#1F2937] mb-8">Interaction History</h2>

      <div className="flex flex-col gap-4">

        {storeAll.length > 0 ? (
          storeAll.toReversed().map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
              
              <div className="shrink-0">
                {getActionIcon(item.actionType)}
              </div>


              <div className="flex flex-col">
                <p className="text-lg text-gray-500">
                  <span className="font-bold text-[#244D3F] capitalize">
                    {item.actionType}
                  </span>
                  {" with "}
                  <span className="font-medium text-[#4B5563]">
                    {item.name}
                  </span>
                </p>
                
                <span className="text-sm text-gray-400 font-medium">
                  {item.timestamp}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-400">No interactions recorded yet.</p>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default TimelineDetails;