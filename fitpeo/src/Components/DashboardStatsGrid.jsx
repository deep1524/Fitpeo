import React from "react";
import {IoBagHandle} from "react-icons/io5"
const DashboardStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white"/>
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
                Earning
            </span>
            <div className="flex   items-center">
                <strong className="text-xl text-gray-700 font-semibold">$198k</strong>
            </div>
            <div className="flex   items-center">
                <span className="text-sm text-green-500 ">+37.8% this Month</span>
            </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white"/>
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
                Orders
            </span>
            <div className="flex   items-center">
                <strong className="text-xl text-gray-700 font-semibold">$2.4k</strong>
            </div>
            <div className="flex   items-center">
                <span className="text-sm text-red-500">-2% this Month</span>
            </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white"/>
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
                Balance
            </span>
            <div className="flex   items-center">
                <strong className="text-xl text-gray-700 font-semibold">$2.4k</strong>
            </div>
            <div className="flex   items-center">
                <span className="text-sm text-red-500 ">-2% this Month</span>
            </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white"/>
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
                Total Sales
            </span>
            <div className="flex   items-center">
                <strong className="text-xl text-gray-700 font-semibold">$89k</strong>
            </div>
            <div className="flex   items-center">
                <span className="text-sm text-green-500 ">+11% this Week</span>
            </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center">
      {children}
    </div>
  );
}

export default DashboardStatsGrid;
