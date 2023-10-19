"use client";
import { ProductContainer, FooterProduct, Img, Product } from "./styles";
import { Carousel } from "@mantine/carousel";

interface ProductsTypes {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export const CarouselComponent = ({ products }: ProductsTypes) => {
  return (
    <ProductContainer>
      <Carousel
        height={420}
        slideSize={200}
        align="start"
        slidesToScroll={1}
        slideGap={"md"}
        withControls={false}
      >
        {products.map((product) => (
          <Carousel.Slide key={product.id} className="product">
            <Product>
              <Img src={product.imageUrl} alt="" height={420} width={380} />
              <FooterProduct>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </FooterProduct>
            </Product>
          </Carousel.Slide>
        ))}
      </Carousel>
    </ProductContainer>
  );
};
