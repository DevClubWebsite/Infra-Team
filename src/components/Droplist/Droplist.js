import React, { useState } from "react";
import PropTypes from "prop-types";
import { Listbox } from "@headlessui/react";
import { StyledTitle, StyledItem } from "./Droplist.styled";
import Theme from "../../Theme/Theme";
import Arrow from "../../Images/dropdown-arrow-icon.svg";

function Droplist(args) {
  const {
    items,
    title,
    background = Theme.background.blue,
    color = Theme.typography.white,
    width = 19.5,
    height = 2.3,
    hover,
  } = args;
  const [selectedItem, setSelectedItem] = useState(title);

  return (
    <>
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button
          as={StyledTitle}
          color={color}
          background={background}
          width={width}
          height={height}
        >
          {selectedItem !== title ? selectedItem.text : title}
          <img src={Arrow} alt=">" />
        </Listbox.Button>
        <Listbox.Options>
          {items.map((item, index) => (
            <Listbox.Option
              as={StyledItem}
              key={index}
              value={item}
              disabled={item.disabled}
              error={item.disabled}
              {...args}
            >
              {item.text}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  );
}
Droplist.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  hover: PropTypes.string,
};
export default Droplist;
