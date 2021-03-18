import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  margin-bottom: 15px;
`

const StyledInput = styled.TextInput`
  border-color: ${props => (props.isError ? 'red' : 'gray')};
  border-width: 1px;
`

const Label = styled.Text`
  color: 'gray';
  font-size: 10px;
  letter-spacing: 2px;
`

const Error = styled.Text`
  color: 'red';
`

const Input = ({ label, error }) => {
  const isError = Boolean(error)

  return (
    <Wrapper>
      {Boolean(label) && <Label>{label}</Label>}
      <StyledInput isError={isError} />
      {isError && <Error>{error}</Error>}
    </Wrapper>
  )
}

export default Input;