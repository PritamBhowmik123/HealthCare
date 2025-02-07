import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 px-4 sm:px-10">
      <h1 className="text-3xl font-semibold text-center">Top Doctors to Book</h1>
      <p className="sm:w-1/2 text-center text-gray-600 text-base">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5">
        {doctors.slice(0, 8).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer bg-white hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300"
          >
            <img
              className="w-full h-56 object-cover rounded-t-xl"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4 flex flex-col gap-1">
              {/* Availability Status */}
              <div className="flex items-center gap-2 text-sm text-green-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <p>Available</p>
              </div>
              {/* Doctor Info */}
              <p className="text-gray-900 text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-green-200 text-gray-700 px-10 py-3 rounded-full mt-10 hover:bg-green-600 hover:text-white transition-all duration-300"
      >
        View More
      </button>
    </div>
    // <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
    //     <h1 className='text-3xl font-medium'>Top Doctor to Book</h1> 
    //     <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted docters</p>
    //     <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
    //         {doctors.slice(0,10).map((item,index)=>(
    //             <div
    //                     key={index}
    //                     onClick={() => {
    //                       navigate(`/appointment/${item._id}`);
    //                       scrollTo(0, 0);
    //                     }}
    //                     className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer bg-white hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300"
    //                   >
    //                 <img className='bg-blue-50' src={item.image} alt="" />
    //                 <div className='p-4'>
    //                     <div className='flex items-center gap-2 text-sm text-center text-green-500'>
    //                         <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
    //                     </div>
    //                     <p className='text-gray-900 text-ig font-medium'>{item.name}</p>
    //                     <p className='text-gray-600 text-sm'>{item.speciality}</p>
    //                 </div>
    //             </div>

    //         ))}
    //     </div>
    //     <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>
    //         More
    //     </button>
    // </div>
  );
};

export default TopDoctors;
