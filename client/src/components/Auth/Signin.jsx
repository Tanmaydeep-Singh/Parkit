import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Signin = ({ isOpen, setIsOpen }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submit = async () => {
    closeModal();
    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-parkit-200 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-700 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className="mt-2 w-full flex flex-col gap-3">
                    <form className="flex flex-col gap-2">
                      <div className="w-full flex flex-col gap-2 pt-1">
                        <label className="font-bold" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          value={userData.email}
                          onChange={handleChange}
                          placeholder="user@email.com"
                          className="w-full border border-parkit-200 px-3 py-2 rounded-lg focus:border-parkit-100"
                        />
                      </div>
                      <div className="w-full flex flex-col gap-2 pt-1">
                        <label className="font-bold" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="text"
                          id="password"
                          value={userData.password}
                          onChange={handleChange}
                          placeholder="*********"
                          className="w-full border border-parkit-200 px-3 py-2  rounded-lg focus:border-parkit-100"
                        />
                      </div>
                      <div
                        className="w-full text-center bg-parkit-200 font-bold p-2 rounded-lg mt-2 cursor-pointer  "
                        onClick={submit}
                      >
                        Sign In
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Signin;
