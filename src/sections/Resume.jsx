import React from 'react'
import { myResumeContent } from '../data'
import TimeLineContent from '../components/TimeLineContent'
import SectionTitle from '../components/SectionTitle'

const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        <div className="row">
          <SectionTitle title="Resume" des="my education, experience" />
          
          <div className="timeline education col-sm-6">
            <h1 className="mb-4">Education</h1>
            <div className="line education mt-4">

              {
                myResumeContent["education"].map((obj, idx) => (
                  <TimeLineContent
                    key={idx}
                    years={obj.years}
                    event={obj.event}
                    location={obj.location}
                    description={obj.description}
                  />
                ))
              }

            </div>
          </div>


          <div className="timeline experience col-sm-6">
            <h1 className="mb-4">Experience</h1>
            <div className="line mt-4">

              {
                myResumeContent["experience"].map((obj, idx) => (
                  <TimeLineContent
                    key={idx}
                    years={obj.years}
                    event={obj.event}
                    location={obj.location}
                    description={obj.description}
                  />
                ))
              }

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Resume