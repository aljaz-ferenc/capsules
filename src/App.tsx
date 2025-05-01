import Welcome from "./components/sections/Welcome.tsx";
import Introduction from "./components/sections/Introduction.tsx";
import Houses from "./components/sections/Houses.tsx";
import Capsules from "./components/capsules/Capsules.tsx";
import MomentumScroll from "./components/shared/MomentumScroll.tsx";

function App() {

    return (
        <MomentumScroll>

        <main className='bg-[#181717] text-white'>
            <Welcome/>
            <Introduction/>
            <Houses/>
            <Capsules/>
        </main>
        </MomentumScroll>
    )
}

export default App
