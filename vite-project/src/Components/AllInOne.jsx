import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
const AllInOne = () => {
  return (
    <div name ="platform" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores
          consectetur perferendis corrupti quia ducimus ut quaerat dicta aperiam
          laboriosam? At itaque tempore accusamus sapiente aliquam numquam
          debitis eligendi culpa!
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-500" />
            </div>
            <div className="text-lg">
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-500" />
            </div>
            <div className="text-lg">
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-500" />
            </div>
            <div className="text-lg">
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-500" />
            </div>
            <div className="text-lg">
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
