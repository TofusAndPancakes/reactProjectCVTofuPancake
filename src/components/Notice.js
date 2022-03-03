export const Notice = ({onClick}) => {
    return (
      <div className="appNotice" id="appNotice">
        <div className="appNoticeModal">
          <div className="appNoticeModalWindow">
          <div className='icon' onClick={onClick}>
            <img src={'./img/close.svg'} alt="Icon"></img>
          </div>
          </div>
          <div className="appNoticeModalContent">
            <h2>Note!</h2>
            <hr/>
            <p>This website is a parody of Clip Studio Paint.</p>
            <br/>
            <p>This is not done for any commerical
            means and only for demonstration of techniques.</p>
            <br/>
            <p>To start the experience, close this modal and press
            the file in the center of the starting page!</p>
            <br/>
            <button onClick={onClick}><p>Ok!</p></button>
          </div>
        </div>
      </div>
    )
}
export default Notice
