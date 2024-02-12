import styled from 'styled-components';

export const FilterTitle = styled.span`
display: block;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: ${p => p.theme.spasing(3)};
`;

export const StyleInput = styled.input`
    display: block;
    margin-bottom: ${p => p.theme.spasing(5)};
    border: ${p => p.theme.borders.grey};
    `;