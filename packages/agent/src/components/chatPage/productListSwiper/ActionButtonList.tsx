import { Product } from "@adcio.js/api/controller/v1";
import { color } from "@corca-ai/design-system";
import styled from "@emotion/styled";

interface Props {
  product: Product;
  onExplain: (product: Product) => void;
}

export function ActionButtonList({ product, onExplain }: Props) {
  const openProductLink = () => {
    window.open(`https://andar.co.kr${product.url}`, "_blank");
  };

  return (
    <ActionButtonWrapper>
      <ActionButton type="button" onClick={openProductLink}>
        상품 보러가기
      </ActionButton>
      <ActionButton type="button" onClick={() => onExplain(product)}>
        더 자세히 설명해주세요
      </ActionButton>
    </ActionButtonWrapper>
  );
}

const ActionButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-self: stretch;
`;

const ActionButton = styled.button`
  display: flex;
  height: 30px;
  padding: 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${color["grey-40"]};
  background: ${color.white};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;
