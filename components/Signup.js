import next from 'next';
import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { useRouter } from "next/router";
import { route } from 'next/dist/next-server/server/router';

const Example = ({ register, setFirstName, setLastName, setEmail, setPhone, setInfo_session}) => {

const router = useRouter();

  return (
    <section className="section bg-light" id="sign-up">
        <Container>
            <h3 className="font-weight-normal text-dark">Attend <span className="text-primary font-weight-medium">a free info session</span></h3>
            <Form action="/api/applicant" method="POST">
            <Row form>
                <Col md={6}>
                <FormGroup>
                <Label for="fist">First Name</Label>
                <Input onChange={setFirstName} type="text" name="first" id="first" placeholder="" required/>
            </FormGroup>
            <FormGroup>
                <Label for="last">Last Name</Label>
                <Input onChange={setLastName} type="text" name="last" id="last" placeholder="" required/>
            </FormGroup>
            <FormGroup>
                    <Label for="email">Email</Label>
                    <Input onChange={setEmail} type="email" name="email" id="email" placeholder="Email address" />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone</Label>
                <Input onChange={setPhone} type="tel" name="phone" id="phone" placeholder=""/>
            </FormGroup>
            <FormGroup>
                <Label for="info_session">Choose an info session</Label>
                <Input onChange={setInfo_session} type="select" name="info_session" id="info_session">
                <option>Monday, February 13th 10:00am</option>
                <option>Monday, February 13th 5:30pm</option>
                <option>Monday, February 20th 10:00am</option>
                <option>Monday, February 20th 5:30pm</option>
                <option>None of these fit my schedule</option>
                </Input>
            </FormGroup>
                </Col>    
            </Row>
            <FormGroup check>
                {/* <Input type="checkbox" name="check" id="exampleCheck"/> */}
                {/* <Label for="exampleCheck" check></Label> */}
            </FormGroup>
            <Button color={"primary"} 
            // type="submit"
            onSubmit={async (e) => {
                e.preventDefault();
                const applicant = await fetcher("/api/applicant", {first: firstName, last: lastName, email: email, phone: phone, info_session: info_session})
                    .then(router.push("/success/registered"));
               
            }}
            >Sign up</Button>
            </Form>
        </Container>
    </section>
  );
}

export default Example;