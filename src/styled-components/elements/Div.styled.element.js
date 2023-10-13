import { styled } from 'styled-components';

export const Div = styled.div`
    ${props => (props.$properties) ? props.$properties : ''}
`;