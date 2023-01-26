import React, { useState } from "react";
import styled from "styled-components";
import NavLinkTag from "./uiKit/NavLink";

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ItemsWrapper = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  z-index: ${({ theme }) => theme.zIndexes.navDropdown};
  background-image: -webkit-linear-gradient(
    right,
    ${({ theme }) => theme.colors.secondaryBackground},
    ${({ theme }) => theme.colors.main},
    ${({ theme }) => theme.colors.secondaryBackground}
  );
`;

const DropdownNavLink = ({ firstItem, items }) => {
  const [hover, setHover] = useState(false);

  return (
    <DropdownWrapper
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <NavLinkTag
        to={firstItem.to}
        text={firstItem.text}
        onMouseEnter={() => {
          setHover(true);
        }}
      />
      <ItemsWrapper open={hover}>
        {items.map((item) => (
          <NavLinkTag key={item.to} to={item.to} text={item.text} />
        ))}
      </ItemsWrapper>
    </DropdownWrapper>
  );
};
export default DropdownNavLink;
