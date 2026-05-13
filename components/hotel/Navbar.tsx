// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// export const Navbar: React.FC = () => {
//   const router = useRouter();
//   const handleScroll = (id: string) => {
//     const section = document.querySelector(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo / Brand */}
//           <Image
//             src="/images/prince-logo.png"
//             alt={`logo`}
//             width={100}
//             height={48}
//             className="h-12 w-auto mb-2 md:mb-0 object-contain cursor-pointer"
//              onClick={() => handleScroll("/")}
//           />

//           {/* Navigation Links */}
//           <div className="hidden md:flex space-x-8">
//             <button
//               onClick={() => handleScroll("#home")}
//               className="text-gray-700 font-medium hover:text-blue-600"
//             >
//               Home
//             </button>
//             <button
//               onClick={() => router.push("/rooms")}
//               className="text-gray-700 font-medium hover:text-blue-600"
//             >
//               Rooms
//             </button>
//             <button
//               onClick={() => handleScroll("#amenities")}
//               className="text-gray-700 font-medium hover:text-blue-600"
//             >
//               Amenities
//             </button>
//             <button
//               onClick={() => handleScroll("#contact")}
//               className="text-gray-700 font-medium hover:text-blue-600"
//             >
//               Contact
//             </button>
//           </div>

//           {/* CTA Button */}
//           <button
//             onClick={() => router.push("/rooms")}
//             className="cursor-pointer bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap"
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    setIsOpen(false);

    if (pathname !== "/") {
      // If not on homepage, navigate there first
      router.push(`/${id ? `?scrollTo=${id.replace("#", "")}` : ""}`);
    } else {
      // If already on homepage, scroll smoothly
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navigateTo = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between py-0">
          {/* Logo */}
          <Link href='/' onClick={() => setIsOpen(false)}>
          <Image
            src="/images/logoimage.png"
            alt="logo"
            width={100}
            height={100}
            className="h-12 md:h-16 w-auto object-contain cursor-pointer"
            
          />
          </Link>
          

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
             <Link href='/'>
               <button
      
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Home
            </button>
             </Link>
          
            <button
              onClick={() => handleScroll("#rooms")}
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Rooms
            </button>
            <button
              onClick={() => handleScroll("#amenities")}
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Amenities
            </button>
            <Link href='/gallery'>
               <button
      onClick={()=> handleScroll("#home")}
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Gallery
            </button>
             </Link>
            <Link href='/place-to-visit'>
               <button
      onClick={()=> handleScroll("#home")}
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Place To Visit
            </button>
             </Link>
            <button
              onClick={() => handleScroll("#contact")}
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-2">
          {/* CTA Button */}
          <button
            onClick={() => router.push("/rooms")}
            // onClick={()=> handleScroll("#home")}
            className="hidden sm:inline-flex cursor-pointer bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap"
          >
            Book Now
          </button>
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-gray-100 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => navigateTo("/")}
                className="w-full rounded-md px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                Home
              </button>
              <button
                onClick={() => handleScroll("#rooms")}
                className="w-full rounded-md px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                Rooms
              </button>
              <button
                onClick={() => handleScroll("#amenities")}
                className="w-full rounded-md px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                Amenities
              </button>
              <button
                onClick={() => navigateTo("/gallery")}
                className="w-full rounded-md px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                Gallery
              </button>
              <button
                onClick={() => navigateTo("/place-to-visit")}
                className="w-full rounded-md px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                Place To Visit
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="w-full rounded-md px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                Contact
              </button>
              <button
                onClick={() => navigateTo("/rooms")}
                className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
