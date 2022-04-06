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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function AddProfileMentor() {
  const [pin, setPin] = React.useState(null)
  const [investment_plan, setInvest_plan] = React.useState(null)
  const [profile_type, setProfile_type] = React.useState(null)
  const [photo, setPhoto] = React.useState(null)
//   {
//   "id_name": "Kampala Investemnts",
//   "investment_plan": 500000,
//   "latitude": 0.3878565,
//   "longitude": 32.9765,
//   "project_type": 1,
//   "owner": 12
// }

  const handle_create_profile = () => {
    console.log(pin)
    console.log(investment_plan)
    console.log(profile_type)
    console.log(photo.name)
    console.log(photo)

    const uploadData = new FormData();
    uploadData.append('profile_image', photo, photo.name);
    uploadData.append('pin', pin);
    uploadData.append('investment_plan', investment_plan);
    uploadData.append('profile_type', profile_type);

    // send uploadData oject to api

  }

  const handle_photo = (e) => {
    setPhoto(e.target.files[0])
  }

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
            <Form className="contact-form">
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
                      // onChange={(e) => setPin(e.target.value)}
                      // value={pin}
                      type="text" 
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
                      // onChange={(e) => setInvest_plan(e.target.value)}
                      // value={investment_plan}
                      type="text" />
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
                      // onChange={(e) => setPin(e.target.value)}
                      // value={pin}
                      type="text" 
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
                      // onChange={(e) => setInvest_plan(e.target.value)}
                      // value={investment_plan}
                      type="text" />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <label>Project Type(Section you would like to mentor in.)</label>
                     <Select
                        // onChange={(e) => setProfile_type(e.target.value)}
                        disableUnderline
                        displayEmpty
                        fullWidth
                        // value={profile_type}
                        style={{
                              fontSize: '13px',
                              color: '#1b1f23',
                              border: '1px solid #cfd7de',
                              height: '33px',
                              borderRadius: '5px',
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
                      // onChange={handle_photo}
                      id="profile_pic"
                      style={{ border: '2px solid #cfd7de', display: 'block' }}
                      // value={profile_pic}
                      // onChange={this.handleFile}
                    />
                  </InputGroup>
                </Col>
              </Row>
              
              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Button 
                      className="btn-fill" 
                      onClick={handle_create_profile}
                      color="success" 
                      size="sm">
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
