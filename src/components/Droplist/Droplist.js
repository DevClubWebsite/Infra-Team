import React, { useState } from "react";
import PropTypes from "prop-types";
import { Listbox } from "@headlessui/react";
import Global from "../../Theme/Global";
import { StyledTitle, StyledItem } from "./Droplist.styled";
import Theme from "../../Theme/Theme";

function Droplist({
  items,
  title,
  background = Theme.background.dark,
  color = Theme.typography.white,
  width = 8,
  height = 2,
}) {
  const [selectedItem, setSelectedItem] = useState(title);

  return (
    <>
      <Global />
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button
          as={StyledTitle}
          color={color}
          background={background}
          width={width}
          height={height}
        >
          {selectedItem != title ? selectedItem.label : title}
        </Listbox.Button>
        <Listbox.Options>
          {items.map((item, index) => (
            <Listbox.Option
              as={StyledItem}
              key={index}
              value={item}
              disabled={item.disabled}
              color={color}
              background={background}
              width={width}
              height={height}
            >
              {item.label}
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
};
export default Droplist;
