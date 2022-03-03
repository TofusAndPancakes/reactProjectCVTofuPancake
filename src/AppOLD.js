import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link, useLocation} from 'react-router-dom';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Chat from './components/Chat'
import BodySetting from './components/BodySetting'
import Art1 from './components/Art1'
import Art2 from './components/Art2'

function App() {

  const [conversation, setConversation] = useState([
  ])

  var location = useLocation();
  var conversationRef = useRef(0);
  var conversationRefEnd = useRef(0);
  var conversationRefA = useRef(0);
  var conversationRefB = useRef(0);
  var counterId = useRef(0);
  var currentImage = useRef(0);

  //Inspiration for this: https://stackoverflow.com/questions/39294424/react-router-execute-custom-function-on-every-link-navigation
  //https://reactrouter.com/docs/en/v6/faq
  //https://reactrouter.com/docs/en/v6/api#usenavigationtype
  //https://reactjs.org/docs/hooks-rules.html

  useEffect(() => {
    if (location.pathname === "/character1"){
      currentImage.current = 0;
    } else if (location.pathname === "/character2"){
      currentImage.current = 1;
    }
    //Inspiration for this: https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate
    //Aparaently this method that I use doesnt update useState but adds to it! Good enough for this project, but need to research further!

    const conversation1 = () => {
        setTimeout(function(){
          counterId.current++;
          setConversation(prevArray => [
            ...prevArray,
            {
                id: counterId.current,
                message: 'Hello? How did you get access to my art files?',
            }
          ])
          setTimeout(conversation2, 3000);
        }, 1000);
    }

    //Inspiration for this: https://stackoverflow.com/questions/15810808/calling-a-function-inside-settimeout-and-inside-a-function

    const conversation2 = () => {
        counterId.current++;
        setConversation(prevArray => [
          ...prevArray,
          {
              id: counterId.current,
              message: `Oh well, I guess I can show you some stuff that I did...`,
          }
        ])
        conversationRefEnd.current = 1;
        if (currentImage.current === 0){
          setTimeout(conversationSetA, 4000);
          conversationRefA.current = 1;
        } else if (currentImage.current === 1){
          setTimeout(conversationSetB, 4000);
          conversationRefB.current = 1;
        }
    }

    const conversationSetA = () => {
        counterId.current++;
        setConversation(prevArray => [
          ...prevArray,
          {
              id: counterId.current,
              message: `This artwork is inspired by my After Effects project!`,
          }
        ])
    }

    const conversationSetB = () => {
        counterId.current++;
        setConversation(prevArray => [
          ...prevArray,
          {
              id: counterId.current,
              message:  `This artwork is inspired by my various website projects!`,
          }
        ])
    }

    if (location.pathname === "/character1" && conversationRef.current === 0){
      console.log("Test!");
      conversationRef.current = 1;
      console.log(conversationRef);
      conversation1();
    }

    if (location.pathname === "/character1" && conversationRefA.current === 0 && conversationRefEnd.current === 1){
      conversationSetA();
      conversationRefA.current = 1;
    }

    if (location.pathname === "/character2" && conversationRefB.current === 0 && conversationRefEnd.current === 1){
      conversationSetB();
      conversationRefB.current = 1;
    }

  },[location.pathname]);

  //Only trigger useEffect when location.pathname changes!
  //Also you cannot change a variable in useEffect, it will be lost after each render unfortunately!
  //read this for more info! https://stackoverflow.com/questions/56455887/react-usestate-or-useref?rq=1
  return (
    <div className="App">
      <Header />
      <Routes>
        {/*DefaultRoute*/}
        <Route path="/"  element={
          <div className="appBody">
          <SideBar />
          <Link to={`character1`}>
          <p>OPEN</p>
          </Link>
          </div>
          }>
          </Route>
        {/*Character1Route*/}
        <Route path="character1" element={
          <div className="appBody">
            <SideBar />
            <div className="appImageMain">
            <BodySetting art1={"appImageSettingTabActive"}/>
            <Art1 />
            <div className="appChat">
              {/*AppWindow*/}
              <div className="appWindow">
                <div className="icon">
                  <img src={'./img/minimize.svg'} alt="Icon"></img>
                </div>
                <div className="icon">
                  <img src={'./img/windowed.svg'} alt="Icon"></img>
                </div>
                <div className="icon">
                  <img src={'./img/close.svg'} alt="Icon"></img>
                </div>
              </div>
              {/*AppChatHeader*/}
              <div className="appChatHeader">
                <div className="appChatHeaderLeft">
                  <div className="appChatHeaderLeftImage">
                    <img src={'./img/square.svg'} alt="Icon"></img>
                  </div>
                  <div className="appChatHeaderLeftUser">
                    <h3>Christofer Alvin</h3>
                    <p>Online</p>
                  </div>
                </div>
                <div className="appChatHeaderRight">
                  <img src={'./img/square.svg'} alt="Icon"></img>
                </div>
              </div>
              {/*AppChatContainer*/}
                <div className="appChatContainer">
                {conversation.length > 0 ? <Chat conversation={conversation}/>
                : 'No Database'}
                </div>
              {/*AppChatInput*/}
                <div className="appChatInput">
                  <div className="appChatInputTextBox">
                    <textarea id="DummyInput" name="DummyInput" rows="2"></textarea>
                  </div>
                  <div className="appChatInputSubmit">
                    <img src={'./img/square.svg'} alt="Icon"></img>
                  </div>
                </div>
                </div>
            </div>
          {/*End of AppBody*/}
          </div>
        }/>
        {/*Character2Route*/}
        <Route path="character2" element={
          <div className="appBody">
            <SideBar />
            <BodySetting art2={"appImageSettingTabActive"}/>
            <Art2 />
            <div className="appChat">
              {/*AppWindow*/}
              <div className="appWindow">
                <div className="icon">
                  <img src={'./img/minimize.svg'} alt="Icon"></img>
                </div>
                <div className="icon">
                  <img src={'./img/windowed.svg'} alt="Icon"></img>
                </div>
                <div className="icon">
                  <img src={'./img/close.svg'} alt="Icon"></img>
                </div>
              </div>
              {/*AppChatHeader*/}
              <div className="appChatHeader">
                <div className="appChatHeaderLeft">
                  <div className="appChatHeaderLeftImage">
                    <img src={'./img/square.svg'} alt="Icon"></img>
                  </div>
                  <div className="appChatHeaderLeftUser">
                    <h3>Christofer Alvin</h3>
                    <p>Online</p>
                  </div>
                </div>
                <div className="appChatHeaderRight">
                  <img src={'./img/square.svg'} alt="Icon"></img>
                </div>
              </div>
              {/*AppChatContainer*/}
                <div className="appChatContainer">
                {conversation.length > 0 ? <Chat conversation={conversation}/>
                : 'No Database'}
                </div>
              {/*AppChatInput*/}
                <div className="appChatInput">
                  <div className="appChatInputTextBox">
                    <textarea id="DummyInput" name="DummyInput" rows="2"></textarea>
                  </div>
                  <div className="appChatInputSubmit">
                    <img src={'./img/square.svg'} alt="Icon"></img>
                  </div>
                </div>
            </div>
          {/*End of AppBody*/}
          </div>
        }/>
      </Routes>
    </div>
  );
}

export default App;
