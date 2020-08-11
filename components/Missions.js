const Missions = (props) => {

    console.log(props, "missions");
    return (
        <div className="row">   
            {props.data.map((launch, i) => (
                    <div key={i} className="col-md-4">
                        <div className="col-box">
                            <img src={launch.links.mission_patch_small} />
                            <p>{launch.mission_name} #{launch.flight_number}</p>
                            <h5>Mission ids:</h5>                 
                            {(launch.mission_id.length) ?
                                <ul className="listing-col-box">
                                    {launch.mission_id.map((id, index) => (
                                        <li key={index}>{id}</li>
                                    ))}
                                </ul>
                                : null}
                        
                            <h5>Launch Year : <span>{launch.launch_year}</span></h5>
                            <h5>Successfull launch : <span>{launch.launch_success?"Yes":"No"}</span></h5>
                            <h5>Successfull landing : <span>{launch.land_success?"Yes":"No"}</span></h5>
                        </div>
                   </div>
                 )
            )}
        </div> 

    );
};

export default Missions;