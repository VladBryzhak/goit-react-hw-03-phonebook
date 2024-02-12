import styled from 'styled-components';

export const ContactData = styled.p`
margin-right: ${p => p.theme.spasing(3)};
font-weight: 600;
text-transform: capitalize;
`;

export const Button = styled.button`
font-size: 12px;
background-color: inherit;
border: ${p => p.theme.borders.grey};
border-radius: ${p => p.theme.radius};

&:hover, &:focus {
    background-color: ${p => p.theme.colors.grey};
}
`;