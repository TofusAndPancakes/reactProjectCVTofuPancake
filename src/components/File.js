import { Link } from 'react-router-dom';

export const File = () => {
    return (
      <div className="appFile">
        <Link to={`character1`}>
          <div className="icon">
            <img src={'./img/file.svg'} alt="Icon"></img>
          </div>
          <div className="text">
            <p>SketchDump2021.plic</p>
          </div>
        </Link>
      </div>
    )
}
export default File
