import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Profile Photo",
    selector: (row) => (
      <>
        <img
          className="p-1 rounded-circle"
          src={row.profilePic || "https://via.placeholder.com/100"}
          alt=""
          width="80"
          height={80}
        />
      </>
    ),
    sortable: true,
  },
  {
    name: "Created Date",
    selector: (row) => <>{dayjs(row.created).format("DD.MM.YYYY")}</>,
    sortable: true,
  },
  {
    name: "Is Active",
    selector: (row) => (
      <>
        {row.isActive ? (
          <span class="badge text-bg-success">Active</span>
        ) : (
          <span class="badge text-bg-danger">Disabled</span>
        )}
      </>
    ),
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => (
      <>
        <div className="d-flex gap-2">
          <button
            className="btn btn-sm btn-outline-danger "
            onClick={() => deactive(row._id, row.isActive)}
          >
            {row.isActive ? (
              <span className="text-danger">Inactivate</span>
            ) : (
              <span className="text-success">Activate</span>
            )}
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteAdmin(row._id)}
          >
            Delete
          </button>
        </div>
      </>
    ),
  },
];
const deleteAdmin = () => {
  console.log("delete");
};

const deactive = async (id, active) => {
  try {
    if(active){

        const res = await axios.post(
          `${import.meta.env.VITE_BASEURL}/v1/api/admin/makeactive`,
          {
            id: id,
          },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
            },
          }
        );
        if (res.status == 200 && res.data.statusCode == 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: res.data.message,
          });
          fetchAdmins();
        }
    }
    else{
        const res = await axios.post(
            `${import.meta.env.VITE_BASEURL}/v1/api/admin/makeinactive`,
            {
              id: id,
            },
            {
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
              },
            }
          );
          if (res.status == 200 && res.data.statusCode == 200) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: res.data.message,
            });
            fetchAdmins();
          }
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.response.data.message,
    });
  }
  console.log("deactive");
};

const AllAdmins = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetchAdmins();
  }, []);
  const fetchAdmins = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASEURL}/v1/api/admin/all`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
          },
        }
      );
      if (response.status == 200 && response.data.statusCode == 200) {
        setAdmins(response.data.data);
      }
    } catch (error) {
      console.log(error); // Handle error here. For example, display an error message to the user.  //  }
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };
  return (
    <div>
      <DataTable
        title="Admins of Shivam Medical "
        columns={columns}
        data={admins}
        pagination
      />
      ;
    </div>
  );
};

export default AllAdmins;
