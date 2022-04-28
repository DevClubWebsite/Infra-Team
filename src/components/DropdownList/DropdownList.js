import React from "react";
import { Menu } from "@headlessui/react";
import PropTypes from "prop-types";
import Global from "../../Theme/Global";
import { StyledDDLButton, StyledItem } from "./DropdownList.styled";

function DropdownList({ title, items, width = 20, height = 4 }) {
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
                {<p>{item}</p>}
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
  width: PropTypes.string,
  height: PropTypes.string,
};

export default DropdownList;
