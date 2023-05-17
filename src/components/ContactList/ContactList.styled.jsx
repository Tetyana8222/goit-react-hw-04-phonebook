import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

export const ContactCard = styled.li`
  width: 205px;
  height: auto;
  padding: 8px;
  border: 1px solid white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.23), 0px 1px 1px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.5);
`;

export const DeleteContactBtn = styled.button`
  border: 1px solid #fff;
  border-radius: 5px;
`;
