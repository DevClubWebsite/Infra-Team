import { Tab } from '@headlessui/react';
import { StyledTabs } from './Tabs.styled';
import GlobalStyles from "../../Theme/Global";
import PropTypes from "prop-types";

export default function Tabs({tabs, tabSize = 'medium', tabGap = 1, tabDirection = 'row'}) {
    const StyledTab = StyledTabs(Tab);
    const StyledTabPanel = StyledTabs(Tab.Panel);
    const StyledTabList = StyledTabs(Tab.List);

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
                        {tab.label}
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