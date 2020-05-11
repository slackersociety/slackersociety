import styled from 'styled-components';

export const ImageCardWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-color: rgba(199, 49, 123, 0);
    z-index: 1;
    transition: 0.25s ease-in-out;
    @media (max-width: 1024px) {
      background-color: rgba(199, 49, 123, 0.65);
    }
  }
  &:hover {
    &::before {
      background-color: rgba(199, 49, 123, 0.65);
    }
    .post_details {
      opacity: 1;
    }
    .post_title {
      > span {
        transform: translateY(0);
      }
    }
    .read_time {
      > span {
        transform: translateY(0);
      }
    }
  }
`;

export const PostPreview = styled.div`
  position: relative;
  overflow: hidden;
  a {
    display: block;
  }
`;

export const PostDetails = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  padding: 30px;
  opacity: 0;
  z-index: 2;
  text-align: center;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out;
  @media (max-width: 1400px) {
    padding: 25px;
  }
  @media (max-width: 1024px) {
    opacity: 1;
    padding: 20px;
  }
  @media (max-width: 990px) {
    opacity: 1;
    padding: 20px;
  }
`;

export const PostTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  overflow: hidden;
  color: #fff;
  margin-bottom: 10px;
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
  @media (max-width: 575px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
  @media (max-width: 990px) and (min-width: 768px) {
    font-size: 14px;
    max-height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  > span {
    display: block;
    transform: translateY(100%);
    transition: 0.35s ease-in-out;
    @media (max-width: 1024px) {
      transform: translateY(0);
    }
  }
`;

export const ReadingTime = styled.div`
  color: #fff;
  overflow: hidden;
  @media (max-width: 1024px) {
    font-size: 13px;
  }
  > span {
    display: block;
    transform: translateY(100%);
    transition-delay: 0.1s;
    transition: 0.35s ease-in-out;
    @media (max-width: 1024px) {
      transform: translateY(0);
    }
  }
`;
