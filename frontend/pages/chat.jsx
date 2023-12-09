import { useState } from "react";

import Footer from "../components/Footer";
import Head from "../components/Head";

import SidebarDrawer from "../components/SidebarDrawer";
import Popup from "reactjs-popup";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <Head isApp={true} />
      <div className="">
        <SidebarDrawer />

        <div className="h-screen overflow-hidden w-full absolute top-12 left-14  shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar container  ">
          {/* This is an example component */}

          {/* headaer */}

          {/* end header */}
          {/* Chatting */}

          <div className="w-1/2 mt-5 border-r border-gray-300 ">
            <div className="h-16  flex items-center">
              <a
                onClick={() => setOpen((o) => !o)}
                className="cursor-pointer w-48 mx-auto bg-white   flex flex-row items-start justify-center text-black py-2 rounded space-x-2 transition duration-150    "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>New Chat</span>
              </a>
            </div>
            <div className="px-2 pt-4 pb-8 ml-4 h-screen">
              <ul className="space-y-2 ">
                <li>
                  <a className="bg-gray-500 bg-opacity-30 text-white flex items-center justify-between py-1.5 px-4 rounded cursor-pointer ">
                    <div className="flex flex-row py-4 px-2 justify-center items-center  ">
                      <div className="">
                        <img
                          src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                          className="object-cover h-12 w-12 rounded-full"
                          alt=""
                        />
                      </div>
                      <div className="w-full">
                        <div className="text-lg font-semibold">Luis1994</div>
                        <span className="text-gray-500">
                          Pick me at 9:00 Am
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="bg-gray-500 bg-opacity-30 text-white flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
                    <div className="flex flex-row py-4 px-2 justify-center items-center ">
                      <div className="w-1/4">
                        <img
                          src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                          className="object-cover h-12 w-12 rounded-full"
                          alt=""
                        />
                      </div>
                      <div className="w-full">
                        <div className="text-lg font-semibold">Luis1994</div>
                        <span className="text-gray-500">
                          Pick me at 9:00 Am
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="bg-gray-500 bg-opacity-30 text-white flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
                    <div className="flex flex-row py-4 px-2 justify-center items-center ">
                      <div className="w-1/4">
                        <img
                          src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                          className="object-cover h-12 w-12 rounded-full"
                          alt=""
                        />
                      </div>
                      <div className="w-full">
                        <div className="text-lg font-semibold">Luis1994</div>
                        <span className="text-gray-500">
                          Pick me at 9:00 Am
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className=" px-2 "
            x-data="{ checkAll: false, filterMessages: false }"
          >
            <div className="mt-8 flex items-center justify-between">
              <div className="px-2 flex items-center space-x-4">
                {/* <span className="text-sm text-gray-500">1-15 of 1,323</span> */}
              </div>
            </div>
            <div className="text-white    bg-black">
              {/* <span className="text-2xl ">Inbox</span> */}
              <div className="flex flex-row justify-between bg-gray-500 bg-opacity-30   backdrop-filter backdrop-blur-lg min-h-[90vh]">
                {/* chat list */}

                {/* end chat list */}
                {/* message */}
                <div className="w-full  flex flex-col justify-between">
                  <div className="flex flex-col mt-5">
                    <div className="flex justify-end mb-4">
                      <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                        Welcome to group everyone !
                      </div>
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-start mb-4">
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                      <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat at praesentium, aut ullam delectus odio error
                        sit rem. Architecto nulla doloribus laborum illo rem
                        enim dolor odio saepe, consequatur quas?
                      </div>
                    </div>
                    <div className="flex justify-end mb-4">
                      <div>
                        <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Magnam, repudiandae.
                        </div>
                        <div className="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Debitis, reiciendis!
                        </div>
                      </div>
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-start mb-4">
                      <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                      />
                      <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl ">
                        happy holiday guys!
                      </div>
                    </div>
                  </div>
                  <div className="py-5">
                    <input
                      className="w-full bg-white py-5 px-3 rounded-xl text-gray-500"
                      type="text"
                      placeholder="type your message here..."
                    />
                  </div>
                </div>
                {/* end message */}
              </div>
            </div>
          </div>
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className="p-6 w-[35%] flex items-center justify-center bottom-0 right-0 fixed mb-0 pt-0">
              <div className="container max-w-screen-lg mx-auto">
                <div className="bg-gray-100 flex justify-between flex-row w-[100%] top-0 p-2 px-4 font-bold">
                  <div>New Message </div>
                  <div
                    className="cursor-pointer text-red-500 font-normal"
                    onClick={closeModal}
                  >
                    X
                  </div>
                </div>
                <div>
                  <div className="bg-white rounded shadow-lg   p-4  mb-6">
                    <div className=" text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="lg:col-span-2">
                        <div className=" text-sm grid-cols-1 md:grid-cols-5">
                          <div className="md:col-span-5">
                            <label htmlFor="full_name">To</label>
                            <input
                              type="text"
                              name="full_name"
                              id="full_name"
                              className="h-10 border mt-1 rounded px-2 w-full bg-gray-50"
                              defaultValue=""
                              placeholder="email@domain.com"
                            />
                          </div>
                          <div className="md:col-span-5">
                            <label htmlFor="email">Subject</label>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              className="h-10 border mt-1 rounded px-2 w-full bg-gray-50"
                              defaultValue=""
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="country">Message</label>

                            <div
                              contentEditable
                              type="text"
                              name="zipcode"
                              id="zipcode"
                              className="transition-all  flex items-start justify-start flex-col border  rounded px-2 w-full bg-gray-50 h-52"
                              placeholder=""
                              defaultValue=""
                            />
                          </div>

                          <div className="md:col-span-5 text-start">
                            <div className="inline-flex items-start">
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Send
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
