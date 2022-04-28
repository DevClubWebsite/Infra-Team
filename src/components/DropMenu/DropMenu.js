import React from "react";
import { Menu } from "@headlessui/react";
import PropTypes from "prop-types";
import Global from "../../Theme/Global";
import { StyledMenuButton, StyledItem } from "./DropMenu.styled";
import Typography from "../Typography/Typography";

function DropMenu({ title, items, width = 15, height = 3 }) {
  return (
    <>
      <Global />
      <Menu>
        <Menu.Button as={StyledMenuButton} width={width} height={height}>
          {title}
        </Menu.Button>
        <Menu.Items>
          {items.map((item, index) => {
            return (
              <Menu.Item
                as={StyledItem}
                key={index}
                width={width}
                height={height}
              >
                {
                  <Typography
                    color={item.color}
                    variant={item.variant}
                    label={item.label}
                  />
                }
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
};

export default DropMenu;
