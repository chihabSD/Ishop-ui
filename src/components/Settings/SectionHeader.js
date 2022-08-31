import React from 'react'
import styled from 'styled-components';
import { COLORS } from '../../constants/theme';

const SectionHeader = ({ title, style }) => {
    return (
    <HeadeContainer style={{...style}}>{title}</HeadeContainer>
    )
}

export default SectionHeader
const HeadeContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  background-color: ${COLORS.gray};
`;