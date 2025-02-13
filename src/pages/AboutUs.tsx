// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import ReactGA from 'react-ga';
import { BsArrowUpRight } from 'react-icons/bs';
import styled from 'styled-components';

// Internal Components
import { Atag, ContentV2, H2V2, ItemHV2, ItemVV2, SpanV2, HeroHeaderV2 } from 'components/SharedStylingV2';
import HybridSection from '../components/HybridSection';

function AboutUs() {
  // React GA Analytics
  ReactGA.pageview('/aboutus');

  return (
    <AboutUsWrapper>
      <HybridSection
        curve="bottom"
        id="aboutus"
        padding="40px 160px 0px 160px"
      >
        <ContentV2
          className="contentBox"
          alignSelf="center"
          padding="40px 0px"
          maxWidth="1140px"
        >
          <ItemHV2
            margin="120px 0 0 0"
            flex="1"
          >
            <ItemVV2 justifyContent="center">
              <HeroHeaderV2>About Push</HeroHeaderV2>
            </ItemVV2>
          </ItemHV2>

          <ItemHV2 flex="1">
            <ItemVV2>
              <Atag
                href="https://angel.co/company/push-protocol"
                title="Job Openings"
                target="_blank"
                background="#DD44B9"
                borderRadius="16px"
                padding="14px 32px"
                fontSize="18px"
                fontWeight="500"
                letterSpacing="-0.03em"
                lineHeight="26px"
              >
                Now Hiring, Explore Careers&nbsp;&nbsp;
                <BsArrowUpRight className="anchorSVGlink" />
              </Atag>
            </ItemVV2>
          </ItemHV2>

          <ItemHV2
            flex="2"
            gap="90px"
          >
            <ItemVV2
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <SpanV2
                color="rgba(255, 255, 255, 1)"
                fontSize="26px"
                fontWeight="400"
                letterSpacing="-0.03em"
                lineHeight="142%"
              >
                Push is a decentralized middleware for all dapps, smart contracts, services, and users.
              </SpanV2>

              <SpanV2
                color="rgba(255, 255, 255, 1)"
                fontSize="26px"
                fontWeight="400"
                letterSpacing="-0.03em"
                lineHeight="142%"
              >
                Hundreds of companies and individuals are using Push to power on-chain communication in response to both
                on- and off-chain activity, enabling a dynamic and resilient communication infrastructure.
              </SpanV2>
            </ItemVV2>

            <ItemVV2
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <SpanV2
                color="rgba(255, 255, 255, 1)"
                fontSize="19px"
                fontWeight="400"
                letterSpacing="-0.03em"
                lineHeight="160%"
              >
                How Push Started Story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem dolor.
                Sed rhoncus elit a rhoncus viverra. Vivamus faucibus nec ligula sed fringilla. Suspendisse feugiat magna
                accumsan quam molestie, ac rhoncus purus cursus. Etiam et mauris sollicitudin, mattis odio eu, varius
                elit. Aliquam sed sem convallis, posuere massa posuere, dictum magna.
              </SpanV2>

              <SpanV2
                color="rgba(255, 255, 255, 1)"
                fontSize="19px"
                fontWeight="400"
                letterSpacing="-0.03em"
                lineHeight="160%"
              >
                Ut ac vulputate nulla, a facilisis ipsum. Fusce posuere diam tortor, a blandit ante commodo sit amet.
                Phasellus eleifend dapibus rutrum. Aliquam dictum leo sed mi placerat, at consectetur eros facilisis.
                Phasellus ut scelerisque erat, nec tincidunt enim. Ut lacinia justo in ligula tempus ultricies.
              </SpanV2>
            </ItemVV2>
          </ItemHV2>
        </ContentV2>
      </HybridSection>

      <HybridSection
        curve="bottom"
        id="leadership"
        background="#fff"
        padding="120px 160px 80px 160px"
      >
        <ContentV2
          className="contentBox"
          alignSelf="center"
          padding="40px 0px"
          maxWidth="1140px"
        >
          <ItemHV2>
            <ItemVV2
              justifyContent="center"
              gap="22px"
            >
              <H2V2
                fontSize="40px"
                fontWeight="700"
                letterSpacing="-0.02em"
                lineHeight="110%"
              >
                Our Leadership
              </H2V2>

              <SpanV2
                fontWeight="400"
                color="#303C5E"
                fontSize="19px"
                lineHeight="160%"
                letterSpacing="-0.03em"
              >
                The most diverse personalities have found each other at Push. Unique people with special talents and
                extraordinary stories. We are united by the joy we take in our tech and constantly push the boundaries
                of everything web3 communication.
              </SpanV2>
            </ItemVV2>
          </ItemHV2>

          <ItemHV2
            gap="24px"
            margin="60px 0 0 0"
          >
            <InvestorCards></InvestorCards>
            <InvestorCards></InvestorCards>
            <InvestorCards></InvestorCards>
            <InvestorCards></InvestorCards>
            <InvestorCards></InvestorCards>
            <InvestorCards></InvestorCards>
          </ItemHV2>

          <ItemHV2
            margin="120px 0 0 0"
            justifyContent="flex-start"
            width="640px"
          >
            <SpanV2
              color="#121315"
              fontWeight="700"
              fontSize="40px"
              lineHeight="110%"
              letterSpacing="-0.02em"
            >
              Backed by successful entrepreneurs and venture capital funds.
            </SpanV2>
          </ItemHV2>
        </ContentV2>
      </HybridSection>
    </AboutUsWrapper>
  );
}

const AboutUsWrapper = styled.div`
  & #aboutus .contentBox {
    row-gap: 48px;
  }

  #leadership {
    justify-content: flex-start;
  }
`;

const InvestorCards = styled.div`
  width: 261px;
  height: 311px;
  background: #f0dcff;
  border-radius: 48px;
`;

export default AboutUs;
