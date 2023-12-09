import Footer from "../components/Footer";
import Head from "../components/Head";

import SidebarDrawer from "../components/SidebarDrawer";

export default function Mail() {
  return (
    <>
      <Head isApp={true} />
      <div className="">
        <SidebarDrawer />
        <div className="h-screen overflow-hidden w-full absolute top-12 left-14  shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar container mx-auto px-6 py-3">
          <div className="w-64 px-4 ">
            <div className="h-16 flex items-center">
              <a
                href="#"
                className="w-48 mx-auto bg-white  flex items-center justify-center text-black py-2 rounded space-x-2 transition duration-150"
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
                <span>Compose</span>
              </a>
            </div>
            <div className="px-2 pt-4 pb-8 border-r border-gray-300 h-screen">
              <ul className="space-y-2 ">
                <li>
                  <a className="bg-gray-500 bg-opacity-30 text-white flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
                    <span className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                      <span>Inbox</span>
                    </span>
                    <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                      3
                    </span>
                  </a>
                </li>
                {/* <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-white flex items-center text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <span>Starred</span>
                </a>
              </li> */}
                {/* <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-white flex items-center text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Snoozed</span>
                </a>
              </li> */}
                {/* <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-white flex items-center text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  <span>Important</span>
                </a>
              </li> */}
                <li>
                  <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-white flex items-center justify-between text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                    <span className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>Drafts</span>
                    </span>
                    <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                      1
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-white flex items-center text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    <span>Sent</span>
                  </a>
                </li>

                {/* <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-white flex items-center text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span>Spam</span>
                </a>
              </li> */}
                <li>
                  <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-white flex items-center text-gray-400 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span>Trash</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex-1 px-2 "
            x-data="{ checkAll: false, filterMessages: false }"
          >
            <div className="h-16 flex items-center justify-between">
              <div className="px-2 flex items-center space-x-4">
                {/* <span className="text-sm text-gray-500">1-15 of 1,323</span> */}
              </div>
            </div>
            <div className="text-white    bg-black">
              <span className="text-2xl ">Inbox</span>
              <ul>
                <li className="flex items-center border-y hover:bg-gray-900  mt-5 px-2 ">
                  <input
                    type="checkbox"
                    className="focus:ring-0 border-1 border-gray-400"
                    defaultChecked="checkAll"
                  />
                  <div
                    x-data="{ messageHover: false }"
                    mouseover="messageHover = true"
                    mouseleave="messageHover = false"
                    className="w-full flex items-center justify-between p-1 my-1 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center mr-4 ml-1 space-x-1">
                        <button title="Not starred">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-500 hover:text-gray-900 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        </button>
                        <button title="Click to mark this email as important">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-500 hover:text-gray-900 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </button>
                      </div>
                      <span className="w-56 pr-2 truncate">
                        William Livingston
                      </span>
                      <span className="w-64 truncate">
                        Lorem ipsum dolor sit amet
                      </span>
                      <span className="mx-1">-</span>
                      <span className="w-96 text-gray-600 text-sm truncate">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem
                      </span>
                    </div>
                    <div className="w-32 flex items-center justify-end">
                      <div
                        x-show="messageHover"
                        className="flex items-center space-x-2"
                        style={{ display: "none" }}
                      >
                        <button title="Archive">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-500 hover:text-gray-900 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                            />
                          </svg>
                        </button>
                        <button title="Delete">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-500 hover:text-gray-900 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                        <button title="Mark As Unread">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-500 hover:text-gray-900 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </button>
                        <button title="Snooze">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-500 hover:text-gray-900 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                      <span
                        x-show="!messageHover"
                        className="text-sm text-gray-500"
                      >
                        3:05 PM
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
