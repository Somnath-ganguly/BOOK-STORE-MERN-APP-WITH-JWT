// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { bookBaseUrl } from '../../axiosInstance';
// import { MdDeleteForever } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";
// import Navbar from './Navbar';



// const Home = () => {


//     const [bookForm, setbookForm] = useState({
//         "BookName": "",
//         "BookTitle": "",
//         "Author": "",
//         "SellingPrice": "",
//         "PublishDate": "",
//         "Id":""

//     });
//     const [isUpdating, setIsUpdating] = useState(false);

//     const handleFormChange = (e) => {
//         const { name, value } = e.target;
//         setbookForm((prev) => ({
//             ...prev,
//             [name]: value,


//         }));
//     };

//     console.log('bookForm', bookForm);

//     const handleSubmit = async () => {
//         try {
//             if (!isUpdating) {
//                 if (!bookForm.BookName || !bookForm.BookTitle || !bookForm.Author || !bookForm.SellingPrice) {
//                     alert("All Field's are required");
//                 }

//                 const { data } = await bookBaseUrl.post('/addbook', bookForm);
//                 if (data?.Success) {
//                     alert(data?.Message);
//                     getAllbookList();
//                     setbookForm({
//                         "BookName": "",
//                         "BookTitle": "",
//                         "Author": "",
//                         "SellingPrice": "",
//                         "PublishDate": "",
//                         "Id": ""

//                     });
//                 }



//             } else {


//                 const { data } = await bookBaseUrl.put('/updatebook', bookForm);
//                 if (data?.Success) {
//                     alert(data?.Message);
//                     getAllbookList();
//                     setbookForm({
//                         "BookName": "",
//                         "BookTitle": "",
//                         "Author": "",
//                         "SellingPrice": "",
//                         "PublishDate": "",
//                         "Id": ""

//                     });
//                     setIsUpdating(false);
//                 }



//             }



//         } catch (error) {
//             console.log(error);

//         }

//     }

//     const handleDelete = async(id) => {
//         try {
//             console.log(id);
            
//             const { data } = await bookBaseUrl.delete('deletebook', {
//                 data: {
//                     Id: id
//                 }
//             });
//             if (data?.Success) {
//                 alert(data?.Message);
//                 getAllbookList();
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const handleUpdate = async (data) => {
//         setbookForm(
//             {
//                 "BookName": data?.BookName,
//                 "BookTitle": data?.BookTitle,
//                 "Author": data?.Author,
//                 "SellingPrice": data?.SellingPrice,
//                 "PublishDate": data?.PublishDate,
//                 "Id": data?._id,
//             }

//         );
//         setIsUpdating(true);
//     }

//     const [booklist, setBookList] = useState([]);

//     const getAllbookList = async () => {
//         try {
//             const { data } = await bookBaseUrl.get("booklist");
//             //console.log(data);

//             setBookList(data?.BookList);


//         } catch (error) {
//             console.log(error);

//         }

//     };

//     useEffect(() => {
//         getAllbookList();


//     }, []);


//     return (
//         <>
//         <Navbar/>
//         <div className='w-full px-5 min-h-[calc(100vh-60px)]'>
//             <div className='w-full my-4  grid grid-cols-5 gap-3 '>
//                 <div className='w-full flex flex-col gap-2'>
//                     <label htmlFor="">Book Name</label>
//                     <input type="text" name='BookName'
//                         value={bookForm.BookName}
//                         onChange={handleFormChange}
//                         placeholder='Book Name' className='w-full outline-none text-gray-950 h-5px   border-gray-300 border rounded-sm' />
//                 </div>
//                 <div className='w-full flex flex-col gap-2'>
//                     <label htmlFor="">Book Title</label>
//                     <input type="text" placeholder='Book Title' className='w-full outline-none text-gray-950 h-5px  border-gray-300 border rounded-sm'
//                         name='BookTitle'
//                         value={bookForm.BookTitle}
//                         onChange={handleFormChange} />
//                 </div>
//                 <div className='w-full flex flex-col gap-2'>
//                     <label htmlFor="">Author</label>
//                     <input type="text"
//                         name='Author'
//                         value={bookForm.Author}
//                         onChange={handleFormChange}
//                         placeholder='Author' className='w-full outline-none text-gray-950 h-5px   border-gray-300 border rounded-sm' />
//                 </div>
//                 <div className='w-full flex flex-col gap-2'>
//                     <label htmlFor="">Selling Price</label>
//                     <input type="text"
//                         name='SellingPrice'
//                         value={bookForm.SellingPrice}
//                         onChange={handleFormChange}
//                         placeholder='Selling Price' className='w-full outline-none text-gray-950 h-5px   border-gray-300 border rounded-sm ' />
//                 </div>
//                 <div className='w-full flex flex-col gap-2'>
//                     <label htmlFor="">Publish Date</label>
//                     <input type="date"
//                         name='PublishDate'
//                         value={bookForm.PublishDate}
//                         onChange={handleFormChange}
//                         placeholder='Publish Date' className='w-full outline-none text-gray-950 h-5px    border-gray-300 border rounded-sm ' />
//                 </div>



//             </div>
//             <div className='w-full flex justify-end'>
//                 <button
//   onClick={handleSubmit}
//   className="h-10 px-6 bg-green-600 hover:bg-green-700 active:scale-95 rounded-full text-white text-sm font-semibold cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md shadow-green-600/20 dark:shadow-green-600/30"
// >
//   SUBMIT
// </button>
//             </div>

//             <div className='w-fill mt-10'>
//                 <div className='w-full'>
//                     <table className='w-full bg-white divide-y divide-gray-200'>
//                         <thead className='bg-gray-50'>
//                             <tr>
//                                 <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500'>Book Name</th>
//                                 <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500'>Book Title</th>
//                                 <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500'>Author</th>
//                                 <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500'>Selling Price</th>
//                                 <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500'>Publish Date</th>
//                                 <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500'>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody className=' bg-white divide-y divide-gray-200'>
//                             {
//                                 booklist.map((book, idx) => {
//                                     return (
//                                         <tr key={idx} className='hover:bg-gray-200' >
//                                             <td className='px-6 py-3 whitespace-nowrap'>{book.BookName}</td>
//                                             <td className='px-6 py-3 whitespace-nowrap'>{book.BookTitle}</td>
//                                             <td className='px-6 py-3 whitespace-nowrap'>{book.Author} </td>
//                                             <td className='px-6 py-3 whitespace-nowrap'>{book.SellingPrice}</td>
//                                             <td className='px-6 py-3 whitespace-nowrap'>{book.PublishDate}</td>
//                                             <td className='px-6 py-3 whitespace-nowrap'>
//                                                 <div className='flex gap-5 text-2xl justify-items-start px-1.5'>
//                                                     <button
//                                                         type="button"
//                                                         className='text-red-800 cursor-pointer'
//                                                         onClick={() => handleDelete(book._id)}
//                                                     >
//                                                         <MdDeleteForever />
//                                                     </button>
//                                                     <button
//                                                         type="button"
//                                                         className='text-green-800 cursor-pointer'
//                                                         onClick={() => handleUpdate(book)}
//                                                     >
//                                                         <FaEdit /></button>
//                                                 </div>

//                                             </td>
//                                         </tr>

//                                     );


//                                 })
//                             }

//                         </tbody>
//                     </table>

//                 </div>

//             </div>

//         </div>
//         </>
        
//     )
// }

// export default Home



import React, { useEffect } from 'react'
import { useState } from 'react'
import { bookBaseUrl } from '../../axiosInstance';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Navbar from './Navbar';
import toast , {Toaster} from 'react-hot-toast';



const Home = () => {


    const [bookForm, setbookForm] = useState({
        "BookName": "",
        "BookTitle": "",
        "Author": "",
        "SellingPrice": "",
        "PublishDate": "",
        "Id":""

    });
    const [isUpdating, setIsUpdating] = useState(false);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setbookForm((prev) => ({
            ...prev,
            [name]: value,


        }));
    };

    console.log('bookForm', bookForm);

    const handleSubmit = async () => {
        try {
            if (!isUpdating) {
                if (!bookForm.BookName || !bookForm.BookTitle || !bookForm.Author || !bookForm.SellingPrice) {
                    toast.error("All Field's are required");
                }

                const { data } = await bookBaseUrl.post('/addbook', bookForm);
                if (data?.Success) {
                    toast.success(data?.Message);
                    getAllbookList();
                    setbookForm({
                        "BookName": "",
                        "BookTitle": "",
                        "Author": "",
                        "SellingPrice": "",
                        "PublishDate": "",
                        "Id": ""

                    });
                }



            } else {


                const { data } = await bookBaseUrl.put('/updatebook', bookForm);
                if (data?.Success) {
                    toast.success(data?.Message);
                    getAllbookList();
                    setbookForm({
                        "BookName": "",
                        "BookTitle": "",
                        "Author": "",
                        "SellingPrice": "",
                        "PublishDate": "",
                        "Id": ""

                    });
                    setIsUpdating(false);
                }



            }



        } catch (error) {
            console.log(error);

        }

    }

    const handleDelete = async(id) => {
        try {
            console.log(id);
            
            const { data } = await bookBaseUrl.delete('deletebook', {
                data: {
                    Id: id
                }
            });
            if (data?.Success) {
                toast.success(data?.Message);
                getAllbookList();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async (data) => {
        setbookForm(
            {
                "BookName": data?.BookName,
                "BookTitle": data?.BookTitle,
                "Author": data?.Author,
                "SellingPrice": data?.SellingPrice,
                "PublishDate": data?.PublishDate,
                "Id": data?._id,
            }

        );
        setIsUpdating(true);
    }

    const [booklist, setBookList] = useState([]);

    const getAllbookList = async () => {
        try {
            const { data } = await bookBaseUrl.get("booklist");
            //console.log(data);

            setBookList(data?.BookList);


        } catch (error) {
            console.log(error);

        }

    };

    useEffect(() => {
        getAllbookList();


    }, []);


    return (
        <>
        <Navbar/>
        <div className='w-full px-5 min-h-[calc(100vh-60px)] bg-white dark:bg-zinc-900 transition-colors duration-300'>
             <Toaster/>
            <div className='w-full my-4  grid grid-cols-5 gap-3 '>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="" className='text-zinc-700 dark:text-zinc-300 text-sm font-medium'>Book Name</label>
                    <input type="text" name='BookName'
                        value={bookForm.BookName}
                        onChange={handleFormChange}
                        placeholder='Book Name' className='w-full outline-none text-gray-950 dark:text-white h-5px bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 border rounded-sm px-2 py-1.5 focus:ring-2 focus:ring-orange-500 dark:placeholder-zinc-500 transition-colors duration-200' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="" className='text-zinc-700 dark:text-zinc-300 text-sm font-medium'>Book Title</label>
                    <input type="text" placeholder='Book Title' className='w-full outline-none text-gray-950 dark:text-white h-5px bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 border rounded-sm px-2 py-1.5 focus:ring-2 focus:ring-orange-500 dark:placeholder-zinc-500 transition-colors duration-200'
                        name='BookTitle'
                        value={bookForm.BookTitle}
                        onChange={handleFormChange} />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="" className='text-zinc-700 dark:text-zinc-300 text-sm font-medium'>Author</label>
                    <input type="text"
                        name='Author'
                        value={bookForm.Author}
                        onChange={handleFormChange}
                        placeholder='Author' className='w-full outline-none text-gray-950 dark:text-white h-5px bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 border rounded-sm px-2 py-1.5 focus:ring-2 focus:ring-orange-500 dark:placeholder-zinc-500 transition-colors duration-200' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="" className='text-zinc-700 dark:text-zinc-300 text-sm font-medium'>Selling Price</label>
                    <input type="text"
                        name='SellingPrice'
                        value={bookForm.SellingPrice}
                        onChange={handleFormChange}
                        placeholder='Selling Price' className='w-full outline-none text-gray-950 dark:text-white h-5px bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 border rounded-sm px-2 py-1.5 focus:ring-2 focus:ring-orange-500 dark:placeholder-zinc-500 transition-colors duration-200' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="" className='text-zinc-700 dark:text-zinc-300 text-sm font-medium'>Publish Date</label>
                    <input type="date"
                        name='PublishDate'
                        value={bookForm.PublishDate}
                        onChange={handleFormChange}
                        placeholder='Publish Date' className='w-full outline-none text-gray-950 dark:text-white h-5px bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 border rounded-sm px-2 py-1.5 focus:ring-2 focus:ring-orange-500 dark:[color-scheme:dark] transition-colors duration-200' />
                </div>



            </div>
            <div className='w-full flex justify-end'>
                <button
  onClick={handleSubmit}
  className="h-10 px-6 bg-green-600 hover:bg-green-700 active:scale-95 rounded-full text-white text-sm font-semibold cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md shadow-green-600/20 dark:shadow-green-600/30"
>
  SUBMIT
</button>
            </div>

            <div className='w-fill mt-10'>
                <div className='w-full'>
                    <table className='w-full bg-white dark:bg-zinc-900 divide-y divide-gray-200 dark:divide-zinc-700'>
                        <thead className='bg-gray-50 dark:bg-zinc-800'>
                            <tr>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-zinc-400'>Book Name</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-zinc-400'>Book Title</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-zinc-400'>Author</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-zinc-400'>Selling Price</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-zinc-400'>Publish Date</th>
                                <th className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-zinc-400'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white dark:bg-zinc-900 divide-y divide-gray-200 dark:divide-zinc-700'>
                            {
                                booklist.map((book, idx) => {
                                    return (
                                        <tr key={idx} className='hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors duration-150' >
                                            <td className='px-6 py-3 whitespace-nowrap text-zinc-800 dark:text-zinc-200'>{book.BookName}</td>
                                            <td className='px-6 py-3 whitespace-nowrap text-zinc-800 dark:text-zinc-200'>{book.BookTitle}</td>
                                            <td className='px-6 py-3 whitespace-nowrap text-zinc-800 dark:text-zinc-200'>{book.Author} </td>
                                            <td className='px-6 py-3 whitespace-nowrap text-zinc-800 dark:text-zinc-200'>{book.SellingPrice}</td>
                                            <td className='px-6 py-3 whitespace-nowrap text-zinc-800 dark:text-zinc-200'>{book.PublishDate}</td>
                                            <td className='px-6 py-3 whitespace-nowrap'>
                                                <div className='flex gap-5 text-2xl justify-items-start px-1.5'>
                                                    <button
                                                        type="button"
                                                        className='text-red-800 dark:text-red-400 cursor-pointer hover:scale-110 transition-transform duration-150'
                                                        onClick={() => handleDelete(book._id)}
                                                    >
                                                        <MdDeleteForever />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className='text-green-800 dark:text-green-400 cursor-pointer hover:scale-110 transition-transform duration-150'
                                                        onClick={() => handleUpdate(book)}
                                                    >
                                                        <FaEdit /></button>
                                                </div>

                                            </td>
                                        </tr>

                                    );


                                })
                            }

                        </tbody>
                    </table>

                </div>

            </div>

        </div>
        </>
        
    )
}

export default Home
