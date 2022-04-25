import { Tab } from '@headlessui/react';
import { StyledTabs } from './Tabs.styled';
import GlobalStyles from "../../Theme/Global";

export default function Tabs({tabs, tabSize = 'medium', tabGap = 1}) {
    const StyledTab = StyledTabs(Tab);
    const StyledTabPanel = StyledTabs(Tab.Panel);
    const StyledTabList = StyledTabs(Tab.List);

    return (
        <>
            <GlobalStyles />
            <Tab.Group>
            <StyledTabList tabGap={tabGap}>
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