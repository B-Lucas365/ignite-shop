"use client";
import styled from "styled-components";
import Image from "next/image";

export const Img = styled(Image)``;

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 456px;

  .mantine-Carousel-root {
    max-width: calc(100vw - ((100vw - 1180px) / 2));
    margin-left: auto;
  }
`;

export const Product = styled.a`
  width: 500px;
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  

  img {
    object-fit: cover;
  }

  footer {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    padding: 1.3rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(0, 0, 0, 0.6);

    transform: translateY(110%);
    opacity: 0;
    transition: all 0.2s ease-in-out;

    overflow: hidden;

    strong {
      font-size: 1.25rem;
    }

    span {
      font: 2rem;
      font-weight: bold;
      color: var(--green300);
    }
  }

  &:hover {
    footer {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

export const FooterProduct = styled.footer``;
