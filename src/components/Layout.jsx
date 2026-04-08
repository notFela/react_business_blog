import React, { useEffect, useRef, useState, useTransition } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BounceLoader } from "react-spinners";

const Layout = () => {
    const location = useLocation();
    const [isPending, startTransition] = useTransition();
    const [showSpinner, setShowSpinner] = useState(false);
    const prevPathRef = useRef(location.pathname);

    useEffect(() => {
        if (location.pathname !== prevPathRef.current) {
            prevPathRef.current = location.pathname;
            startTransition(() => {
                setShowSpinner(true);
            });

            const timer = setTimeout(() => {
                startTransition(() => {
                    setShowSpinner(false);
                });
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [location.pathname, startTransition]);

    console.log(location);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <main className="grow container mx-auto px-4 py-8 relative min-h-[50vh]">
                <div
                    className={`transition-opacity duration-300 ${showSpinner ? "opacity-0" : "opacity-100"}`}
                >
                    <Outlet />
                </div>

                {(isPending || showSpinner) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/90 z-10">
                        {/* <BeatLoader
              color="#2563eb"
              size={15}
              margin={6}
              speedMultiplier={0.8}
            /> */}
                        <BounceLoader
                        // color="#2563eb"
                        // size={15}
                        // margin={6}
                        // speedMultiplier={0.8}
                        />
                        <p className="mt-4 text-gray-500 text-sm font-medium animate-pulse">
                            Loading...
                        </p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;