import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export const BodySetting = ({ art1, art2 }) => {
    return (
      <div className="appImageSetting">
        <div className="appImageSettingTools">
          &nbsp;
        </div>
        <div className="appImageSettingTabs">
        <Link to={`/character1`}>
          <div className={art1}>
            <p>afterEffectsInspired</p>
            <img src={'./img/close.svg'} alt="Icon"></img>
          </div>
        </Link>
        <Link to={`/character2`}>
          <div className={art2}>
            <p>webSiteInspired</p>
            <img src={'./img/close.svg'} alt="Icon"></img>
          </div>
        </Link>
        </div>
      </div>
    )
}

BodySetting.defaultProps = {
    art1: "appImageSettingTab",
    art2: "appImageSettingTab"
}

BodySetting.propTypes = {
    art1: PropTypes.string,
    art2: PropTypes.string,
}


export default BodySetting
