"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import shirt1 from "@/public/camisetas/Shirt-1.png";
import shirt2 from "@/public/camisetas/Shirt-2.png";
import shirt3 from "@/public/camisetas/Shirt-3.png";
import { ProductContainer, FooterProduct, Icons, Img, Product } from "./styles";

export const Carousel = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <ProductContainer ref={sliderRef} className="keen">
      <Product className="keen-slider__slide">
        <Img src={shirt1} alt="" height={420} width={380} />

        <FooterProduct>
          <strong>Shirt x</strong>
          <span>R$ 79,90</span>
        </FooterProduct>
      </Product>

      <Product className="keen-slider__slide">
        <Img src={shirt2} alt="" height={420} width={380} />

        <FooterProduct>
          <strong>Shirt x</strong>
          <span>R$ 79,90</span>
        </FooterProduct>
      </Product>

      <Product className="keen-slider__slide">
        <Img src={shirt3} alt="" height={420} width={380} />

        <FooterProduct>
          <strong>Shirt x</strong>
          <span>R$ 79,90</span>
        </FooterProduct>
      </Product>

      <Product className="keen-slider__slide">
        <Img src={shirt3} alt="" height={420} width={380} />

        <FooterProduct>
          <strong>Shirt x</strong>
          <span>R$ 79,90</span>
        </FooterProduct>
      </Product>
    </ProductContainer>
  );
};
