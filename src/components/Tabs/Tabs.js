import { Tab } from '@headlessui/react';
import { StyledTabs } from './Tabs.styled';
import GlobalStyles from "../../Theme/Global";

export default function Tabs({tabs, tabSize = 'medium',}) {
    const StyledTab = StyledTabs(Tab);
    const StyledTabPanel = StyledTabs(Tab.Panel);

    return (
        <>
            <GlobalStyles />
            <Tab.Group>
            <Tab.List>
                {tabs.map(tab => {
                    return <StyledTab
                    tabSize={tabSize}
                    >
                        {tab.label}
                    </StyledTab>
                })}
            </Tab.List>
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