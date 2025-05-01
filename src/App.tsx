import Welcome from "./components/Welcome.tsx";
import Introduction from "./components/Introduction.tsx";
import Houses from "./components/Houses.tsx";
import Capsules from "./components/Capsules.tsx";
import MomentumScroll from "./components/MomentumScroll.tsx";

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
