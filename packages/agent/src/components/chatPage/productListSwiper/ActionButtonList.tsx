import { Button } from "@corca-ai/design-system";
import styled from "@emotion/styled";

import { Product } from "@adcio.js/api/controller/v1";

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
      <Button
        size="small"
        variant="outline"
        type="button"
        onClick={openProductLink}
      >
        상품 보러가기
      </Button>
      {/* TODO: 상세 정보 API 정합 필요 */}
      <Button
        size="small"
        variant="outline"
        type="button"
        onClick={() => onExplain(product)}
      >
        더 자세히 설명해주세요
      </Button>
    </ActionButtonWrapper>
  );
}

const ActionButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-self: stretch;
`;
