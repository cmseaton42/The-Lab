import React from "react";
import styled from "styled-components";

import boy_1 from "./images/boy-1.png";
import boy_2 from "./images/boy-2.png";
import girl_1 from "./images/girl-1.png";
import girl_2 from "./images/girl-2.png";
import man_1 from "./images/man-1.png";
import man_2 from "./images/man-2.png";
import man_3 from "./images/man-3.png";
import man_4 from "./images/man-4.png";
import man_5 from "./images/man-5.png";

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

export const ImageWrapper = styled(Container)`
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    border: ghostwhite solid 4px;
    box-sizing: border-box;
    overflow: hidden;
    margin: 5px 20px 5px 20px;
    border-radius: 50%;
    box-shadow: 0px 4px 25px -3px grey;
    transition: all 200ms ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 6px 40px -3px grey;
        transition: all 200ms ease-in-out;
        cursor: pointer;
    }
`;

const ActiveImageWrapper = styled(ImageWrapper)`
    height: 220px;
    width: 220px;
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const SampleImage = ({ imageUri }) => {
    return (
        <ImageWrapper>
            <Image src={imageUri} />
        </ImageWrapper>
    );
};

export const images = [
    {
        src: boy_1,
        key: "boy1"
    },
    {
        src: boy_2,
        key: "boy2"
    },
    {
        src: girl_1,
        key: "girl1"
    },
    {
        src: girl_2,
        key: "girl2"
    },
    {
        src: man_1,
        key: "man1"
    },
    {
        src: man_2,
        key: "man2"
    },
    {
        src: man_3,
        key: "man3"
    },
    {
        src: man_4,
        key: "man4"
    },
    {
        src: man_5,
        key: "man5"
    }
];

export const renderActive = img => {
    return (
        <ActiveImageWrapper>
            <Image src={img.src} key={img.key} />
        </ActiveImageWrapper>
    );
};

export const renderImages = imgs => imgs.map(img => <SampleImage key={img.key} imageUri={img.src} />);
