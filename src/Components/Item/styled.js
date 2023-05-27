import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  transition: background-color 200ms ease;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.09);
  }
`;
export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Data = styled.div``;

export const Tipo = styled.span`
  font-weight: bold;
`;
