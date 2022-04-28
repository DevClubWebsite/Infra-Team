import React from "react";
import { Menu } from "@headlessui/react";
import PropTypes from "prop-types";
import Global from "../../Theme/Global";
import { StyledDDLButton, StyledItem } from "./DropdownList.styled";
import Typography from "../Typography/Typography";

function DropdownList({ title, items, width = 15, height = 3 }) {
  return (
    <>
      <Global />
      <Menu>
        <Menu.Button as={StyledDDLButton} width={width} height={height}>
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
DropdownList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default DropdownList;
