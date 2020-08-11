const Missions = (props) => {

    return (
        <div>
            {props.data.map((launch, i) => (
                    <div key={i} className="col-md-4">
                    <div>
                    <img src={launch.links.mission_patch_small} />
                    <p>{launch.mission_name} #{launch.flight_number}</p>
                    <h5>Mission ids:</h5>                 
                    {(launch.mission_id.length) ?
                        <ul>
                            {launch.mission_id.map((id, index) => (
                                <li key={index}>{id}</li>
                            ))}
                        </ul>
                        : null}
                
                    <h5>Launch Year : {launch.launch_year}</h5>
                    {console.log(launch.land_success)}
                    <h5>Successfull launch : {launch.launch_success?'Yes':'No'}</h5>
                    <h5>Successfull landing : {launch.land_success?'Yes':'No'}</h5>
                   </div>
                   </div>
                 )
            )}
        </div> 

    );
};

export default Missions;