// import React, { useContext } from 'react'
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';
// import { listingDataContex } from '../Context/ListingContext';
// function ListingPage3() {
//   let navigate = useNavigate()
//   let {title,setTitle,
//           description,setDescription,
//           frontEndImage1,setFrontEndImage1,
//           frontEndImage2,setFrontEndImage2,
//           frontEndImage3,setFrontEndImage3,
//           backEndImage1,setBackEndImage1,
//           backEndImage2,setBackEndImage2,
//           backEndImage3,setBackEndImage3,
//           rent,setRent,
//           city,setCity,
//           landMark,setLandMark,
//           category,setCategory,
//         handleAddListing} = useContext(listingDataContex)
//   return (
//     <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center overflow-auto relative'>
//       <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={()=> navigate("/listingpage2")}><FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /></div>

//       <div className='w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]'>
//           <h1 className='text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden'>
//             {`In ${landMark.toUpperCase()}, ${city.toUpperCase()}`}
//           </h1>
//       </div>

//       <div className='w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row'>
//         <div className='w-[100%] h-[65%]  md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[red]'>
//           <img src={frontEndImage1} alt="" className='w-[100%]'/>
//         </div>
        
//         <div className='w-[100%] h-[50%] flex items-center justify-center md:w-[50%] md:h-[100%] md:flex-col bg-[black]'>
//           <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white]'>
//             <img src={frontEndImage2} alt="" className='w-[100%]'/>
//           </div>
//           <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white]'>
//             <img src={frontEndImage3} alt="" className='w-[100%]'/>
//           </div>
//         </div>
       
//       </div>
//        <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]'>{`${title.toUpperCase()} ${category.toUpperCase()}, ${landMark.toUpperCase()}`}</div>
//         <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px] text-gray-800'>{`${description.toUpperCase()}`}</div>
//          <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]'>{`Rs.${rent}/day`}</div>

//         <div className='w-[95%] h-[50px] flex items-center justify-start px-[110px]'> <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg ' onClick={handleAddListing}> Add Listing</button></div>

//     </div>
//   )
// }

// export default ListingPage3
import React, { useContext } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { listingDataContex } from '../Context/ListingContext';

function ListingPage3() {
  const navigate = useNavigate();
  const {
    title, setTitle,
    description, setDescription,
    frontEndImage1, setFrontEndImage1,
    frontEndImage2, setFrontEndImage2,
    frontEndImage3, setFrontEndImage3,
    backEndImage1, setBackEndImage1,
    backEndImage2, setBackEndImage2,
    backEndImage3, setBackEndImage3,
    rent, setRent,
    city, setCity,
    landMark, setLandMark,
    category, setCategory,
    handleAddListing,
    adding,setAdding
  } = useContext(listingDataContex);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-start py-6 px-4 relative overflow-auto">
      
      {/* Back Button */}
      <div 
        className="w-12 h-12 bg-red-600 cursor-pointer absolute top-6 left-6 rounded-full flex items-center justify-center shadow-md z-10"
        onClick={() => navigate("/listingpage2")}
      >
        <FaArrowLeftLong className="w-6 h-6 text-white" />
      </div>

      {/* Heading */}
      <div className="w-full max-w-4xl mb-4">
        <h1 className="text-xl md:text-3xl text-[#272727] font-semibold truncate">
          {`In ${landMark.toUpperCase()}, ${city.toUpperCase()}`}
        </h1>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4">
        
        {/* Left Main Image */}
        <div className="w-full md:w-2/3 h-60 md:h-[400px] overflow-hidden border rounded-md">
          <img src={frontEndImage1} alt="Front 1" className="w-full h-full object-cover" />
        </div>

        {/* Right Side Images */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="w-full h-28 md:h-1/2 overflow-hidden border rounded-md">
            <img src={frontEndImage2} alt="Front 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-28 md:h-1/2 overflow-hidden border rounded-md">
            <img src={frontEndImage3} alt="Front 3" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>

      {/* Uncomment below for Title, Description, Rent, Add Button */}
      
      <div className="w-full max-w-4xl mt-6 space-y-2 text-gray-800">
        <div className="text-lg md:text-2xl font-medium">{`${title.toUpperCase()} ${category.toUpperCase()}, ${landMark.toUpperCase()}`}</div>
        <div className="text-md md:text-xl">{description.toUpperCase()}</div>
        <div className="text-md md:text-xl font-semibold">{`Rs. ${rent}/day`}</div>
      </div>

      <div className="w-full max-w-4xl mt-4 flex justify-start">
        <button 
          className="px-6 md:px-12 py-2 bg-red-600 text-white text-lg rounded-lg shadow hover:bg-red-700 transition text-nowrap"
          onClick={handleAddListing} disabled={adding} >
         {adding ? "adding...":"Add Listing"}
        </button>
      </div>
      

    </div>
  );
}

export default ListingPage3;
