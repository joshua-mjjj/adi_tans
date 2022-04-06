import React from "react";

// reactstrap components
import {
  Button,
  Input,
  Container,
  Row,
  Col,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { add_mentor_profile } from "_actions/user.actions";
import FileBase from "react-file-base64";

const profileMentorDetails = {
  // latitude: "",
  // longitude: "",
  maximum_team: "",
  minimum_team: "",
  years_of_experience: "",
  business_name: "",
  project_type: "",
  owner: "",
};

function AddProfileMentor() {
  const dispatch = useDispatch();
  const [mentorProfile, setMentorProfile] =
    React.useState(profileMentorDetails);
  console.log(mentorProfile);
  // const [pin, setPin] = React.useState(null);
  // const [investment_plan, setInvest_plan] = React.useState(null);
  // const [profile_type, setProfile_type] = React.useState(null);
  // const [photo, setPhoto] = React.useState(null);
  //   {
  //   "id_name": "Kampala Investemnts",
  //   "investment_plan": 500000,
  //   "latitude": 0.3878565,
  //   "longitude": 32.9765,
  //   "project_type": 1,
  //   "owner": 12
  // }
  const handleClearForm = () => {
    setMentorProfile(profileMentorDetails);
  };

  const handle_create_mentor_profile = (e) => {
    // console.log(pin);
    // console.log(investment_plan);
    // console.log(profile_type);
    // console.log(photo.name);
    // console.log(photo);

    // const uploadData = new FormData();
    // uploadData.append("profile_image", photo, photo.name);
    // uploadData.append("pin", pin);
    // uploadData.append("investment_plan", investment_plan);
    // uploadData.append("profile_type", profile_type);

    // send uploadData oject to api
    e.preventDefault();
    if (mentorProfile) {
      if (
        // mentorProfile.latitude &&
        // mentorProfile.longitude &&
        mentorProfile.minimum_team &&
        mentorProfile.maximum_team &&
        mentorProfile.years_of_experience &&
        mentorProfile.business_name &&
        mentorProfile.project_type &&
        mentorProfile.owner &&
        mentorProfile.profile_pic
      ) {
        dispatch(
          add_mentor_profile(
            // mentorProfile.latitude,
            // mentorProfile.longitude,
            mentorProfile.minimum_team,
            mentorProfile.maximum_team,
            mentorProfile.years_of_experience,
            mentorProfile.business_name,
            mentorProfile.project_type,
            mentorProfile.owner,
            mentorProfile.profile_pic
          )
        );
      }
    }
    handleClearForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMentorProfile({
      ...mentorProfile,
      [name]: value,
    });
  };
  // const handle_photo = (e) => {
  //   setPhoto(e.target.files[0]);
  // };

  //  {
  //     "latitude": 0.3211264,
  //     "longitude": 32.5910528,
  //     "minimum_team": 3,
  //     "maximum_team": 5,
  //      "years_of_experience": "5",
  //       "business_name": "Enterprises",
  //     "profile_image": null,
  //     "project_type": 1,
  //     "owner": 24
  // }

  return (
    <>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Create your mentorship profile</h2>
            <Form
              className="contact-form"
              onSubmit={handle_create_mentor_profile}
            >
              <Row>
                <Col md="6">
                  <label>Business name</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      onChange={handleInputChange}
                      value={mentorProfile.business_name}
                      type="text"
                      name="business_name"
                    />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Years of experience</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Years of experience"
                      onChange={handleInputChange}
                      value={mentorProfile.years_of_experience}
                      type="text"
                      name="years_of_experience"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <label>Preferred maximum team number</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Number"
                      onChange={handleInputChange}
                      value={mentorProfile.maximum_team}
                      type="text"
                      name="maximum_team"
                    />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Preferred minimum team number</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Number"
                      onChange={handleInputChange}
                      value={mentorProfile.minimum_team}
                      type="text"
                      name="minimum_team"
                    />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Owner</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Owner"
                      onChange={handleInputChange}
                      value={mentorProfile.owner}
                      type="text"
                      name="owner"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <label>
                    Project Type(Section you would like to mentor in.)
                  </label>
                  <Select
                    onChange={handleInputChange}
                    disableUnderline
                    displayEmpty
                    fullWidth
                    value={mentorProfile.project_type}
                    style={{
                      fontSize: "13px",
                      color: "#1b1f23",
                      border: "1px solid #cfd7de",
                      height: "33px",
                      borderRadius: "5px",
                    }}
                    name="project_type"
                  >
                    <MenuItem value="1">Rabbitry</MenuItem>
                    <MenuItem value="2">Piggery</MenuItem>
                    <MenuItem value="3">Poultry</MenuItem>
                  </Select>
                </Col>
                <Col md="6">
                  <label>Profile Avatar</label>
                  <InputGroup>
                    <FileBase
                      type="file"
                      onDone={(base64) =>
                        setMentorProfile({
                          ...mentorProfile,
                          profile_pic: base64,
                        })
                      }
                      id="profile_pic"
                      style={{ border: "2px solid #cfd7de", display: "block" }}
                      name="profile_pic"
                      multiple={false}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Button
                    className="btn-fill"
                    type="submit"
                    color="success"
                    size="sm"
                  >
                    Create Profile
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddProfileMentor;
