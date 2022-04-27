import { Tab } from '@headlessui/react';
import { StyledButton, StyledTabs } from './Tabs.styled';
import GlobalStyles from "../../Theme/Global";
import PropTypes from "prop-types";
import Typography from '../Typography/Typography';
import Theme from '../../Theme/Theme';
import React, { useState, useEffect } from 'react';

export default function Tabs({tabs, tabSize = 'medium', gap = 1, direction = 'row', space = true}) {
    const [fontSize, setFontSize] = useState(1);
    const [selectedTab, setSelectedTab] = useState(0);
    const StyledTab = StyledTabs(Tab);
    const StyledTabPanel = StyledTabs(Tab.Panel);
    const StyledTabList = StyledTabs(Tab.List);

    useEffect(() => {
        if (tabSize === 'small') {
            setFontSize(0.7);
        } else if (tabSize === 'medium') {
            setFontSize(1);
        } else if (tabSize === 'large') {
            setFontSize(2);
        };
    }, [tabSize]);

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
                    return <StyledTab tabSize={tabSize} key={index}>
                        <StyledButton index={index} onClick={() => changeSelectedTab(index)} selectedTab={selectedTab}>
                            <Typography label={tab.label} color={Theme.typography.white} variant='p' size={fontSize} />
                        </StyledButton>
                    </StyledTab>
                })}
            </StyledTabList>
            <Tab.Panels>
                {tabs.map((tab, index) => {
                    return <StyledTabPanel key={index}>
                        {tab.content}
                    </StyledTabPanel>
                })}
                <StyledTabPanel>Content 1</StyledTabPanel>
            </Tab.Panels>
        </Tab.Group>
        </>
    )
}

Tabs.propTypes = {
    tabs: PropTypes.array.isRequired,
    tabSize: PropTypes.oneOf(['small', 'medium', 'large']),
    gap: PropTypes.number,
    direction: PropTypes.oneOf(['row', 'column']),
    space: PropTypes.bool
}