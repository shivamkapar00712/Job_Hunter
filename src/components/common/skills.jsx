import React from 'react';



const Skills = ({lable,onChange,name}) => {
  const allSkills =[
    'NodeJs','React','Express','MongoDB','MySql','Data structures and algorithms','Cloud computing',
    'Web development', 'Full-stack Developer','Mechanic','Taxi-Driver','Human Resources','Backend',
    'AI','Machine Learning'
  ]
  return ( 
    <React.Fragment>
      <p>
            <button
              className=" form-control text-left"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              {lable}
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <div className="form-check">

                <div className="row">
                  {
                    allSkills.map(s=>(
                      <React.Fragment key={s}>
                        <div className="col-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name={name}
                            value={s}
                            id={s}
                            onChange={onChange}
                          />
                          <label className="form-check-label" htmlFor={s}>
                            {s}
                          </label>
                        
                        </div>
                        <br />
                      </React.Fragment>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
   );
}
 
export default Skills;