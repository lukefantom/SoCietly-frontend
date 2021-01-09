import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import UserImage from "../../Components/userImage/userImage";

// Luxon (Date/Time Module)
import { DateTime } from "luxon";

//styling
import style from "./jobUpdates.module.css";

export default function JobUpdates() {
  const [jobUpdates, setJobUpdates] = useState();
  // An array of objects containing user journey information

  useEffect(() => {
    async function getJobUpdates() {
      let res = await fetch(`https://falcon5ives.herokuapp.com/userjourneys`);
      let data = await res.json();
      setJobUpdates(data.payload);
    }

    getJobUpdates();

    setInterval(() => {
      getJobUpdates();
    }, 1800000);
    // fetches job updates every 30 minutes
  }, []);

  return (
    <div className={style.jobSec}>
      <h4 className={style.secTitle}>Job Updates</h4>
      {jobUpdates &&
        jobUpdates.map((item, index) => {
          // Format start date
          const sdt = DateTime.fromISO(item.startdate);
          const newStartDate = sdt.toLocaleString(
            DateTime.DATE_MED_WITH_WEEKDAY
          );

          return (
            <div key={index} className={style.newJobSec}>
              <UserImage user={item} alt={`${item.name} profile`} />
              <div class={style.hoverme}>
                <span>🎉</span>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
              {/* <p className={style.hoverme}>
                🎉
                <br /> {item.name} {item.surname} started a new job!
              </p> */}
              <h5 className={style.title}>
                {" "}
                {item.jobtitle} at {item.employer}
              </h5>
              <h5 className={style.date}>{newStartDate}</h5>
            </div>
          );
        })}
    </div>
  );
}
