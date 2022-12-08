import Navbar from "../components/home/appBar.home"
import IntroContainer from '../components/home/container.intro'
import Sidebar from '../components/home/appSide.home'
// export const Openbar = createContext(false);
export default function Home() {

  //  const [open,setOpen] = useState(false);

  return (
    <>
      {/* <Openbar.Provider value={{open,setOpen}}> */}
      <Navbar />
      <Sidebar />
      <IntroContainer />
      {/* </Openbar.Provider> */}
    </>

  )
}
