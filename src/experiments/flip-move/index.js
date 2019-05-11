import React, { useState } from "react";
import styled from "styled-components";

import { images, renderImages, renderActive } from "./image";

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

const DemoContainer = styled(Container)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const WaitingContainer = styled(Container)`
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const ActiveContainer = styled(Container)`
    height: 300px;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    flex
`;

const FlipMove = () => {
    const [active, setActive] = useState(images[0]);
    const [waiting, setWaiting] = useState(images.slice(1));

    return (
        <DemoContainer>
            <ActiveContainer>{renderActive(active)}</ActiveContainer>
            <WaitingContainer>{renderImages(waiting)}</WaitingContainer>
        </DemoContainer>
    );
};

export default FlipMove;
