import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link, useLocation} from 'react-router-dom';
import Header from './components/Header'
import SideBar from './components/SideBar'
import File from './components/File'
import ChatContainer from './components/ChatContainer'
import ChatMinimize from './components/ChatMinimize'
import BodySetting from './components/BodySetting'
import Art1 from './components/Art1'
import Art2 from './components/Art2'
import Notice from './components/Notice'

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

  //To see if user has read the notice!
  var notice = useRef(0);

  //Current Height is AppChatContainer default height, I need to do this because if I put on useEffect, it will reset!
  var currentHeight = useRef(320);

  //Inspiration for this: https://stackoverflow.com/questions/39294424/react-router-execute-custom-function-on-every-link-navigation
  //https://reactrouter.com/docs/en/v6/faq
  //https://reactrouter.com/docs/en/v6/api#usenavigationtype
  //https://reactjs.org/docs/hooks-rules.html

  useEffect(() => {
    var appChatContainer = document.getElementById("appChatContainer");

    const scrollBottom = (element) => {
        element.scrollBy({
          top: currentHeight.current,
          behavior: 'smooth'
        });
        console.log(currentHeight.current);
        currentHeight.current = currentHeight.current+100;
    }

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
                message: 'Wait, wait, wait... how did you get here?',
            }
          ])
          scrollBottom(appChatContainer);
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
                message: 'Oh wait, I forgot, I put the file in a public server...',
            }
          ])
          scrollBottom(appChatContainer);
          setTimeout(conversation3, 3000);
    }

    const conversation3 = () => {
          counterId.current++;
          setConversation(prevArray => [
            ...prevArray,
            {
                id: counterId.current,
                message: `Actually, you know what, while you're here, I will tell you about them!`,
            }
          ])
          scrollBottom(appChatContainer);
          setTimeout(conversation4, 3000);
    }

    const conversation4 = () => {
        counterId.current++;
        setConversation(prevArray => [
          ...prevArray,
          {
              id: counterId.current,
              message: `These artworks I bundled here are inspired from the various project I worked on 2021, hence SketchDump2021!`,
          }
        ])
        scrollBottom(appChatContainer);
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
              message: `The artwork you're seeing right now is an original character I created for my Uni After Effects project.`,
          }
        ])
        scrollBottom(appChatContainer);
        setTimeout(conversationSetA2, 3000);
    }

    const conversationSetA2 = () => {
        counterId.current++;
        setConversation(prevArray => [
          ...prevArray,
          {
              id: counterId.current,
              message: `I tried to make her design as simple as possible to make implementing hair rigging (AFPHairRig) and liquidify. Credit to Anthony Possobon.`,
          }
        ])
        scrollBottom(appChatContainer);
        setTimeout(conversationSetA3, 5000);
    }

    const conversationSetA3 = () => {
        counterId.current++;
        setConversation(prevArray => [
          ...prevArray,
          {
              id: counterId.current,
              message: `You can access the final rendered project from this link if your interested! :D`,
          }
        ])
        scrollBottom(appChatContainer);
        setTimeout(conversationSetA4, 1000);
    }

    const conversationSetA4 = () => {
        counterId.current++;
        setConversation(prevArray => [
          ...prevArray,
          {
              id: counterId.current,
              message: `https://www.youtube.com/watch?v=eR0-nxjEdPY`,
          }
        ])
        scrollBottom(appChatContainer);
    }

    const conversationSetB = () => {
        counterId.current++;
        setConversation(prevArray => [
          ...prevArray,
          {
              id: counterId.current,
              message:  `Oh, this artwork is the character I created for a website project I did for Uni. The owner of a cat cafe, but this time,
              more "techy" attire. That website is made using HTML, CSS and JavaScript, standard stuff...`,
          }
        ])
        scrollBottom(appChatContainer);
        setTimeout(conversationSetB2, 6000);
    }

    const conversationSetB2 = () => {
        counterId.current++;
        setConversation(prevArray => [
          ...prevArray,
          {
              id: counterId.current,
              message:  `This website however actually uses React.js and the addon [react-router-dom].
              So, it feels like a multi-page website
              despite being a one-page website. Neat framework!`,
          }
        ])
        scrollBottom(appChatContainer);
        setTimeout(conversationSetB3, 6000);
    }

    const conversationSetB3 = () => {
        counterId.current++;
        setConversation(prevArray => [
          ...prevArray,
          {
              id: counterId.current,
              message: `I had alot of fun making this artwork. I also have my main portfolio website you can access through this link!`,
          }
        ])
        scrollBottom(appChatContainer);
        setTimeout(conversationSetB4, 2000);
    }

    const conversationSetB4 = () => {
        counterId.current++;
        setConversation(prevArray => [
          ...prevArray,
          {
              id: counterId.current,
              message: `https://tofusandpancakes.github.io/`,
          }
        ])
        scrollBottom(appChatContainer);
    }

    if (location.pathname === "/character1" && conversationRef.current === 0){
      console.log("Test!");
      conversationRef.current = 1;
      console.log(conversationRef);
      conversation1();
    }

    if (location.pathname === "/character2" && conversationRef.current === 0){
      console.log("Test!");
      conversationRef.current = 1;
      console.log(conversationRef);
      conversation1();
    }

    if (location.pathname === "/character1" && conversationRefA.current === 0 && conversationRefEnd.current === 1){
      setTimeout(conversationSetA, 2000);
      conversationRefA.current = 1;
    }

    if (location.pathname === "/character2" && conversationRefB.current === 0 && conversationRefEnd.current === 1){
      setTimeout(conversationSetB, 2000);
      conversationRefB.current = 1;
    }

  },[location.pathname]);

  const toggleChat = () => {
    var appChat = document.getElementById("appChatActive");
    var appChatStyle = getComputedStyle(appChat);

    var appChatMini = document.getElementById("appChatInactive");
    var appChatStyleMini = getComputedStyle(appChatMini);

    if (appChatStyle.getPropertyValue('visibility') == "hidden"){
      appChat.style.visibility = 'visible';
      appChat.style.opacity = 1;

      appChatMini.style.visibility = 'hidden';
      appChatMini.style.opacity = 0;

    } else {
      appChat.style.visibility = 'hidden';
      appChat.style.opacity = 0;

      appChatMini.style.visibility = 'visible';
      appChatMini.style.opacity = 1;
    }
  }

  const toggleNotice = () => {
    var appNotice = document.getElementById("appNotice");
    var appNoticeStyle = getComputedStyle(appNotice);

    appNotice.style.visibility = 'hidden';
    appNotice.style.opacity = 0;
  }

  //Only trigger useEffect when location.pathname changes!
  //Also you cannot change a variable in useEffect, it will be lost after each render unfortunately!
  //read this for more info! https://stackoverflow.com/questions/56455887/react-usestate-or-useref?rq=1
  return (
    <div className="appWrapper">
        <Notice onClick={toggleNotice}/>
        <Header />
      <div className="appBody">
        <SideBar />
          <div className="appImageMain">
          <Routes>
          {/*DefaultRoute*/}
            <Route path="/"  element={
              <div className="dummy">
              <BodySetting/>
              <File />
              </div>
            }>
            </Route>

          {/*Character1Route*/}
          <Route path="character1" element={
            <div className="dummy">
            <BodySetting art1={"appImageSettingTabActive"}/>
            <Art1 />
            <ChatMinimize onClick={toggleChat}/>
            <ChatContainer conversation={conversation} onClick={toggleChat}/>
            </div>
          }>
          </Route>

          {/*Character2Route*/}
          <Route path="character2" element={
            <div className="dummy">
            <BodySetting art2={"appImageSettingTabActive"}/>
            <Art2 />
            <ChatMinimize onClick={toggleChat}/>
            <ChatContainer conversation={conversation} onClick={toggleChat}/>
            </div>
          }>
          </Route>

          </Routes>
          </div> {/*End of AppImageMain*/}
      </div>
    </div>
  );
}

export default App;
