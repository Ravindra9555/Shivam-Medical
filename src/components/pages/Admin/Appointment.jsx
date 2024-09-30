import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import axios from "axios";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

const Appointment = () => {
  const [date, setDate] = useState(dayjs());
  const [data, setData] = useState([]);

  // Define table columns based on actual data structure
  const columns = [
    {
      name: "Date/ Time",
      selector: (row) => (dayjs(row.date).format("DD/MM/YYYY") + " - "+ row.time), // Assuming dateTime is the correct field for date/time
      sortable: true,
    },
    {
      name: "Patient Name",
      selector: (row) => row.patientId.name,
      sortable: true,
    },
    {
      name: "Doctor Name",
      selector: (row) => row.doctorId.name,
      sortable: true,
    },
    {
        name: "Status",
        selector: (row) => {
          if (row.status === "pending") {
            return <span className="badge bg-warning text-white">Pending</span>;
          } else if (row.status === "complete") {
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
            {
              row.status === "pending" && (
                <>
                  <button className="btn btn-sm btn-outline-success">Accept</button>
                  <button className="btn btn-sm btn-outline-danger ms-2">Cancel</button>
                </>
              )
            }
            {
              row.status === "completed" && (
                <>
                  <button className="btn btn-sm btn-outline-warning">Re-schedule</button>
                  <button className="btn btn-sm btn-outline-danger ms-2">Cancel</button>
                </>
              )
            }
          
          </div>
        ),
        sortable: false,
      },
      {
        name: "Delete",
        selector: (row) => (  <button className="btn btn-sm btn-danger ms-2">Delete</button>),
        sortable: true,
      },
  ];

  // Fetch appointments whenever the date changes
  useEffect(() => {
    console.log(date.format("YYYY-MM-DD"));
    fetchAppointments();
  }, [date]);

  const fetchAppointments = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASEURL}/v1/api/appointment/getAllAppointmentsByDate`,  { 
        // date: date.format("DD/MM/YYYY") 
        "date":"12/07/2001"
    });
    //   setData(res.data); // Set the fetched appointment data to the state
      console.log(res.data);
      setData(res.data.data);
      // Ensure that data is fetched correctly
    } catch (error) {
      console.log("Error fetching appointments:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
        timer:1500,
      })
    }
  };

  const getAllAppointments =async()=>{
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASEURL}/v1/api/appointment/getAllAppointments`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
        },
      });
      setData(res.data.data); // Set the fetched appointment data to the state
      console.log(res.data);
    } catch (error) {
      console.log("Error fetching appointments:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
        timer:1500,
      })
    }

  }
  return (
    <>
      <div className="pt-1">
        <div className="select-date d-flex justify-content-between gap-2 align-items-center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select date"
              value={date}
              onChange={(newValue) => setDate(newValue)} // Update state with new date
            />
          </LocalizationProvider>
          <h4 className="text-center ms-4">
            {date.format("DD/MM/YYYY")} Appointments
          </h4>
         <div  className="d-flex  justify-content-between gap-2">
            <button className="btn btn-primary" onClick={getAllAppointments}>  All Appointment</button>
            <button className="btn btn-primary">  Book New  Appointment</button>
 
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
