import { createContext, useContext, useState } from 'react';
//create use context for video id
const VideoContext = createContext();

export const useVideo = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videoId, setVideoId] = useState(null);

  return (
    <VideoContext.Provider value={{ videoId, setVideoId }}>
      {children}
    </VideoContext.Provider>
  );
};
