import styled from 'styled-components';
import meImage from './assets/images/me.jpg';
import { device } from './GlobalStyle';
import SideBar from './SideBar';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <Homepage>
            <SideBar />
            <ContentWrapper>
                <div style={{ position: 'relative' }}>
                    <LeftJumbo
                        initial={{
                            x: -50,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            type: 'tween',
                            delay: 3,
                            duration: 1.5
                        }}
                    >
                        Frontend <br />
                        developer
                    </LeftJumbo>
                    <Image
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            type: 'tween',
                            delay: 1.5,
                            duration: 1.5
                        }}
                        src={meImage}
                    />
                </div>
                <TextWrapper>
                    <RightJumbo>Nick Lee</RightJumbo>
                    <SubHeading
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            delay: 3,
                            duration: 1.5
                        }}
                    >
                        Experienced front end developer driven by aesthetics. I
                        enjoy bringing designs and concepts to life.
                    </SubHeading>
                </TextWrapper>
            </ContentWrapper>
        </Homepage>
    );
};

export default Home;

/** STYLES */

const Homepage = styled.section`
    display: flex;
    align-items: center;
    height: 100vh;
    background: #dbd7d2;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    @media ${device.mobileM} {
        padding: 0 25px;
        height: 525px;
    }
    @media ${device.tablet} {
        padding: 0 50px;
        width: calc(100% - 80px);
    }
    @media ${device.laptop} {
        height: 700px;
    }
    @media ${device.desktop} {
        height: 900px;
    }
`;

const JumboText = styled(motion.h1)`
    margin: 0;
    font-size: 60px;
    line-height: 1;
    text-transform: uppercase;

    @media ${device.tablet} {
        font-size: 125px;
    }
    @media ${device.laptop} {
        font-size: 150px;
    }
`;

const LeftJumbo = styled(JumboText)`
    position: relative;
`;

const RightJumbo = styled(JumboText)`
    text-align: right;
    z-index: 1;
`;

const Image = styled(motion.img)`
    margin-left: 4px;
    height: 165px;

    @media ${device.mobileL} {
        position: absolute;
        bottom: -230px;
        left: 4px;
        margin: 0;
        height: 225px;
    }
    @media ${device.tablet} {
        height: 280px;
        bottom: -275px;
        left: 13px;
    }
`;

const SubHeading = styled(motion.p)`
    font-size: 18px;
    text-align: right;
    text-transform: uppercase;
    margin-top: 10px;
    margin-bottom: 0;
    width: 100%;
    left: 0;

    @media ${device.laptop} {
        font-size: 25px;
        text-align: left;
        width: 540px;
        margin-top: 10px;
        margin-left: 10px;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: end;
    align-items: flex-end;
    margin-top: 50px;
    width: 100%;

    @media ${device.tablet} {
        align-items: flex-start;
        margin-top: 166px;
        width: 540px;
    }
    @media ${device.laptop} {
        margin-top: 0;
        width: 675px;
    }
`;
