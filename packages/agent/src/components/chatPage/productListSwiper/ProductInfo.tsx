import { B1, B4, B5 } from "@corca-ai/design-system";
import styled from "@emotion/styled";

import { Product } from "@adcio.js/api/controller/v1";

import { FlexBox } from "../../../styles/layout";

interface Props {
  product: Product;
  tags: string[];
}

export function ProductInfo({ product, tags }: Props) {
  const { name, discountPrice, price } = product;

  const discountRate = calculateDiscountRate({
    discountPrice,
    price,
  });

  const hasDiscountPrice = discountRate !== null;

  return (
    <ProductInfoBox direction="column" align="flex-start">
      <B1 c="main-black">{name}</B1>
      <PriceInfoWrapper>
        {hasDiscountPrice && <B5 c="grey-50">{price?.toLocaleString()}원</B5>}
        <DiscountInfoWrapper>
          {discountRate && <B1 c="error-20">{discountRate}%</B1>}
          <B1 c="main-black">
            {(hasDiscountPrice ? discountPrice : price)?.toLocaleString()}원
          </B1>
        </DiscountInfoWrapper>
      </PriceInfoWrapper>
      <TagInfoWrapper>
        {tags.map((tag) => (
          <Tag>
            <B4>#{tag}</B4>
          </Tag>
        ))}
      </TagInfoWrapper>
    </ProductInfoBox>
  );
}

type DiscountPrice = number | null;

const calculateDiscountRate = ({
  discountPrice,
  price,
}: {
  discountPrice: DiscountPrice;
  price: number;
}) => {
  if (price && discountPrice && discountPrice < price) {
    return Math.floor((1 - discountPrice / price) * 100);
  }
  return null;
};

const ProductInfoBox = styled(FlexBox)`
  gap: 10px;
  align-self: stretch;
`;

const PriceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 2px;
`;

const DiscountInfoWrapper = styled(FlexBox)`
  gap: 2px;
`;

const TagInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px;
`;

const Tag = styled.div`
  display: flex;
  text-wrap: nowrap;
  background-color: #f3f4f6;
  padding: 4px;
  border-radius: 4px;
`;
