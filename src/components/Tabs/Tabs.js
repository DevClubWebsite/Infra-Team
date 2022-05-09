import { Tab } from '@headlessui/react';
import { StyledTab, StyledTabPanel, StyledTabList } from './Tabs.styled';
import GlobalStyles from "../../Theme/Global";
import PropTypes from "prop-types";
import Typography from '../Typography/Typography';
import Theme from '../../Theme/Theme';
import React, { useState } from 'react';

export default function Tabs({
    tabs,
    gap = 1,
    direction = 'column',
    space = true,
    width,
    height,
    selectedbackground = Theme.background.yellow,
    background = Theme.background.light,
    border = 'none',
    selectedcolor = Theme.typography.darker,
    color = Theme.typography.white,
    fontsize = 1})
    {

    const [selectedTab, setSelectedTab] = useState(0);

    const changeSelectedTab = (index) => {
        setSelectedTab(index);
    };

    return (
        <>
            <GlobalStyles />
            <Tab.Group>
            <Tab.List as={StyledTabList}
            gap={gap}
            direction={direction}
            space={`${space}`}
            >
                {tabs.map((tab, index) => {
                    return <Tab as={StyledTab}
                    key={index}
                    height={height}
                    width={width}
                    background={index === selectedTab ? selectedbackground : background}
                    border={border}
                    color={color}
                    selectedbackground={selectedbackground}
                    >
                        <div onClick={() => changeSelectedTab(index)}>
                            <Typography color={index === selectedTab ? selectedcolor : color} variant='p' size={fontsize}>
                                {tab.text}
                            </Typography>
                        </div>
                    </Tab>
                })}
            </Tab.List>
            <Tab.Panels>
                {tabs.map((tab, index) => {
                    return <Tab.Panel as={StyledTabPanel} key={index}>
                            {tab.content}
                    </Tab.Panel>
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
    selectedcolor: PropTypes.string,
    gap: PropTypes.number,
    direction: PropTypes.oneOf(['row', 'column']),
    space: PropTypes.bool,
    fontsize: PropTypes.number
};