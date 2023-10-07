import React from "react";


const FormClient = () => {

    return (

        <>

            <div className={"flex flex-col justify-center h-72 items-center"}>

                <div className={"w-full max-w-xs shadow-lg rounded px-4 py-5"}>

                    <form>

                        <div className={"mb-3"}>
                            <label htmlFor="ClientName" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <input  className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder={"Introduce your name"} />
                        </div>

                        <div className={"mb-3"}>
                            <label htmlFor="DiscountClient" className="block text-sm font-medium leading-6 text-gray-900">
                                Discount
                            </label>
                            <input  className="shadow appearance-none border  rounded w-full py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder={"0.00"}/>
                        </div>

                        <div className={"mb-2"}>
                            <label htmlFor="DiscountClientApplied" className="block text-sm font-medium leading-6 text-gray-900">
                                Discount applied
                            </label>
                            <input  className="shadow appearance-none border  rounded w-full py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder={"0.00%"} readOnly/>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                             >
                                Register
                            </button>
                        </div>
                    </form>

                </div>

            </div>

        </>
    )
}

export default FormClient;