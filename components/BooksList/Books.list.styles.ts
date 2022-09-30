import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px;
`;

export const StyledLink = styled(Link)`
  & > a:visited {
    opacity: 0.5;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  padding: 15px 35px;
  margin-bottom: 35px;
  & > div:first-child {
    display: flex;
    gap: 10px;
  }
`;
