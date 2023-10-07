'use client'
import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

export default function ModalPriceCategory({Open, OpenChange}:{Open:boolean, OpenChange:any}) {


    return (
        <>
            <Modal isOpen={Open} onOpenChange={OpenChange} isDismissable={false}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">New Range Price</ModalHeader>
                            <ModalBody>

                                <div className="w-full">
                                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor=" Start Range">
                                                Start Range
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username" type="number" placeholder="0.0"/>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor="End Range">
                                                End Range
                                            </label>
                                            <input
                                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="password" type="number" placeholder="0.0"/>

                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor="Discount">
                                               Discount
                                            </label>
                                            <input
                                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="password" type="number" placeholder="0.0" readOnly/>
                                            <p className={"text-xs"}>El valor esta sujeto a cambios</p>

                                        </div>

                                        <ModalFooter>
                                            <Button color="danger"  onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="success" onPress={onClose} className={"text-white"}>
                                                Save
                                            </Button>
                                        </ModalFooter>

                                    </form>

                                </div>

                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
