import { createContext, useState } from "react";

export const VideosContext = createContext();
VideosContext.displayName = 'Videos';

// eslint-disable-next-line react/prop-types
const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    
    return (
        <VideosContext.Provider value={{ videos, setVideos }}>
            {children}
        </VideosContext.Provider>
    )
}


export default VideosProvider;