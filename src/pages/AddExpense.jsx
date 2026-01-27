import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const [input, setInput] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    paymentmethod: "",
    note: "",
  });

  const [expense, setExpense] = useState(() => {
    return JSON.parse(localStorage.getItem("expense")) || [];
  });

  useEffect(() => {
    if (window.Datepicker) {
      const el = document.getElementById("date");
      if (el) {
        new window.Datepicker(el, {
          autohide: true,
          format: "dd/mm/yyyy",
        });

        el.addEventListener("changeDate", (e) => {
          const selectedDate = e.target.value;
          setInput((prev) => ({ ...prev, date: selectedDate }));
        });
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expense));
  },[expense])

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
      const newExpense = {
        id:Date.now(),
        ...input
      };
      setExpense([...expense, newExpense]);
      toast.success("expense added successfully...")
      setInput({
        title: "",
        amount: "",
        category: "",
        date: "",
        paymentmethod: "",
        note: "",
      });

      navigate('/manage-expense');
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center ">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="mb-10">
          <h3 className="text-white text-center text-4xl font-semibold">
            Add Expense
          </h3>
        </div>
        <div className="max-w-lg bg-gray-800 p-7 rounded-lg ">
          <form className="w-96 mx-auto">
            <div className="mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Expense Title :
              </label>
              <input
                type="text"
                id="title"
                onChange={handleChange}
                value={input.title}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Grocery"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Amount :
              </label>
              <input
                type="number"
                id="amount"
                onChange={handleChange}
                value={input.amount}
                placeholder="1200"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a category :
              </label>
              <select
                id="category"
                onChange={handleChange}
                value={input.category}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select a category</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="rent">Rent</option>
                <option value="shopping">Shopping</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select date :
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  data-datepicker
                  id="date"
                  onChange={handleChange}
                  value={input.date}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="paymentmethod"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Payment Method :
              </label>
              <select
                id="paymentmethod"
                onChange={handleChange}
                value={input.paymentmethod}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select Payment Method </option>
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="note"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Notes :
              </label>
              <textarea
                id="note"
                rows="4"
                onChange={handleChange}
                value={input.note}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your notes here..."
              ></textarea>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
