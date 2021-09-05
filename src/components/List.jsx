import React from "react";

export default function List({ list, LayoutComponent }) {
  return list.map((item) => <LayoutComponent key={item.id} item={item} />);
}
