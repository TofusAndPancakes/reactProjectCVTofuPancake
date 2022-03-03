export const Header = () => {
    return (
        <>
        <div className="appWindow">
          <div className="title">
            <p>PLIC STUDIO COMPACT</p>
          </div>
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
        <div className="appMenu">
          <div className="function">
            <p>File</p>
          </div>
          <div className="function">
            <p>Edit</p>
          </div>
          <div className="function">
            <p>Animation</p>
          </div>
          <div className="function">
            <p>Layer</p>
          </div>
          <div className="function">
            <p>Select</p>
          </div>
          <div className="function">
            <p>View</p>
          </div>
          <div className="function">
            <p>Filter</p>
          </div>
        </div>
        </>
    )
}


export default Header
