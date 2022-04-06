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
import { add_profile } from "_actions/user.actions";
const profileDetails = {
  id_name: "",
  investment_plan: "",
  latitude: "",
  longitude: "",
  profile_type: "",
  owner: "",
  profile_pic: "",
};

function AddProfile() {
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = React.useState(profileDetails);
  console.log(userProfile);
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
    setUserProfile(profileDetails);
  };

  const handle_create_profile = (e) => {
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

    // // send uploadData oject to api
    // // dispatch(add_profile(uploadData));
    // console.log(uploadData);
    e.preventDefault();
    if (userProfile) {
      if (
        userProfile.id_name &&
        userProfile.investment_plan &&
        userProfile.latitude &&
        userProfile.longitude &&
        userProfile.profile_type &&
        userProfile.owner &&
        userProfile.profile_pic
      ) {
        dispatch(
          add_profile(
            userProfile.id_name,
            userProfile.investment_plan,
            userProfile.latitude,
            userProfile.longitude,
            userProfile.profile_type,
            userProfile.owner,
            userProfile.profile_pic
          )
        );
      }
    }
    handleClearForm();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Create a profile</h2>
            <Form className="contact-form" onSubmit={handle_create_profile}>
              <Row>
                <Col md="6">
                  <label>Profile Identification Name(PIN)</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      onChange={handleInputChange}
                      value={userProfile.id_name}
                      type="text"
                      name="id_name"
                    />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Investment Plan(UG SHS)</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Investment Plan"
                      onChange={handleInputChange}
                      value={userProfile.investment_plan}
                      type="text"
                      name="investment_plan"
                    />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Latitude</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i class="bi bi-globe"></i>
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      placeholder="Latitude"
                      onChange={handleInputChange}
                      value={userProfile.latitude}
                      type="text"
                      name="latitude"
                    />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Longitude</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i class="bi bi-globe"></i>
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      placeholder="Latitude"
                      onChange={handleInputChange}
                      value={userProfile.longitude}
                      type="text"
                      name="longitude"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <label>Owner</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Investment Plan"
                      onChange={handleInputChange}
                      value={userProfile.owner}
                      type="text"
                      name="owner"
                    />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Profile Type</label>
                  <Select
                    onChange={handleInputChange}
                    name="profile_type"
                    disableUnderline
                    displayEmpty
                    fullWidth
                    value={userProfile.profile_type}
                    style={{
                      fontSize: "13px",
                      color: "#1b1f23",
                      border: "1px solid #cfd7de",
                      height: "33px",
                      borderRadius: "5px",
                    }}
                  >
                    <MenuItem value="Rabbitry">Rabbitry</MenuItem>
                    <MenuItem value="Piggery">Piggery</MenuItem>
                    <MenuItem value="Poultry">Poultry</MenuItem>
                  </Select>
                </Col>
                <Col md="6">
                  <label>Profile Avatar</label>
                  <InputGroup>
                    <input
                      type="file"
                      onChange={handleInputChange}
                      id="profile_pic"
                      style={{ border: "2px solid #cfd7de", display: "block" }}
                      value={userProfile.profile_pic}
                      name="profile_pic"
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Button
                    className="btn-fill"
                    // onClick={handle_create_profile}
                    color="success"
                    size="sm"
                    type="submit"
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

export default AddProfile;
