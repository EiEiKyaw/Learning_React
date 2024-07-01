import "./App.css";
import BasicGet from "./components/N1_BasicGet";
import FetchDataWithParam from "./components/N2_FetchWithParam";
import PostData from "./components/N3_PostData";
import HandlingErr from "./components/N4_HandlingErr";
import CancelRequest from "./components/N5_CancelRequest";
import AsyncAwait from "./components/N6_AsyncAwait";
import CustomHeader from "./components/N7_CustomHeader";
import UseAxiosInstance from "./components/N8_AxiosInstance";
import FetchFromREST from "./components/N9_FetchFromREST";
import UseToken from "./components/N10_UseToken";

function App() {
  return (
    <div className="App">
      {/* <BasicGet /> */}
      {/* <FetchDataWithParam postId={2} /> */}
      {/* <PostData /> */}
      {/* <HandlingErr /> */}
      {/* <CancelRequest /> */}
      {/* <AsyncAwait /> */}
      {/* <CustomHeader /> */}
      {/* <UseAxiosInstance /> */}
      {/* <FetchFromREST /> */}
      <UseToken />
    </div>
  );
}

export default App;
