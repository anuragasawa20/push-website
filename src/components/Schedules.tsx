// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React, { useEffect, useRef, useState } from 'react';

// External Components
import styled from 'styled-components';
import '@splidejs/react-splide/css/core';
import { Splide, SplideTrack } from '@splidejs/react-splide';

// Internal Components
import useMediaQuery from 'hooks/useMediaQuery';
import useOnScreen from 'hooks/useOnScreen';
import Left from '../assets/brb/others/left.svg';
import Right from '../assets/brb/others/right.svg';
import { ReactComponent as Arrow } from '../assets/brb/schedules/arrow.svg';
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from './SharedStylingV2';

// Internal Configs
import { device } from 'config/globals';
import { citiesList } from 'utils/BRBScheduleList';

const Schedules = ({ sectionRef }: { sectionRef: React.MutableRefObject<null> }) => {
  const isMobile = useMediaQuery('(max-width: 480px)');

  const [index, setIndex] = useState(0);

  const scrollRef = useRef(null);
  const isEndRef = useRef(null);
  const isLastSchedule = useOnScreen(isEndRef);

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  // const [First, Second, Third, Fourth] = scheduleList;
  // const desktopList = [
  //   [...First, ...Second],
  //   [...Third, ...Fourth],
  // ];
  // const mobileList = [[...First], [...Second], [...Third], [...Fourth]];
  // const renderList = isMobile ? mobileList : desktopList;

  // const [eventHasEnded, setEventHasEnded] = useState(false);

  const checkDateStatus = (fDate) => {
    const currentDate = new Date();
    const eventDate = new Date(fDate);
    const eventGap = eventDate - currentDate;

    if (eventGap < 0) {
      //This means that the event has ended
      // setEventHasEnded(true);
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    citiesList.forEach((element) => {
      element.map((item) => {
        item.hasEnded = checkDateStatus(item.date);
      });
    });
  }, []);

  // const isMobile = useDeviceWidthCheck(600);


  return (
    <Container ref={sectionRef}>
      <ItemHV2>
        <Header>Schedule</Header>
      </ItemHV2>
      <Splide
        style={{ margin: isMobile ? '0 auto' : 'auto' }}
        options={{
          width: isMobile ? '100vw' : '100vw',
          type: 'slide',
          gap: '100px',
          perPage: 1,
          padding: { left: isMobile ? 0 : 80, right: isMobile ? 0 : 80 },
          perMove: 1,
          pagination: false,
          omitEnd: true,
          slideFocus: true,
          gap: isMobile ? '2em' : '1.5em',
          fixedWidth: isMobile ? '100vw' : '413px',
        }}
        hasTrack={false}
        aria-label="..."
      >
        <SplideTrack
          style={{ paddingBottom: '29px' }}
          ref={scrollRef}
        >
          {citiesList.map((item, i) => {
            return (
              <SplideContainer
                className="splide__slide is-visible"
                key={item}
              >
                {item?.map((schedule, index) => {
                  return (
                    <ScheduleCardContainer
                      key={index}
                      background={schedule.hasEnded ? '#2A2A39' : schedule?.backgroundColor}
                      style={{ cursor: schedule.hasEnded ? 'not-allowed' : 'pointer' }}
                      title={`${schedule?.title}`}
                      onClick={() => {
                        if (!schedule.hasEnded) {
                          openLink(schedule?.link);
                        }
                      }}
                    >
                      <ImageContainer>
                        <Image
                          src={require(`../assets/brb/schedules/${schedule?.srcref}.png`)}
                          srcSet={`${require(`../assets/brb/schedules/${schedule?.srcref}@2x.png`)} 2x, ${require(`../assets/brb/schedules/${schedule?.srcref}@3x.png`)} 3x`}
                          alt={`${schedule?.alt}`}
                        />
                      </ImageContainer>
                      <svg
                        style={{ visibility: 'hidden', position: 'absolute' }}
                        width="0"
                        height="0"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                      >
                        <defs>
                          <filter id="goo">
                            <feGaussianBlur
                              in="SourceGraphic"
                              stdDeviation="8"
                              result="blur"
                            />
                            <feColorMatrix
                              in="blur"
                              mode="matrix"
                              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                              result="goo"
                            />
                            <feComposite
                              in="SourceGraphic"
                              in2="goo"
                              operator="atop"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <ScheduleData>
                        <PlaceContainer>
                          <PlaceName color={schedule.hasEnded ? '#FFF' : '#b0ffc3'}>{schedule?.place}</PlaceName>
                          {!schedule.hasEnded && <Arrow />}
                        </PlaceContainer>
                        <DateContainer
                          color={schedule.hasEnded ? '#494968' : '#fff'}
                          onClick={() => checkDateStatus(schedule?.date)}
                        >
                          {schedule?.date}
                        </DateContainer>
                      </ScheduleData>
                      {i === citiesList?.length - 1 && <span ref={isEndRef}></span>}
                    </ScheduleCardContainer>
                  );
                })}
              </SplideContainer>
            );
          })}
        </SplideTrack>

        <div style={{ position: 'relative' }}>
          <ActionContainer className="splide__arrows">
            <Button
              background={index > 0 ? '#E64DE9' : '#2A2A39'}
              onClick={() => (index !== 0 ? setIndex((prev) => prev - 1) : null)}
              title="Previous page"
              className="splide__arrow splide__arrow--prev"
            >
              <Icon src={Left} />
            </Button>
            {/* <Button background={direction === 'right' ? '#E64DE9' : '#2A2A39'} onClick={() => setDirection('right')} className="splide__arrow splide__arrow--next"> */}
            <Button
              background={!isLastSchedule ? '#E64DE9' : '#2A2A39'}
              onClick={() => (!isLastSchedule ? setIndex((prev) => prev + 1) : null)}
              title="Next page"
              className="splide__arrow splide__arrow--next"
            >
              <Icon src={Right} />
            </Button>
            <ButtonV2
              border="1px solid #E64DE9"
              onClick={() => window.open('https://discord.gg/cTRqvYzXpW', '_blank')}
              title="Participate Virtually"
            >
              <ItemHV2>
                <ParticipateButtonInnerText>Participate Virtually</ParticipateButtonInnerText>
                <ItemVV2 width="15px">
                  <ArrowSmall />
                </ItemVV2>
              </ItemHV2>
            </ButtonV2>
          </ActionContainer>
        </div>
      </Splide>
    </Container>
  );
};

const Container = styled(ItemVV2)`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 144px;
  @media (max-width: 480px) {
    margin-left: 0px;
  }
`;

const ArrowSmall = styled(Arrow)`
  width: inherit;
  margin-left: 10px;
`;

const ParticipateButtonInnerText = styled(SpanV2)`
  @media ${device.mobileS} {
    flex: 1;
  }
`;

const SplideContainer = styled.div`
  // width: auto !important;
  // margin: 0px !important;

  @media (max-width: 480px) {
    // margin-right:15px !important;
    // margin-left:15px !important;
  }
`;

const Header = styled.span`
  font-size: 46px;
  font-weight: 400;
  font-family: Glancyr;
  color: #fff;
  margin: 0px 0px 37px;
  @media (max-width: 480px) {
    margin: 0px 0px 27px;
  }
`;

const ScheduleCardContainer = styled.button`
  width: 413px;
  height: 324px;
  padding: 0px;
  overview: hidden;
  background: ${(props) => props.background};
  display: flex;
  margin-top: 1.5em;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 25px;
  transition: all 0.3s;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 90vw;
    margin: 20px auto;
    border-radius: 25px;
  }
`;

const ImageContainer = styled.div`
  width: 94%;
  height: 217px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 85%);
  border-radius: 0px 25px 0px;
  border-bottom-left-radius: 47px;
  @media (max-width: 480px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0% 84%);
    width: 94%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const ScheduleData = styled(ItemVV2)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  // padding: 22px 40px 25px 37px;
  padding: 0px 40px 0px 37px;
  box-sizing: border-box;
`;

const PlaceContainer = styled.div`
  width: 100%;
  max-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const PlaceName = styled(SpanV2)`
  font-family: Green Brooks;
  font-size: 42px;
  font-weight: 400;
  // color: #b0ffc3;
  color: ${(props) => props.color};
`;

const DateContainer = styled(SpanV2)`
  height: 32px;
  // color: #fff;
  color: ${(props) => props.color};
  font-family: Glancyr;
  font-size: 20px;
  font-weight: 550;
  letter-spacing: 0.6px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
`;

const Button = styled(ButtonV2)`
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  height: 64px;
  width: 64px;
  // background:#E64DE9;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 13px;
  margin-left: 80px;
  width: 1280px;
  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.mobileL} {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
  }
`;

export default Schedules;
