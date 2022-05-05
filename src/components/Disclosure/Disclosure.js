import { Disclosure } from "@headlessui/react";
import PropTypes from "prop-types";
import Theme from "../../Theme/Theme";
import React from "react";
import Typograpghy from '../Typography/Typography';
import Arrow from '../../Images/dropdown-arrow-icon.svg';

import {
  StyledBox,
  StyledDisclosure,
  StyledDisclosureButton,
  StyledDisclosurePanel,
} from "./Disclosure.styled";

const openedStyle = {
  transform: "rotate(45deg)",
};

export default function DisclosureStory({
  disclosures,
  width,
  height,
  background = Theme.background.light,
  border = Theme.background.dark,
  color = Theme.typography.white,
  backgroundButton = Theme.background.yellow,
}) {
  return (
    <>
      <StyledBox
        width={width}
        height={height}
        background={background}
        border={border}
      >
        {disclosures.map((disclosure, index) => {
          return (
            <Disclosure
              key={index}
              as={StyledDisclosure}
              width={width}
              height={height}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as={StyledDisclosureButton}
                    width={width}
                    height={height}
                    color={color}
                    backgroundButton={backgroundButton}
                  >
                    <Typograpghy color={color} as="p">{disclosure.text}</Typograpghy>
                    <img src={Arrow} alt=">" />
                  </Disclosure.Button>
                  <Disclosure.Panel as={StyledDisclosurePanel} color={color}>
                    {disclosure.content}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        })}
      </StyledBox>
    </>
  );
}

DisclosureStory.propTypes = {
  width: PropTypes.number,
  background: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
};
