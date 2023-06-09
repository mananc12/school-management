import React from 'react'

export class AdmitCard extends React.Component {
  render() {
    return (
      <div className='admitCardouter'>
        <div className='admitCard'>
          <div className='admitCardTop'>
            <div className='schooldetails'>
              <h2>XYZ International School</h2>
              <h4>Board Examination</h4>
            </div>
          </div>

          <div className='admitCardMiddle'>
            <h3 style={{ textAlign: 'center' }}>Student Details</h3>
            <div className='details'>
              <div className='left-details'>
                <p>Name</p>
                <p>Class</p>
                <p>Roll No</p>
              </div>
              <div className='right-details'>
                <p>Manan</p>
                <p>{this.props.classname}</p>
                <p>{this.props.rollno}</p>
              </div>
            </div>
          </div>
          <div className='admitCardBottom' style={{ textAlign: 'center' }}>
            <h4>In case any problem occurs, contact your school.</h4>
            {/* <h4>In case any problem occurs, contact your school.</h4> */}
          </div>
        </div>
      </div>
    )
  }
}
export default AdmitCard