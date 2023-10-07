'use client'
import {useDisclosure} from "@nextui-org/react";
import Image from "next/image";
import Edit from "@/icons/pen.png";
import Trash from "@/icons/trash.png";
import React from "react";
import ModalPriceCategory from "@/components/ModalPriceCategory";

const TableItemsPriceCategory = () => {

    const Test = [
        {nombre:"aaasd", edad:20},
        {nombre:"aaasd", edad:20},
        {nombre:"aaasd", edad:20},
        {nombre:"aaasd", edad:20},
        {nombre:"aaasd", edad:20},
        {nombre:"aaasd", edad:20}
    ]
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (


        <>

                <div className={"flex justify-center"}>

                <div className="flex flex-col container" style={{width:"90%"}}>
                    <table className="min-w-full text-center text-sm font-light shadow-lg">
                        <thead className="border-b font-medium bg-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-4 rounded-tl-xl">First</th>
                            <th scope="col" className="px-6 py-4">Last</th>
                            <th scope="col" className="px-6 py-4 rounded-tr-xl">Actions</th>
                        </tr>
                        </thead>
                        <tbody className={"bg-white "}>

                        {Test.map((items:any, index:number) => (
                            <tr className="border-b " key={index}>
                                <td className="whitespace-nowrap px-6 py-4 rounded-bl-xl">{items.nombre}</td>
                                <td className="whitespace-nowrap px-6 py-4">{items.edad}</td>
                                <td className={"rounded-br-xl"}>

                                 <span>
                                      <button className={"me-5"} style={{backgroundColor:"transparent"}} onClick={onOpen}>
                                            <Image src={Edit} alt={"EditIcon"} width={20} height={20}/>
                                      </button>
                                  </span>
                                    <span>
                                      <button style={{backgroundColor:"transparent"}}>
                                          <Image src={Trash} alt={"TrashIcon"} width={20} height={20}/>
                                      </button>
                                  </span>

                                </td>
                            </tr>
                        ))}


                        </tbody>
                    </table>
                </div>
            </div>

            <ModalPriceCategory Open={isOpen} OpenChange={onOpenChange}/>
        </>

    )
}


export default TableItemsPriceCategory;