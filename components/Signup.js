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
            <Form action="https://calendly.com/hacktheworld/info-session-signup" method="POST">
            <Button color={"primary"} type="submit">
                Sign up
            </Button>
            </Form>
        </Container>
    </section>
  );
}

export default Example;