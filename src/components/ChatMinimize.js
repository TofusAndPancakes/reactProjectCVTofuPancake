export const ChatMinimize = ({onClick}) => {
    return (
      <div className="appChatMinimize" id="appChatInactive">
        <div className="icon" onClick={onClick}>
          <img src={'./img/minimizeLeft.svg'} alt="Icon"></img>
        </div>
        <div className="text">
          &nbsp;
          <p>Chat - Christofer Alvin</p>
        </div>
      </div>
    )
}
export default ChatMinimize
