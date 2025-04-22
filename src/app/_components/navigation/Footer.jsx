import React from "react";
import Image from "next/image";

import { categories } from "@/data/categories";
import { brands } from "@/data/brands";

const Footer = () => {
  return (
    <div className="bg-neutral-950 text-white py-10">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2">
          <Image
            alt="logo"
            src="/assets/logo.png"
            width={110}
            height={100}
            className="invert"
          />
          <p className="pt-3 max-w-96 opacity-70">
            A futurestic tech store built by the coolest team of Computer
            Engineers ever existed.
          </p>
        </div>
        {columns.map((column) => (
          <div className="flex-1" key={column.title}>
            <h3 className="font-bold">{column.title}</h3>
            <ul>
              {column.rows.map((item) => (
                <li
                  key={item.id}
                  className="opacity-70 text-sm my-1 hover:opacity-100 hover:underline cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;

const columns = [
  {
    title: "Our Categories",
    rows: categories,
  },
  {
    title: "Brands we trust",
    rows: brands.slice(0, 6),
  },
];
