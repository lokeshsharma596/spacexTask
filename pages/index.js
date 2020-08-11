import BaseLayout from "../components/BaseLayout"
import React from 'react';
import Missions from "../components/Missions"
import { useState, useEffect } from "react"
import { getApiCall } from "../utils/services"
import nextExpressPage from "next-express/page";
import MyLoader from "../components/Loader"

const Index = (props) => {
  const launchYear = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  const [filter, setFilter] = useState({})
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      if (Object.keys(filter).length > 0) {
        setData([])
        const res = await getApiCall({ ...filter, limit: 100 })
        console.log(res, "form useeffect res");
        setData(res)
      } else {
        setData(props.launches)
      }
    }
    getData()

  }, [filter])

  return (
    <BaseLayout>
      <h3>SpaceX Launch Programs</h3>
      <div className="row border-body">
        <div className="col-md-3 sidebar-column">
          <h3>Filters</h3>
          <h3 className="launch-year-title border-bottom">Launch Year</h3>
          <div className="launch-filters">

            {launchYear.map((year, i) => (
              <button onClick={() => setFilter({ ...filter, launch_year: year })}>{year}</button>
            ))}

            <p>Successfull Launch</p>
            <button  onClick={() => setFilter({ ...filter, launch_success: true })}>True</button>
            <button  onClick={() => setFilter({ ...filter, launch_success: false })}>False</button>

            <p>Successfull Landing</p>
            <button  onClick={() => setFilter({ ...filter, land_success: true })}>True</button>
            <button  onClick={() => setFilter({ ...filter, land_success: false })}>False</button>

            <button  onClick={() => setFilter({})} >Clear Filter</button>
          </div>

        </div>


        <div className="col-md-9">
          {data.length ?
            <Missions data={data} />
            : <MyLoader />}
        </div>
      </div>
      <p>developed By: Lokesh Sharma</p>
    </BaseLayout>
  )
}

export default nextExpressPage(Index);







