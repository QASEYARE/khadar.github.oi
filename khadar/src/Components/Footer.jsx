// Footer.js
import React from "react";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';

const FooterContainer = styled.footer`
  background-color: #f1f1f1;
  padding: 10px 10px;
  color: #333;
  with: 200px;
  margin-top 450px
  margin-botton 2px
 
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 25;
 
 
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 0px;
`;

const FooterTitle = styled.h3`
  font-size: 2.2em;
  margin-bottom: 0px;
`;

const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 0.9em;
  display: block;
  margin-bottom: 10px;

  &:hover {
    color: #0071c2;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Booking Section */}
        <FooterColumn>
          <FooterTitle>Booking</FooterTitle>
          <FooterLink href="#make-a-reservation">Make a Reservation</FooterLink>
          <FooterLink href="#my-bookings">My Bookings</FooterLink>
          <FooterLink href="#cancellation-policy">Cancellation Policy</FooterLink>
          <FooterLink href="#group-bookings">Group Bookings</FooterLink>
        </FooterColumn>

        {/* Help & Support */}
        <FooterColumn>
          <FooterTitle>Help & Support</FooterTitle>
          <FooterLink href="#contact-us">Contact Us</FooterLink>
          <FooterLink href="#faq">FAQs</FooterLink>
          <FooterLink href="#customer-support">Customer Support</FooterLink>
          <FooterLink href="#feedback">Feedback</FooterLink>
        </FooterColumn>

        {/* Company Info */}
        <FooterColumn>
          <FooterTitle>Info</FooterTitle>
          <FooterLink href="#about-us">About Us</FooterLink>
          
          <FooterLink href="#terms">Terms & Conditions</FooterLink>
          <FooterLink href="#privacy-policy">Privacy Policy</FooterLink>
        </FooterColumn>
      </FooterContent>

      {/* Social Media Icons */}

      <SocialIconsContainer>
        <SocialIcon url="https://twitter.com" />
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://whatsapp.com" />
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://linkedin.com" />
      </SocialIconsContainer>
    </FooterContainer>
  );
};

export default Footer;
