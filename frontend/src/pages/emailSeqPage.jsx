import EmailSequenceHeader from "@components/emailSequence/emailSeqHeader";
import EmailSequenceListing from "@components/emailSequence/emailSeqList";
import InnerWrapper from "@components/UI/innerWrapper";
import React from "react";
import { Container } from "react-bootstrap";

const EmailSequence = () => {
  return (
    <section>
      <InnerWrapper>
        <Container>
          <EmailSequenceHeader />
          <EmailSequenceListing />
        </Container>
      </InnerWrapper>
    </section>
  );
};

export default EmailSequence;