// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react';
import styled, { css } from 'styled-components';
import { Section } from './SharedStyling';

type HybridSectionProps = {
  curve?: 'both' | 'bottom' | undefined;
  id: string;
  children: React.ReactNode
};

/**
 * This wrapper component takes all the styling from SharedStyling "Section"
 * and adds other desired common effects
 */

const HybridSection = (props: HybridSectionProps) => {
    return (
        <StyledSection {...props}>
            {props.children}
        </StyledSection>
    );
};

const StyledSection = styled(Section)`
    min-height: 100vh;
    background: ${props => props.background || '#121315'};

    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};

    ${props => {
        if (props.curve === 'bottom') {
            return css`
                &:after {
                    position: absolute;
                    z-index: 1;
                    content: "";
                    top: 100%;
                    left: 0;
                    right: 0;
                    height: 60px;
                    width: 100%;
                    background: ${props => props.background || '#121315'};
                    border-bottom-left-radius: 48px;
                    border-bottom-right-radius: 48px;
                }
            `;
        }

        if (props.curve === 'both') {
            return css`
                &:before {
                    position: absolute;
                    z-index: 1;
                    content: "";
                    top: -48px;
                    left: 0;
                    right: 0;
                    height: 60px;
                    width: 100%;
                    background: ${props => props.background || '#121315'};
                    border-top-left-radius: 48px;
                    border-top-right-radius: 48px;
                }

                &:after {
                    position: absolute;
                    z-index: 1;
                    content: "";
                    top: 100%;
                    left: 0;
                    right: 0;
                    height: 60px;
                    width: 100%;
                    background: ${props => props.background || '#121315'};
                    border-bottom-left-radius: 48px;
                    border-bottom-right-radius: 48px;
                }
            `;
        }

        return '';
    }}
`;

export default HybridSection;