import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import axios from "axios";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const [date, setDate] = useState(dayjs());
  const [data, setData] = useState([]);
  const [dateState, setDateState] = useState(true);
 const navigate = useNavigate();
  // Define table columns based on actual data structure
  const columns = [
    {
      name: "Date/ Time",
      selector: (row) => dayjs(row.date).format("DD/MM/YYYY") + " - " + dayjs(row.time).format("h:m A"), // Format date properly
      sortable: true,
    },
    {
      name: "Patient Name",
      selector: (row) => row.patientId?.name,
      sortable: true,
    },
    {
      name: "Doctor Name",
      selector: (row) => row.doctorId?.name,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => {
        if (row.status == "pending") {
          return <span className="badge bg-warning text-white">Pending</span>;
        } else if (row.status =="completed") {
          return <span className="badge bg-success text-white">Completed</span>;
        } else {
          return <span className="badge bg-danger text-white">Cancelled</span>;
        }
      },
      sortable: true,
    },
    {
      name: "Message",
      selector: (row) => row.comments,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          {row.status == "pending" && (
            <>
              <button className="btn btn-sm btn-outline-success" onClick={()=>  CompleteAppointment(row._id)}>Completed</button>
              <button className="btn btn-sm btn-outline-danger ms-2" onClick={()=>cancelAppointment(row._id)}>Cancel</button>
            </>
          )}
          {row.status == "completed" && (
            <>
              <button className="btn btn-sm btn-outline-warning" onClick={()=> RescheduleAppointment(row._id)}>Re-schedule</button>
              <button className="btn btn-sm btn-outline-danger ms-2" onClick={()=>cancelAppointment(row._id)}>Cancel</button>
            </>
          )}
        </div>
      ),
      sortable: false,
      width:"200px"
    },
    {
      name: "Delete",
      selector: (row) => (
        <button
          className="btn btn-sm btn-danger ms-2"
          onClick={() => deleteAppointment(row._id)} // Attach delete function
        >
          Delete
        </button>
      ),
      sortable: false,
    },
  ];

  // Fetch appointments whenever the date changes
  useEffect(() => {
    fetchAppointments();
  }, [date]);

  const fetchAppointments = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASEURL}/v1/api/appointment/getAllAppointmentsByDate`,
        {
          date: date.format("YYYY-MM-DD"), // Format date to YYYY-MM-DD for API
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
          },
        }
      );
      setData(res.data.data);
      setDateState(true); // Set the fetched appointment data to the state
    } catch (error) {
      console.log("Error fetching appointments:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Something went wrong",
        timer: 1500,
      });
    }
  };

  const getAllAppointments = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASEURL}/v1/api/appointment/getAllAppointments`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
        },
      });
      setData(res.data.data);
      setDateState(false) // Set the fetched appointment data to the state
    } catch (error) {
      console.log("Error fetching all appointments:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Something went wrong",
        timer: 1500,
      });
    }
  };

  // Delete Appointment Function
  const deleteAppointment = async (appointmentId) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASEURL}/v1/api/appointment/deleteAppointment`,
        {
          id:appointmentId
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "Appointment has been deleted",
        timer: 1500,
      });
      // Refetch appointments after deletion
      fetchAppointments();
    } catch (error) {
      console.log("Error deleting appointment:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Something went wrong",
        timer: 1500,
      });
    }
  };
  const cancelAppointment = async (appointmentId) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASEURL}/v1/api/appointment/rejectAppointment`,
        {
          id:appointmentId
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
          },
        }
      );
      Swal.fire({
        icon: "success",
       
        text: res.data.message || " Something went wrong",
        timer: 1500,
      });
      // Refetch appointments after deletion
      fetchAppointments();
    } catch (error) {
      console.log("Error deleting appointment:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Something went wrong",
        timer: 1500,
      });
    }
  };

  const RescheduleAppointment = async (appointmentId) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASEURL}/v1/api/appointment/changeAppointmentStatusactive`,
        {
          id:appointmentId
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
          },
        }
      );
      Swal.fire({
        icon: "success",
       
        text: res.data.message || " Something went wrong",
        timer: 1500,
      });
      // Refetch appointments after deletion
      fetchAppointments();
    } catch (error) {
      console.log("Error deleting appointment:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Something went wrong",
        timer: 1500,
      });
    }
  };
  const CompleteAppointment = async (appointmentId) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASEURL}/v1/api/appointment/changeAppointmentStatusComplete`,
        {
          id:appointmentId
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
          },
        }
      );
      Swal.fire({
        icon: "success",
       
        text: res.data.message || " Something went wrong",
        timer: 1500,
      });
      // Refetch appointments after deletion
      fetchAppointments();
    } catch (error) {
      console.log("Error deleting appointment:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Something went wrong",
        timer: 1500,
      });
    }
  };
  return (
    <>
      <div className="pt-1">
        <div className="select-date d-flex justify-content-between gap-2 align-items-center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select date"
              format="DD-MM-YYYY"
              value={date}
              onChange={(newValue) => setDate(newValue)} // Update state with new date
            />
          </LocalizationProvider>
          <h5 className="text-center ms-4">{dateState? <>{date.format("DD/MM/YYYY")} </>: <>All </> }Appointments</h5>
          <div className="d-flex justify-content-between gap-2">
            <button className="btn btn-primary" onClick={getAllAppointments}>
              All Appointments
            </button>
            <button className="btn btn-primary" onClick={()=>navigate("/bookappointmentbyadmin")}>Book New Appointment</button>
          </div>
        </div>
        <div className="pt-2 bg-light">
          <DataTable
            title="Appointments"
            columns={columns}
            data={data} // Use fetched appointment data
            pagination
            highlightOnHover
          />
        </div>
      </div>
    </>
  );
};

export default Appointment;