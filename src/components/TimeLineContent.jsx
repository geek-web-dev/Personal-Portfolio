
const TimeLineContent = ({ years, event, location, description }) => {
  return (
    <div className="timeline-content">
      <span className="year">{years}</span>
      <div className="text ms-3">
        <h5 className="event">{event}</h5>
        <h6>{location}</h6>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default TimeLineContent