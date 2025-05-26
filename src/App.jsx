import React, { useInsertionEffect } from 'react'
import { ZIM } from 'zego-zim-web';

function App() {
  const [zimInstance,setZimInstance] = useState(null)
  const [userInfo,setUserInfo] = useState(null)
  const [messageText,setMessageText] = useState(" ")
  const [message,setMessage] = useState([])
  const [selectedUser,setSelectedUser] = useState("Moinul")
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const appID =1566630134
  const tokenA="04AAAAAGg1XswADELIJ6S1KnLDIn+ZZACwSDtcrxKU6fmKYjCRZ1j+tBMLV4YyFOWhIcWesjczuGNrNc369TyZfE4zGoUCzp0bSL+QlgCJ94JCYuYE3ULRZIjDu/hmGU50BjXvfj4CP7n3ZJM9zASJfKycgI2Gzhn/sd0mXvBoKuEpmWvSrBfa9E35xKQZRANnRrsDjfVEaZsoZ2i0qUKp/BpkPIbbvVIgO0flircVCJRGrsSxFAGklmkzG1Ki/JrggbYW0Zqzsd0B";
  const tokenB="04AAAAAGg1XvIADKnznYRcwjN9cXZsZACwBuWrzEjcU9RkMZQftSrhjMjCqEsBvfdZa5qTe2kMW/BvFBpVrH/ycHpL9r3ftvUhgPEGjdGD3so9YaAjj4bYlj3fr6ZA+kKtJu/DdzzSgDKeuFiRq1IbhN7HK8bsjzOyCJSC9GDrgMCNoQTEH+tf96N+gmttKDNr+VfSImt6ryuHLAf3erizaOYQ4WPqG9uRjB6k42htU1B2u2q82gEIfHsHfVDLzYCHkHz9SkUocvEB";
  useEffect(()=>{
    const instance = ZIM.create(appID)
    setZimInstance(instance)
    instance.on('error', function (zim, errorInfo) {
      console.log('error', errorInfo.code, errorInfo.message);
  });

  instance.on('connectionStateChanged', function (zim, { state, event }) {
    console.log('connectionStateChanged', state, event,);
    
});

instance.on('peerMessageReceived', function (zim, { messageList, fromConversationID }) {
  console.log('peerMessageReceived', messageList, fromConversationID);
});

  
  },[])
  
  return (
    <div>

    </div>
  )
}

export default App