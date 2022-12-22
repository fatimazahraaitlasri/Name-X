import React from "react";
import DAshboard from "../SidebarAdmin";
import { IoCarSport } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import CarsSelect from "./CarsSelect";

export default function Cars(props: any) {
  const [DataCars, SetDataCars] = useState<any[]>([]);
  const [DataCarsbyId, SetDataCarsbyId] = useState<any>([]);
  const car_id = window.location.search.replace("?", "");
  const url = "http://localhost:5000/api/v1/cars";
  const urlId = `http://localhost:5000/api/v1/cars/${car_id}`;

  useEffect(() => {
    getAllCars();
    getCarsById();
  }, [car_id]);

  const getAllCars = async () => {
    fetch(url).then((res) => {
      res.json().then((result) => {
        SetDataCars(result);
      });
    });
  };
  const getCarsById = async () => {
    const res = await axios.get(urlId);
    SetDataCarsbyId(res.data);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("__firebase_request_key");
  return (
    <>
      <div className="flex ">
        <DAshboard />
        {/* <!-- component --> */}
        {/* <div>
          <table>
            <thead>
              <th>data</th>
            </thead>
            {DataCars.map((car) => {
              return (
                <tbody>
                  <tr>
                    {car.car_name}
                    {/* {console.log(car.length())} */}
        {/* </tr>
                </tbody> */}
        {/* //       );
        //     })}
        //   </table>
        // </div> */}{" "}
        {/* } */}
        <div className="antialiased flex bg-black w-full h-screen  text-slate-300 relative py-4">
          <CarsSelect data={DataCars} />
          <div className="bg-white/10 flex flex-col justify-center items-center mx-6  w-4/5 gap-5  h-full rounded-lg">
            <div className=" flex justify-end w-full mr-10 ">
              <div className="inline-flex items-center space-x-3">
                <a
                  href="cars/update"
                  title="Edit"
                  className="hover:text-white  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </a>

                <a href="" title="Suspend user" className="hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div id="last-incomes " className="flex gap-20">
              <div id="stats" className="w-56">
                <div className="bg-black/60 to-white/5 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="text-3xl p-4">💰</div>
                    <div className="p-2">
                      <p className="text-xl font-bold">{}</p>

                      <p className="text-gray-500 font-medium">Amber Gates</p>
                      <p className="text-gray-500 text-sm">24 Nov 2022</p>
                    </div>
                  </div>
                  <div className="border-t border-white/5 p-4">
                    <a href="" title="Edit" className="hover:text-white  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div id="stats" className="w-56">
                <div className="bg-black/60 to-white/5 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="text-3xl p-4">💰</div>
                    <div className="p-2">
                      <p className="text-xl font-bold"></p>
                      <p className="text-gray-500 font-medium">Amber Gates</p>
                      <p className="text-gray-500 text-sm">24 Nov 2022</p>
                    </div>
                  </div>
                  <div className="border-t border-white/5 p-4">
                    <a href="" title="Edit" className="hover:text-white  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div id="stats" className="w-56">
                <div className="bg-black/60 to-white/5 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="text-3xl p-4">💰</div>
                    <div className="p-2">
                      <p className="text-xl font-bold">Colers</p>
                      <p className="text-gray-500 font-medium">Amber Gates</p>
                      <p className="text-gray-500 text-sm">24 Nov 2022</p>
                    </div>
                  </div>
                  <div className="border-t border-white/5 p-4">
                    <a href="" title="Edit" className="hover:text-white  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-3/5   ">
              <div id="stats" className="">
                <h1 className="font-bold py-4 ">Images</h1>
                <div className="bg-black/60 to-white/5 rounded-lg h-56 flex justify-center items-center gap-4 px-5">
                  <img
                    src="https://img.freepik.com/photos-premium/vue-face-voiture-moderne-generique-sans-marque_110488-532.jpg?w=740"
                    alt=""
                    className="w-1/3 h-44  rounded-lg"
                  />
                  <img
                    src="https://img.freepik.com/photos-premium/vue-face-voiture-moderne-generique-sans-marque_110488-532.jpg?w=740"
                    alt=""
                    className="w-1/3 h-44  rounded-lg"
                  />
                  <img
                    src="https://img.freepik.com/photos-premium/vue-face-voiture-moderne-generique-sans-marque_110488-532.jpg?w=740"
                    alt=""
                    className="w-1/3 h-44  rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="grid   gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl ">
              <div id="last-users " className="w-full">
                <h1 className="font-bold py-4 ">Details</h1>
                <div className=" text-center overflow-x-auto">
                  <table className="w-full  text-center  ">
                    <thead className="bg-black/60 text-center">
                      <th className="text-left py-3 px-11 rounded-l-lg">
                        Marque
                      </th>
                      <th className="text-left py-3 px-11">
                        Années de production
                      </th>
                      <th className="text-left py-3 px-11">Énergie</th>
                      <th className="text-left py-3 px-11">
                        Puissance maximale
                      </th>
                      <th className="text-left py-3 px-2 rounded-r-lg">
                        Vitesse maximale
                      </th>
                    </thead>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-2 font-bold">
                        <div className="inline-flex space-x-3 items-center">
                          <span>NamX</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">2022</td>
                      <td className="py-3 px-2"> Hydrogène / Électricité</td>
                      <td className="py-3 px-2">300 à 550 ch</td>
                      <td className="py-3 px-2">200 à 250 km/h</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // </div> */}
    </>
  );
}
