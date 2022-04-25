import { Tab } from '@headlessui/react';
import { StyledTabs } from './Tabs.styled';
import GlobalStyles from "../../Theme/Global";
import PropTypes from "prop-types";
import Typography from '../Typography/Typography';
import Theme from '../../Theme/Theme';
import { useState, useEffect } from 'react';

export default function Tabs({tabs, tabSize = 'medium', tabGap = 1, tabDirection = 'row'}) {
    const [fontSize, setFontSize] = useState(1);
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
    const h = x => {
        console.log(x)
    }

    return (
        <>
            <GlobalStyles />
            <Tab.Group>
            <StyledTabList
            tabGap={tabGap}
            tabDirection={tabDirection}
            >
                {tabs.map(tab => {
                    return <StyledTab
                    tabSize={tabSize}
                    >
                        <Typography label={tab.label} color={Theme.typography.white} variant='p' size={fontSize} />
                    </StyledTab>
                })}
            </StyledTabList>
            <Tab.Panels>
                {tabs.map(tab => {
                    return <StyledTabPanel>
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
    tabGap: PropTypes.number,
    tabDirection: PropTypes.oneOf(['row', 'column'])
}