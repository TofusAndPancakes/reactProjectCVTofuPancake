import { Link } from 'react-router-dom';

export const Art2 = () => {
    return (
      <div className="appImage">
        <div className="appImageContent">
          <Link to={`/character1`}>
            <img src={'./img/webArt.png'} alt="Web"></img>
          </Link>
        </div>
      </div>
    )
}

export default Art2
