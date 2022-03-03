import PropTypes from 'prop-types'
import Chat from './Chat'

export const ChatContainer = ({conversation, onClick}) => {
    return (
      <div className="appChat" id="appChatActive">
        {/*AppWindow*/}
        <div className="appWindow">
          <div className="icon" onClick={onClick}>
            <img src={'./img/minimizeRight.svg'} alt="Icon"></img>
          </div>
        </div>
        {/*AppChatHeader*/}
        <div className="appChatHeader">
          <div className="appChatHeaderLeft">
            <div className="appChatHeaderLeftImage">
              <img src={'./img/profilePic.png'} alt="Icon"></img>
            </div>
            <div className="appChatHeaderLeftUser">
              <h3>Christofer Alvin</h3>
              <p>Online</p>
            </div>
          </div>
          <div className="appChatHeaderRight">
            <img src={'./img/settingCircle.svg'} alt="Icon"></img>
          </div>
        </div>
        {/*AppChatContainer*/}
          <div className="appChatContainer" id="appChatContainer">
          {conversation.length > 0 ? <Chat conversation={conversation}/>
          : ''}
          </div>
        {/*AppChatInput*/}
          <div className="appChatInput">
            <div className="appChatInputTextBox">
              <textarea id="DummyInput" name="DummyInput" rows="2"></textarea>
            </div>
            <div className="appChatInputSubmit">
              <img src={'./img/send.svg'} alt="Icon"></img>
            </div>
          </div>
        {/*End of AppChat*/}
        </div>
    )
}

export default ChatContainer
