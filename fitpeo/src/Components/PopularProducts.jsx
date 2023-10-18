import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

import Filter from "./Filter";

const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    stock: "32in Stock",
    order_total: "$435.50",

    Total_Sales: "20",
  },
  {
    id: "7",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    stock: "32in Stock",
    order_total: "$96.35",

    Total_Sales: "40",
  },
  {
    id: "2",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    stock: "32in Stock",
    order_total: "$836.44",

    Total_Sales: "3",
  },
  {
    id: "3",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    stock: "32in Stock",
    order_total: "$334.50",

    Total_Sales: "8",
  },
  {
    id: "4",
    product_id: "8763",
    customer_id: "09832",
    customer_name: "Anthony Fry",
    stock: "32in Stock",
    order_total: "$876.00",

    Total_Sales: "13",
  },
  {
    id: "5",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    stock: "32in Stock",
    order_total: "$96.35",

    Total_Sales: "15",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 ">
      <div className="flex flex-row  justify-between items-center">
        <div>
          <strong className="text-gray-700 font-medium">Recent Orders</strong>
        </div>
        
        <div className=" flex-row justify-end">

          <div className="relative ">
            <HiOutlineSearch
              fontSize={20}
              className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
            />
            <input
              type="text"
              className="text-sm focus:outline-none active:outline-none h-10 w-[12rem]  rounded-lg pl-11 px-4 bg-gray-100"
              placeholder="Search..."
            />
          </div>
          
        </div>
        <div>
            <Filter/>
          </div>
      </div>

      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Product Name</th>

              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td>
                  <Link to={`/customer/${order.customer_id}`}>
                    {order.customer_name}
                  </Link>
                </td>
                <td>{order.stock}</td>
                <td>{order.order_total}</td>
                <td>{order.Total_Sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
