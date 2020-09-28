import React from "react";
import { Accordion, EmailForm } from "../components";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <EmailForm>
        <EmailForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </EmailForm.Text>
        <EmailForm.Input placeholder="Email address" />
        <EmailForm.Button>Try 30 days free</EmailForm.Button>
      </EmailForm>
    </Accordion>
  );
}
