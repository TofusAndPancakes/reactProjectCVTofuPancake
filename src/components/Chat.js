export const Chat = ({conversation}) => {
    //Inspiration for this: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
    return (
        <>
        {conversation.map((conversationContent) => {
          return(
            <div className="appChatTextContainer" key={conversationContent.id}>
            <img src={'./img/chatTail.svg'} alt="Icon"></img>
              <div className="appChatTextContainerPadding" key={conversationContent.id}>
                <p key={conversationContent.id}>{conversationContent.message}</p>
              </div>
            </div>
          );
        }
        )}
        </>
    )
}

export default Chat
