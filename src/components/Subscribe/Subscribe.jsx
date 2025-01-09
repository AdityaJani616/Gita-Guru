"use client";
import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "./bg.png";
import styled from "styled-components";

// Background styling for the section
const BgContainer = styled.div`
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

// Custom button style
const PrimaryBtn = styled.a`
  display: inline-block;
  background-color: #4caf50; /* Primary color */
  color: white;
  font-weight: 600;
  border-radius: 8px;
  padding: 12px 24px;
  box-shadow: 0px 10px 8px -7px #ffd978;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: #ff5722; /* Secondary color */
    box-shadow: 0px 10px 8px -7px #69a79c;
    transform: scale(1.05);
  }

  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

// Subscribe component
const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <BgContainer className="container py-24 md:py-48">
        <div className="flex flex-col justify-center">
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              450K+ Students are learning from us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima
            </p>
            <PrimaryBtn href="" className="!mt-8 group">
              Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </PrimaryBtn>
          </div>
        </div>
      </BgContainer>
    </section>
  );
};

export default Subscribe;
