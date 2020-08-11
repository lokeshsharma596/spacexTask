import Loader from 'react-loader-spinner'

const MyLoader = () =>{
    return (
        <div className="col-md-9">
        <Loader type="Circles" color="#00000" height={40} width={40}/>
        </div>
    )
}

export default MyLoader;