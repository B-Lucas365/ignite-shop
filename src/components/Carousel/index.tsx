"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { ProductContainer, FooterProduct, Img, Product } from "./styles";

interface ProductsTypes {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export const Carousel = ({ products }: ProductsTypes) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: "auto", 
      spacing: 48
    },
  });

  return (
    <ProductContainer ref={sliderRef} className="keen">
      {products.map((product) => (
        <Product className="keen-slider__slide" key={product.id}>
          <Img src={product.imageUrl} alt="" height={420} width={380} />
          <FooterProduct>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </FooterProduct>
        </Product>
      ))}
    </ProductContainer>
  );
};
