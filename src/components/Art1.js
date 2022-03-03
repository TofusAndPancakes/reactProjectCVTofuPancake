import { Link } from 'react-router-dom';

export const Art1 = () => {
    return (
      <div className="appImage">
        <div className="appImageContent">
          <Link to={`/character2`}>
            <img src={'./img/afterEffectsArt.png'} alt="AfterEffects"></img>
          </Link>
        </div>
      </div>
    )
}

export default Art1
