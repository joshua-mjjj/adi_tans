import React from "react";

// reactstrap components
import { Label, FormGroup, Input, Row, Col } from "reactstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { delete_profile } from "_actions/profile.actions";

function ProfilePage({ account_type, mentors, profiles }) {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <li>
          {account_type === "mentor" ? (
            <>
              {mentors.map((mentor, i) => (
                <Row key={i}>
                  <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={
                        require("assets/img/faces/clem-onojeghuo-2.jpg").default
                      }
                    />
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                    <h6>
                      {mentor.business_name}
                      <br />
                      <small>
                        Years of experience: {mentor.years_of_experience}
                      </small>
                    </h6>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                    <div className="d-flex align-items-center justify-content-between">
                      <FormGroup check>
                        <Label check>
                          <Input
                            defaultChecked
                            defaultValue=""
                            type="checkbox"
                          />
                          <span className="form-check-sign" />
                        </Label>
                      </FormGroup>
                      <DeleteIcon
                        style={{
                          alignSelf: "center",
                          marginTop: "22px",
                          color: "tomato",
                        }}
                      />
                      <EditIcon
                        style={{
                          alignSelf: "center",
                          marginTop: "22px",
                          color: "green",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              ))}
            </>
          ) : (
            <>
              {profiles.map((profile, i) => (
                <Row key={i}>
                  <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={
                        require("assets/img/faces/clem-onojeghuo-2.jpg").default
                      }
                    />
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                    <h6>
                      {profile.id_name}
                      <br />
                      <small>Investemnt Plan : {profile.investment_plan}</small>
                    </h6>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                    <div className="d-flex align-items-center justify-content-between">
                      <FormGroup check>
                        <Label check>
                          <Input
                            defaultChecked
                            defaultValue=""
                            type="checkbox"
                          />
                          <span className="form-check-sign" />
                        </Label>
                      </FormGroup>
                      <DeleteIcon
                        style={{
                          alignSelf: "center",
                          marginTop: "22px",
                          color: "tomato",
                        }}
                        onClick={() => dispatch(delete_profile(profile.id))}
                      />
                      <EditIcon
                        style={{
                          alignSelf: "center",
                          marginTop: "22px",
                          color: "green",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </li>
      </div>
    </>
  );
}

export default ProfilePage;
