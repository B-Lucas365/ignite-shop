'use client'
import { Header } from "../components/Header";
import {
  FooterProduct,
  HomeContainer,
  Icons,
  Img,
  Product,
  ProductContainer,
} from "./styles";

import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import shirt1 from "@/public/camisetas/Shirt-1.png";
import shirt2 from "@/public/camisetas/Shirt-2.png";
import shirt3 from "@/public/camisetas/Shirt-3.png";

export default function Home() {
  
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
      
    }
  })

  return (
    <HomeContainer>
      <Header />

      <ProductContainer ref={sliderRef} className="keen">
        <Product className="keen-slider__slide">
          <Img src={shirt1} alt="" height={420} width={380}/>

          <FooterProduct>
            <strong>Shirt x</strong>
            <span>R$ 79,90</span>
          </FooterProduct>
        </Product>

        <Product className="keen-slider__slide">
          <Img src={shirt2} alt="" height={420} width={380}/>

          <FooterProduct>
            <strong>Shirt x</strong>
            <span>R$ 79,90</span>
          </FooterProduct>
        </Product>

        <Product className="keen-slider__slide">
          <Img src={shirt3} alt="" height={420} width={380}/>

          <FooterProduct>
            <strong>Shirt x</strong>
            <span>R$ 79,90</span>
          </FooterProduct>
        </Product>

        <Product className="keen-slider__slide">
          <Img src={shirt3} alt="" height={420} width={380}/>

          <FooterProduct>
            <strong>Shirt x</strong>
            <span>R$ 79,90</span>
          </FooterProduct>
        </Product>
      </ProductContainer>
    </HomeContainer>
  );
}
