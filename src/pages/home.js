import React from "react";
import { EmailForm, Feature } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>

          <EmailForm>
            <EmailForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </EmailForm.Text>
            <EmailForm.Input placeholder="Email address" />
            <EmailForm.Button>Try 30 days free</EmailForm.Button>
          </EmailForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
