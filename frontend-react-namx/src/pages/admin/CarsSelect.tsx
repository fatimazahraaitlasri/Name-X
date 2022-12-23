import React from "react";
import { IoCarSport } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function CarsSelect(props: any) {
  return (
      <div className=" w-2/12 h-full bg-white/10 rounded-lg pt-8 px-6 overflow-y-auto ">
        {props.data.map((Element: any, index: number) => {
          return (
            <>
              <Link
                to={"?" + Element._id}
                className=" transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className=" hover:bg-white/10 h-14 flex flex-col  md:flex-row md:space-y-0 space-x-6 items-center">
                  <div className=" text-2xl">
                    <IoCarSport />
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Cars {index + 1}
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Data overview
                    </p>
                  </div>
                </div>
              </Link>
              <hr className="my-2 border-slate-700" />
            </>
          );
        })}
    </div>
  );
}
