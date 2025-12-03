import React from 'react';

const ReceiveForm = ({ Data }) => {

    // Extract your data exactly as you wrote
    const { formData } = Data;
    const { buyer_name, totalPrice, message, buyer_email } = formData;

    return (
        <div className="p-6 bg-white shadow-lg rounded-xl w-full max-w-3xl mx-auto mt-4">

            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Received Interest</h2>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Buyer Name</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Quantity</th>
                            <th className="py-3 px-4 text-left">Total Price</th>
                            <th className="py-3 px-4 text-left">Message</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="py-3 px-4">{buyer_name}</td>
                            <td className="py-3 px-4">{buyer_email}</td>
                            <td className="py-3 px-4">{formData.quantitys}</td>
                            <td className="py-3 px-4">{totalPrice}</td>
                            <td className="py-3 px-4">{message}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex gap-4 mt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
                    Accept
                </button>

                <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg">
                    Reject
                </button>
            </div>

        </div>
    );
};

export default ReceiveForm;
