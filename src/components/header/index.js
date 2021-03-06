import React from "react";
import { Link } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/header";

export default function Header({ background = true, children, ...restProps }) {
  return background ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
