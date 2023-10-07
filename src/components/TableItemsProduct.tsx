import {useDisclosure} from "@nextui-org/react";
import Image from "next/image";
import React, {useState} from "react";
import Edit from "@/icons/pen.png";
import Trash from "@/icons/trash.png";
import ModalProduct from "@/components/ModalProduct";
import IProduct from "@/types/IProduct";

const TableItemsProduct = ({Products}: {Products:IProduct[]}) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [productsProps, setProductsProps] = useState<any>()

    const OpenModal = (items:any) => {
        setProductsProps(items);
        onOpen();
    }

    return (

        <>
            {/*Start Table*/}
            <div className={"flex justify-center bg-gray-100 items-center mt-2"}>
                <div className="flex flex-col container" style={{width:"90%"}}>
                    <table className="min-w-full text-center text-sm font-light shadow-lg">
                        <thead className="border-b font-medium bg-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-4 rounded-tl-xl">Name</th>
                            <th scope="col" className="px-6 py-4">Price</th>
                            <th scope="col" className="px-6 py-4 rounded-tr-xl">Actions</th>
                        </tr>
                        </thead>
                        <tbody className={"bg-white "}>

                        {Products?.map((items:any, index:number) => (
                            <tr className="border-b " key={index}>
                                <td className="whitespace-nowrap px-6 py-4 rounded-bl-xl">{items.name}</td>
                                <td className="whitespace-nowrap px-6 py-4">{items.price}</td>
                                <td className={"rounded-br-xl"}>

                                  <span>
                                      <button className={"me-5"} style={{backgroundColor:"transparent"}} onClick={() => OpenModal(items)}>
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
            {/*End Table*/}
            <ModalProduct Open={isOpen} OpenChange={onOpenChange} Products={productsProps} />

        </>

    )
}


export default TableItemsProduct;