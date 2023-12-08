import Features from "../components/Features";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Hero from "../components/Hero";

export default function Mail() {
  return (
    <>
      <Head />
      <div className="w-full bg-gray-800 shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar container mx-auto px-6 py-3">
        <div className="w-64 px-4">
          <div className="h-16 flex items-center">
            <a
              href="#"
              className="w-48 mx-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150"
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
          <div className="px-2 pt-4 pb-8 border-r border-gray-300">
            <ul className="space-y-2">
              <li>
                <a className="bg-gray-500 bg-opacity-30 text-blue-600 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
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
              <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
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
              </li>
              <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
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
              </li>
              <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
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
              </li>
              <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
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
              <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center justify-between text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
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
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
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
              </li>
              <li>
                <a className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
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
          className="flex-1 px-2"
          x-data="{ checkAll: false, filterMessages: false }"
        >
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative flex items-center px-0.5 space-x-0.5">
                <input
                  click="checkAll = !checkAll"
                  type="checkbox"
                  className="focus:ring-0"
                />
                <button click="filterMessages = !filterMessages">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  x-show="filterMessages"
                  clickaway="filterMessages = false"
                  className="bg-gray-200 shadow-2xl absolute left-0 top-6 w-32 py-2 text-gray-900 rounded z-10"
                  style={{ display: "none" }}
                >
                  <button
                    click="filterMessages = false"
                    className="w-full text-sm py-1 hover:bg-blue-600 hover:bg-opacity-30"
                  >
                    All
                  </button>
                  <button
                    click="filterMessages = false"
                    className="w-full text-sm py-1 hover:bg-blue-600 hover:bg-opacity-30"
                  >
                    None
                  </button>
                  <button
                    click="filterMessages = false"
                    className="w-full text-sm py-1 hover:bg-blue-600 hover:bg-opacity-30"
                  >
                    Read
                  </button>
                  <button
                    click="filterMessages = false"
                    className="w-full text-sm py-1 hover:bg-blue-600 hover:bg-opacity-30"
                  >
                    Unread
                  </button>
                  <button
                    click="filterMessages = false"
                    className="w-full text-sm py-1 hover:bg-blue-600 hover:bg-opacity-30"
                  >
                    Starred
                  </button>
                  <button
                    click="filterMessages = false"
                    className="w-full text-sm py-1 hover:bg-blue-600 hover:bg-opacity-30"
                  >
                    Unstarred
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ml-3">
                  <button
                    title="Reload"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                </div>
                <span className="bg-gray-300 h-6 w-[.5px] mx-3" />
                <div className="flex items-center space-x-2">
                  <button
                    title="Archive"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
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
                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                      />
                    </svg>
                  </button>
                  <button
                    title="Mark As Spam"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
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
                  </button>
                  <button
                    title="Delete"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
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
                  </button>
                </div>
                <span className="bg-gray-300 h-6 w-[.5px] mx-3" />
                <div className="flex items-center space-x-2">
                  <button
                    title="Mark As Read"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
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
                        d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                      />
                    </svg>
                  </button>
                  <button
                    title="Mark As Unread"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  <button
                    title="Add Star"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
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
                  </button>
                </div>
              </div>
            </div>
            <div className="px-2 flex items-center space-x-4">
              <span className="text-sm text-gray-500">1-15 of 1,323</span>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-200 text-gray-400 p-1.5 rounded-lg"
                  title="Newer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1.5 rounded-lg transition duration-150"
                  title="Older"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 mb-6">
            <ul>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                      <button title="Starred">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-yellow-500 hover:text-yellow-600 h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
                    <span className="w-56 pr-2 font-bold truncate">
                      Betty Garmon
                    </span>
                    <span className="w-64 font-bold truncate">
                      Consectetur adipiscing elit
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Ccusantium doloremque laudantium, totam rem aperiam, eaque
                      ipsa
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
                      <button title="Mark As Read">
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
                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
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
                    <span x-show="!messageHover" className="text-sm font-bold">
                      1:23 PM
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                      <button title="Starred">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-yellow-500 hover:text-yellow-600 h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                      <button title="Email is marked as important">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-yellow-500 hover:text-yellow-600 h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                      </button>
                    </div>
                    <span className="w-56 pr-2 font-bold truncate">
                      Elsa J. Collins
                    </span>
                    <span className="w-64 font-bold truncate">
                      Sed do eiusmod tempor incididunt
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo
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
                      <button title="Mark As Read">
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
                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
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
                    <span x-show="!messageHover" className="text-sm font-bold">
                      Jan 29
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 truncate">Ellen Orozco</span>
                    <span className="w-64 truncate">
                      Labore et dolore magna aliqua
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Nemo enim ipsam voluptatem quia voluptas sit
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
                      Jan 29
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 truncate">Casey Jackson</span>
                    <span className="w-64 truncate">
                      Ut enim ad minim veniam
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Aspernatur aut odit aut fugit, sed quia consequuntur
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
                      Jan 26
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 font-bold truncate">
                      Jerry Brown
                    </span>
                    <span className="w-64 font-bold truncate">
                      Quis nostrud exercitation
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Magni dolores eos qui ratione voluptatem sequi nesciunt
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
                      <button title="Mark As Read">
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
                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
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
                    <span x-show="!messageHover" className="text-sm font-bold">
                      Jan 25
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 truncate">Rob Brandt</span>
                    <span className="w-64 truncate">
                      Ullamco laboris nisi ut aliquip
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Neque porro quisquam est, qui
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
                      Jan 25
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 truncate">Edith Banks</span>
                    <span className="w-64 truncate">Commodo consequat</span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit
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
                      Jan 25
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 truncate">Cindy Barth</span>
                    <span className="w-64 truncate">
                      Duis aute irure dolor in reprehenderit
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Sed quia non numquam eius modi tempora incidunt ut
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
                      style={{}}
                    >
                      Jan 25
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 truncate">Debra Thomas</span>
                    <span className="w-64 truncate">
                      Voluptate velit esse cillum
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Labore et dolore magnam aliquam quaerat voluptatem
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
                      style={{}}
                    >
                      Jan 19
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 truncate">Karen Jones</span>
                    <span className="w-64 truncate">
                      Dolore eu fugiat nulla pariatur
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Ut enim ad minima veniam, quis nostrum exercitationem
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
                      style={{}}
                    >
                      Jan 18
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 truncate">Sonia Washington</span>
                    <span className="w-64 truncate">
                      Excepteur sint occaecat
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur
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
                      Jan 18
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 truncate">Jonas Santana</span>
                    <span className="w-64 truncate">
                      Cupidatat non proident
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
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
                      Jan 17
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 truncate">Mary Barks</span>
                    <span className="w-64 truncate">
                      Sunt in culpa qui officia
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Velit esse quam nihil molestiae consequatur
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
                      Jan 12
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center border-y hover:bg-gray-200 px-2">
                <input
                  type="checkbox"
                  className="focus:ring-0 border-2 border-gray-400"
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
                    <span className="w-56 pr-2 truncate">Rachel Mullane</span>
                    <span className="w-64 truncate">
                      Deserunt mollit anim id est laborum
                    </span>
                    <span className="mx-1">-</span>
                    <span className="w-96 text-gray-600 text-sm truncate">
                      Vel illum qui dolorem eum fugiat quo voluptas nulla
                      pariatur?
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
                      Jan 10
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
