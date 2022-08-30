import React from 'react'
import styled from 'styled-components';
import { COLORS } from '../../constants/theme';

const SectionHeader = ({ title }) => {
    return (
    <HeadeContainer>{title}</HeadeContainer>
    )
}

export default SectionHeader
const HeadeContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  background-color: ${COLORS.gray};
`;