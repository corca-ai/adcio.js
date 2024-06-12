import styled from '@emotion/styled';

export const Skeleton = styled.div<{ width?: string; height?: string }>`
  display: block;
  background-color: rgba(0, 0, 0, 0.1);
  height: auto;
  border-radius: 6px;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};

  position: relative;
  overflow: hidden;
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3) 60%,
      transparent
    );
    transform: translateX(-100%);
    animation: wave 1.3s linear 0.7s infinite;
  }

  @keyframes wave {
    0% {
      transform: translateX(-100%);
    }
    60% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
