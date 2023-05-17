import styled from '@emotion/styled';

export const Form = styled.form`
  flex-direction: column;
  max-width: 500px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  display: flex;
  gap: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.23), 0px 1px 1px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.5);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextFiled = styled.input`
  max-width: 145px;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.23), 0px 1px 1px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
`;

export const AddcontactBtn = styled.button`
  display: flex;
  justify-content: center;
  max-width: 150px;
  padding: 8px;
  border: 1px solid white;
  border-radius: 5px;
`;
