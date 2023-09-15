import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


const EmpDetail = () => {
    const [empdata, empdatachange] = useState({});
    const { empid } = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-12"> */}
                    <div className="container">

                        <div className="card row" style={{ 'textAlign': 'left' }}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body"></div>
                            {
                                empdata &&
                                <div>
                                    <h2>Employee Name: {empdata.name} ({empdata.id}) </h2>
                                    <h3>Contact Details</h3>
                                    <h4>Email: {empdata.email}</h4>
                                    <h4>Phone: {empdata.phone}</h4>

                                    <Link className="btn btn-danger" to='/'>Back</Link>
                                </div>
                            }
                        </div>
                    </div>
                {/* </div>
            </div> */}
        </div>
    )
}

export default EmpDetail