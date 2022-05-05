import { Disclosure } from "@headlessui/react";
import PropTypes from "prop-types";
import Theme from "../../Theme/Theme";
import React from "react";
import Typograpghy from "../Typography/Typography";
import Arrow from "../../Images/dropdown-arrow-icon.svg";

import {
  StyledBox,
  StyledDisclosure,
  StyledDisclosureButton,
  StyledDisclosurePanel,
} from "./Disclosure.styled";

export default function DisclosureStory({
  disclosures,
  width,
  background = Theme.background.light,
  border = Theme.background.dark,
  color = Theme.typography.white,
  backgroundButton = Theme.background.yellow,
}) {
  const openedStyle = {
    transform: "rotate(180deg)",
  };
  return (
    <>
      <StyledBox width={width} background={background} border={border}>
        {disclosures.map((disclosure, index) => {
          return (
            <Disclosure key={index} as={StyledDisclosure} width={width}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as={StyledDisclosureButton}
                    width={width}
                    color={color}
                    backgroundButton={backgroundButton}
                  >
                    <Typograpghy color={color} as="p">
                      {disclosure.text}
                    </Typograpghy>
                    <img src={Arrow} alt=">" style={open ? openedStyle : {}} />
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
  disclosures: PropTypes.array.isRequired,
  width: PropTypes.number,
  background: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  backgroundButton: PropTypes.string,
};
