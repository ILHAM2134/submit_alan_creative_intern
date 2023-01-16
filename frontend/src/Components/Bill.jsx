import { Typography } from '@material-tailwind/react';
import React from 'react';

const Bill = () => {
  return (
    <div className="basis-4/12 my-8">
      <div className="bg-gray-100">
        <div className="flex justify-between bg-gray-200">
          <div className="bg-gray-400 items-center text-center p-2 w-24">
            <i className="text-4xl fa-regular fa-circle-user"></i>
            <Typography variant="h6">Customer</Typography>
          </div>
          <Typography variant="h2" className="my-auto">
            New Customer
          </Typography>
          <div className="bg-gray-400 items-center text-center p-2 w-24">
            <i className="text-4xl fa-solid fa-list-check"></i>
            <Typography variant="h6">Billing</Typography>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-center">
            <Typography variant="h6">Dine in</Typography>
            <i className="text-sm fa-solid fa-chevron-down mx-2 my-auto"></i>
          </div>
          <hr className="mt-5 border-1 border-gray-400" />
        </div>
      </div>
      <div className="bg-gray-300">
        <div className="flex">
          <Typography
            variant="h4"
            className="bg-gray-300 basis-6/12 text-center mx-1 p-5"
          >
            Save Bill
          </Typography>
          <Typography
            variant="h4"
            className="bg-gray-300 basis-6/12 text-center mx-1 p-5"
          >
            Print Bill
          </Typography>
        </div>
        <div className="flex">
          <i className="text-4xl fa-solid fa-wallet bg-blue-600 p-5 mx-1 w-20 text-center"></i>
          <Typography variant="h3" className="bg-blue-600 p-5 mx-1 w-full">
            Charge
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Bill;
