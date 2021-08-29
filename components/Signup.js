import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <section className="section bg-light" id="sign-up">
        <Container>
            <h3 className="font-weight-normal text-dark">Attend <span className="text-primary font-weight-medium">a free info session</span></h3>
            <Form>
            <Row form>
                <Col md={6}>
                <FormGroup>
                <Label for="exampleAddress">First Name</Label>
                <Input type="email" name="address" id="exampleAddress" placeholder=""/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress2">Last Name</Label>
                <Input type="text" name="address2" id="exampleAddress2" placeholder=""/>
            </FormGroup>
            <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email address" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress">Phone</Label>
                <Input type="tel" name="address" id="exampleAddress" placeholder=""/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Choose an info session</Label>
                <Input type="select" name="select" id="exampleSelect">
                <option>Monday, September 13th 10:00am</option>
                <option>Monday, September 13th 5:30pm</option>
                <option>Monday, September 20th 10:00am</option>
                <option>Monday, September 20th 5:30pm</option>
                <option>None of these fit my schedule</option>
                </Input>
            </FormGroup>
                </Col>    
            </Row>
            <FormGroup check>
                {/* <Input type="checkbox" name="check" id="exampleCheck"/> */}
                {/* <Label for="exampleCheck" check></Label> */}
            </FormGroup>
            <Button color={"primary"}>Sign up</Button>
            </Form>
        </Container>
    </section>
  );
}

export default Example;