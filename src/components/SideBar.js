export const SideBar = () => {
    return (
          <div className="appSideBar">
          {/*Minimize Section */}
            <div className="appSideBarMinimize">
              <img src={'./img/doubleMinimize.svg'} alt="Icon"></img>
              <img src={'./img/minimizeSide.svg'} alt="Icon"></img>
            </div>
            <div className="appSideBarSetting">
              <div className="appSideBarSettingInfo">
                <img src={'./img/lines.svg'} alt="Icon"></img>
              </div>
              <div className="appSideBarSettingNav">
                <img src={'./img/brush.svg'} alt="Icon"></img>
              </div>

            </div>
          {/*Section1*/}
          <div className="appSideBarTool">
            <div className="icon">
              <img src={'./img/finder.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/rotate.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/object.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/move.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/select.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/magicWand.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/colorPicker.svg'} alt="Icon"></img>
            </div>
            <hr/>
          {/*Section2*/}
            <div className="icon">
              <img src={'./img/brush.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/pencil.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/brush.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/spray.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/lines.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/eraser.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/watercolor.svg'} alt="Icon"></img>
            </div>
            <hr/>
          {/*Section3*/}
            <div className="icon">
              <img src={'./img/bucket.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/gradient.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/square.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/manga.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/ruler.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/text.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/bubble.svg'} alt="Icon"></img>
            </div>
            <div className="icon">
              <img src={'./img/pointSelect.svg'} alt="Icon"></img>
            </div>
            </div>
            {/*Color*/}
            <div className="appSideBarColor">
              <div className="appSideBarColorOutline">
                &nbsp;
                <div className="primary">
                  <img src={'./img/gradient.svg'} alt="Icon"></img>
                </div>
                <div className="secondary">
                  <img src={'./img/gradient.svg'} alt="Icon"></img>
                </div>
              </div>
              <div className ="appSideBarColorTransparent">
                &nbsp;
              </div>
            </div>
          </div>
    )
}

export default SideBar
