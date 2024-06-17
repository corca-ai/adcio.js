import { CSSProperties } from 'react';
import { useInView } from 'react-intersection-observer';

import { color } from '@corca-ai/design-system';
import styled from '@emotion/styled';

type CommonImageType = {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
};

interface Props extends Pick<HTMLImageElement, 'src' | 'alt'> {
  size: CommonImageType;
}

export function LazySlideImage({
  src,
  alt,
  size: { width = '100%', height = '100%' },
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ImageWrapper width={width} height={height} ref={ref}>
      {inView && <Image width={width} height={height} src={src} alt={alt} />}
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div<CommonImageType & { inView?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  transition: background-color 0.5s;
  background-color: ${({ inView }) =>
    inView ? 'transparent' : color['grey-20']};
`;

const Image = styled.img<CommonImageType>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  opacity: 1;
  transition: opacity 0.5s;
  object-fit: cover;
  border-radius: 14px 14px 0px 0px;
`;
