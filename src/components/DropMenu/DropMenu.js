import React from "react";
import { Menu } from "@headlessui/react";
import PropTypes from "prop-types";
import { StyledMenuButton, StyledItem } from "./DropMenu.styled";
import Theme from "../../Theme/Theme";

function DropMenu(args) {
  const {
    title,
    items,
    width = 15,
    height = 3,
    hover = Theme.background.yellow,
    background = Theme.background.dark,
    color = Theme.typography.white,
  } = args;
  return (
    <>
      <Menu>
        <Menu.Button as={StyledMenuButton} {...args}>
          {title}
        </Menu.Button>
        <Menu.Items>
          {items.map((item, index) => {
            return (
              <Menu.Item
                as={StyledItem}
                key={index}
                active={({ active }) => active}
                {...args}
              >
                {item.text}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    </>
  );
}
DropMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  hover: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
};

export default DropMenu;
