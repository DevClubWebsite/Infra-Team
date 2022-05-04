import { Disclosure } from '@headlessui/react'
import PropTypes from "prop-types";
import Theme from '../../Theme/Theme';
import React from 'react';
import { StyledBox, StyledDisclosure, StyledDisclosureButton, StyledDisclosurePanel, StyledChevronUpIcon } from "./Disclosure.styled"

const openedStyle = {
    transform: 'rotate(45deg)'
};

export default function DisclosureStory({
    Disclosures,
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
                <StyledBox width={width} height={height} background={background} border={border}>
                    <Disclosure as={StyledDisclosure} width={width} height={height}>
                    {({ open }) => (
                        <>
                        <Disclosure.Button as={StyledDisclosureButton} width={width} height={height} color={color} backgroundButton={backgroundButton}>
                            <span>What is your refund policy?</span>
                            <StyledChevronUpIcon color={color} style={(open) ? openedStyle : {}}/>
                        </Disclosure.Button>
                        <Disclosure.Panel as={StyledDisclosurePanel} color={color}>
                            If you're unhappy with your purchase for any reason, email us
                            within 90 days and we'll refund you in full, no questions asked.
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                    <Disclosure as={StyledDisclosure} width={width} height={height}>
                    {({ open }) => (
                        <>
                        <Disclosure.Button as={StyledDisclosureButton} width={width} height={height} color={color} backgroundButton={backgroundButton}>
                            <span>What is your refund policy?</span>
                            <StyledChevronUpIcon color={color} style={(open) ? openedStyle : {}}/>
                        </Disclosure.Button>
                        <Disclosure.Panel as={StyledDisclosurePanel} color={color}>
                            If you're unhappy with your purchase for any reason, email us
                            within 90 days and we'll refund you in full, no questions asked.
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
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