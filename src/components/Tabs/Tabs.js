import { Tab } from '@headlessui/react';
import { StyledTabs } from './Tabs.styled';
import GlobalStyles from "../../Theme/Global";
import PropTypes from "prop-types";
import Typography from '../Typography/Typography';
import Theme from '../../Theme/Theme';
import React, { useState } from 'react';
import Button from '../Button/Button';

export default function Tabs(
    {tabs,
    gap = 1,
    direction = 'row',
    space = true,
    width,
    height,
    selectedbackground = Theme.background.yellow,
    background = Theme.background.light,
    border = 'none',
    color = Theme.typography.white}
    ){

    const [fontSize, setFontSize] = useState(1);
    const [selectedTab, setSelectedTab] = useState(0);
    const StyledTab = StyledTabs(Tab);
    const StyledTabPanel = StyledTabs(Tab.Panel);
    const StyledTabList = StyledTabs(Tab.List);

    const changeSelectedTab = (index) => {
        setSelectedTab(index);
    };

    return (
        <>
            <GlobalStyles />
            <Tab.Group>
            <StyledTabList
            gap={gap}
            direction={direction}
            space={space}
            >
                {tabs.map((tab, index) => {
                    return <StyledTab
                    key={index}
                    height={height}
                    width={width}
                    background={index === selectedTab ? selectedbackground : background}
                    border={border}
                    color={color}
                    selectedbackground={selectedbackground}
                    >
                        <Typography label={tab.label} color={color} variant='p' size={fontSize}/>
                    </StyledTab>
                })}
            </StyledTabList>
            <Tab.Panels>
                {tabs.map((tab, index) => {
                    return <StyledTabPanel key={index}>
                            {tab.content}
                    </StyledTabPanel>
                })}
            </Tab.Panels>
        </Tab.Group>
        </>
    )
};

Tabs.propTypes = {
    tabs: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    background: PropTypes.string,
    selectedbackground: PropTypes.string,
    border: PropTypes.string,
    color: PropTypes.string,
    gap: PropTypes.number,
    direction: PropTypes.oneOf(['row', 'column']),
    space: PropTypes.bool
};