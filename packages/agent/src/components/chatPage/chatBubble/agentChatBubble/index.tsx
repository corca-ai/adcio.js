import { keyframes } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

import { B3, B5, color } from '@corca-ai/design-system';
import styled from '@emotion/styled';

import { Skeleton } from '../../../../styles/skeleton';
import { Profile } from '../../../icon/Profile';
import { BaseChatBubbleContents } from '../../style';

type QuestionChip = {
  questions: string[];
  sendChat: (question: string) => void;
  showQuestions: boolean;
};

interface Props extends PropsWithChildren {
  loading: boolean;
  chip?: QuestionChip;
}

export function AgentChatBubble({ loading, children, chip }: Props) {
  const { t } = useTranslation();

  return (
    <Container>
      <Profile size={30} />
      {loading ? (
        <LoadingGap>
          {/* <B5 c="grey-50">알맞은 상품을 찾고 있어요..</B5> */}
          <Skeleton width="80%" height="13px" />
          <Skeleton width="50%" height="13px" />
        </LoadingGap>
      ) : (
        <>
          <Contents>
            <B3>{typeof children === 'string' ? t(children) : children}</B3>
          </Contents>
          <ChipListContainer>
            {chip?.showQuestions && (
              <ChipList>
                {chip.questions.map((question) => (
                  <Chip
                    key={question}
                    disabled={loading}
                    onClick={() => chip.sendChat(question)}
                  >
                    <B5 c="grey-80">{question}</B5>
                  </Chip>
                ))}
              </ChipList>
            )}
          </ChipListContainer>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;
  align-self: stretch;
`;

const LoadingGap = styled(BaseChatBubbleContents)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: ${color.white};
`;

const Contents = styled(BaseChatBubbleContents)`
  background: ${color.white};
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ChipListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${fadeInUp} 0.5s ease-out forwards;
  opacity: 0;
`;

const ChipList = styled.div`
  display: flex;
  max-width: 360px;
  align-items: center;
  align-content: center;
  gap: 5px;
  flex-wrap: wrap;
`;

const Chip = styled.button<{ disabled: boolean }>`
  display: flex;
  height: 30px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${color['grey-40']};
  background: ${color.white};
  cursor: pointer;
`;
