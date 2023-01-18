import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;
export const AnswerContainer = styled.div`
  width: 100%;
  flex-grow: 3;
  display: flex;
  align-items: center;
`;
export const PointsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AnswerClosed = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const Number = styled.div`
  font-size: 4rem;
`;
export const ShowEffect = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  -moz-animation: showHide 1s forwards; /* Firefox */
  -webkit-animation: showHide 1s forwards; /* Safari and Chrome */
  -ms-animation: showHide 1s forwards; /* IE10 */
  -o-animation: showHide 1s forwards; /* Opera */
  animation: showHide 1s forwards;

  @-webkit-keyframes showHide {
    /* Chrome, Safari */
    0% {
      width: 0%;
    }
    40% {
      width: 0%;
    }
    60% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  @-moz-keyframes showHide {
    /* FF */
    0% {
      width: 0%;
    }
    40% {
      width: 0%;
    }
    60% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  @-ms-keyframes showHide {
    /* IE10 */
    0% {
      width: 0%;
    }
    40% {
      width: 0%;
    }
    60% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  @-o-keyframes showHide {
    /* Opera */
    0% {
      width: 0%;
    }
    40% {
      width: 0%;
    }
    60% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  @keyframes showHide {
    0% {
      width: 0%;
    }
    40% {
      width: 0%;
    }
    60% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
