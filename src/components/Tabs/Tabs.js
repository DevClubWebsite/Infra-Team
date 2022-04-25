import { Tab } from '@headlessui/react';
import { StyledTabs } from './Tabs.styled';

export default function Tabs({tabs, tabSize = medium,}) {
    const StyledTab = StyledTabs(Tab);

    return (
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
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
    )
}