import { useContext } from "react"
import Display from "./components/Display"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"
import { PlayerContext } from "./context/PlayerContext"


const App = () => {

  const { audioRef, track } = useContext(PlayerContext)

  return (
    <div className="h-screen bg-black">
       <div className="h-[90%] flex">
           <Sidebar/>
           <Display/>
           <audio ref={audioRef} preload="auto" src={track.file}></audio>
       </div>
       <Player/>
    </div>
  )
}

export default App
