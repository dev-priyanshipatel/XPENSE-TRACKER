import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageExpense = () => {

  const [expense, setExpense] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("expense")) || [];
    setExpense(data);
  },[])

  const handleDelete = (id) => {
    const newExpense = expense.filter((expense) => {
      return id !== expense.id
    }) 
    toast.error("Expense Deleteed Successfully...");
    setExpense(newExpense);
    localStorage.setItem("expense",JSON.stringify(newExpense));
  }
  
  return (
    <div className="bg-white dark:bg-gray-900 h-screen ">
      <div className="max-w-screen-xl mx-auto">
        <div className="pt-40">
          <div className="flex justify-between p-4">
            <h3 className="text-4xl text-white  font-semibold">
              Your Expenses
            </h3>
          </div>
          <div className="pt-5 relative overflow-x-auto overflow-hidden shadow-md sm:rounded-lg p-4">
            {expense.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  No Expense has been Added
                </h2>
                
              </div>
            ) : (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 rounded-tl-lg">
                      SR NO.
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Payment Method
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Notes
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-tr-lg">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {expense.map((expense, idx) => {
                    return (
                      <tr
                        key={expense.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4">{idx + 1}</td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {expense.title}
                        </th>

                        <td className="px-6 py-4">${expense.amount}</td>
                        <td className="px-6 py-4">{expense.category}</td>
                        <td className="px-6 py-4">{expense.date}</td>
                        <td className="px-6 py-4">{expense.paymentmethod}</td>
                        <td className="px-6 py-4">{expense.note}</td>
                        <td className="px-6 py-4 flex gap-3">
                          <Link
                            to={`/edit-expense/${expense.id}`}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </Link>
                          <button
                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                            onClick={() => {
                              handleDelete(expense.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageExpense;
