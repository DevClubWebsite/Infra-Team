import { Disclosure } from '@headlessui/react'
import PropTypes from "prop-types";
import Theme from '../../Theme/Theme';
import React from 'react';
import { StyledBox, StyledDisclosure, StyledDisclosureButton, StyledDisclosurePanel, StyledChevronUpIcon } from "./Disclosure.styled"

const openedStyle = {
    transform: 'rotate(45deg)'
};

export default function DisclosureStory({
    disclosures,
    width,
    height,
    background = Theme.background.light,
    border = Theme.background.dark,
    color = Theme.typography.white,
    backgroundButton = Theme.background.yellow
    })
    {
        return (
            <>
                <StyledBox disclosures={disclosures.length} width={width} height={height} background={background} border={border}>
                {disclosures.map((disclosure, index) => {
                    return <Disclosure key={index} as={StyledDisclosure} width={width} height={height}>
                    {({ open }) => (
                        <>
                        <Disclosure.Button as={StyledDisclosureButton} width={width} height={height} color={color} backgroundButton={backgroundButton}>
                            <span>{disclosure.text}</span>
                            <StyledChevronUpIcon color={color} style={(open) ? openedStyle : {}}/>
                        </Disclosure.Button>
                        <Disclosure.Panel as={StyledDisclosurePanel} color={color}>
                            {disclosure.content}
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                })}
                </StyledBox>
            </>
        )
};

DisclosureStory.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    background: PropTypes.string,
    border: PropTypes.string,
    color: PropTypes.string
};