// import { useContext, createContext, useState, useMemo } from "react";

// // Create the Admin Context
// const AdminContext = createContext();

// // AdminProvider Component
// const AdminProvider = ({ children }) => {
//   const [admin, setAdmin] = useState({
//     id: "",
//     name: "",
//     email: "",
//     role: "",
//     isActive: false,  // Default to a boolean value
//     profilePic: "",
//   });

//   // Memoize the context value to prevent unnecessary re-renders
//   const value = useMemo(() => ({ admin, setAdmin }), [admin]);

//   return (
//     <AdminContext.Provider value={value}>
//       {children}
//     </AdminContext.Provider>
//   );
// };

// // Custom Hook to use Admin Context
// const useAdmin = () => useContext(AdminContext);

// export { AdminProvider, useAdmin };

import { useContext, createContext, useState, useEffect } from "react";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    // Load the initial state from sessionStorage if available
    const storedAdmin = sessionStorage.getItem("admin");
    return storedAdmin ? JSON.parse(storedAdmin) : {
      id: "",
      name: "",
      email: "",
      role: "",
      isActive: "",
      profilePic: "",
    };
  });

  useEffect(() => {
    // Update sessionStorage whenever the admin state changes
    if (admin.id) {
      sessionStorage.setItem("admin", JSON.stringify(admin));
    } else {
      sessionStorage.removeItem("admin"); // Remove it if admin logs out
    }
  }, [admin]);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

const useAdmin = () => useContext(AdminContext);

export { AdminProvider, useAdmin };
