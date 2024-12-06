"use client";

import React, { useState, useEffect, Children, isValidElement, cloneElement } from "react";
import { Minus, Plus } from "lucide-react";
import "../../style/Accordion.css"; // Import the CSS file

// Main Accordion component
const Accordion = ({ children }) => {
  const [openItems, setOpenItems] = useState([]);
  const [openSubItems, setOpenSubItems] = useState({});

  useEffect(() => {
    expandAll();
  }, []);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleSubItem = (parentIndex, subIndex) => {
    setOpenSubItems((prev) => ({
      ...prev,
      [parentIndex]: prev[parentIndex]?.includes(subIndex)
        ? prev[parentIndex].filter((i) => i !== subIndex)
        : [...(prev[parentIndex] || []), subIndex],
    }));
  };

  const expandAll = () => {
    const allIndexes = Children.map(children, (_, index) => index);
    setOpenItems(allIndexes || []);
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-controls">
        <button className="accordion-button" onClick={expandAll}>
          Expand all
        </button>
        <button className="accordion-button" onClick={collapseAll}>
          Collapse all
        </button>
      </div>
      {Children.map(children, (child, index) =>
        isValidElement(child)
          ? cloneElement(child, {
              isOpen: openItems.includes(index),
              openSubItems: openSubItems[index] || [],
              parentIndex: index,
              toggle: () => toggleItem(index),
              toggleSubItem: (subIndex) => toggleSubItem(index, subIndex),
            })
          : child
      )}
    </div>
  );
};

// Accordion Item component
export const AccordionItem = ({
  children,
  isOpen,
  openSubItems,
  parentIndex,
  toggle,
  toggleSubItem,
}) => (
  <div className="accordion-item">
    {Children.map(children, (child) =>
      isValidElement(child)
        ? cloneElement(child, {
            isOpen,
            openSubItems,
            parentIndex,
            toggle,
            toggleSubItem,
          })
        : child
    )}
  </div>
);

// Accordion Trigger component
export const AccordionTrigger = ({ children, isOpen, toggle, index }) => (
  <div onClick={toggle} className="accordion-trigger">
    <h3 className="accordion-title">
      {index + 1}. {children}
    </h3>
    {isOpen ? <Minus className="accordion-icon" /> : <Plus className="accordion-icon" />}
  </div>
);

// Accordion Content component
export const AccordionContent = ({ children, isOpen, openSubItems, parentIndex, toggleSubItem }) => {
  if (!isOpen) return null;
  return (
    <div className="accordion-content">
      {Children.map(children, (child, index) =>
        isValidElement(child)
          ? cloneElement(child, {
              isOpen: openSubItems.includes(index),
              toggle: () => toggleSubItem(index),
            })
          : child
      )}
    </div>
  );
};

// Accordion Sub Item component
export const AccordionSubItem = ({ children, isOpen, toggle }) => (
  <div className="accordion-sub-item">
    {Children.map(children, (child) =>
      isValidElement(child) ? cloneElement(child, { isOpen, toggle }) : child
    )}
  </div>
);

// Accordion Sub Trigger component
export const AccordionSubTrigger = ({ children, isOpen, toggle }) => (
  <div onClick={toggle} className="accordion-sub-trigger">
    <span className="accordion-sub-title">{children}</span>
    {isOpen ? <Minus className="accordion-icon" /> : <Plus className="accordion-icon" />}
  </div>
);

// Accordion Sub Content component
export const AccordionSubContent = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return <div className="accordion-sub-content">{children}</div>;
};

export default Accordion;
