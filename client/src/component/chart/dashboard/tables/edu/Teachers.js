import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Typography } from "@mui/material";
import axios from "axios";
const Teachers = () => {
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [high, setHigh] = useState("");

  const [primary1, setPrimary1] = useState("");
  const [secondary1, setSecondary1] = useState("");
  const [high1, setHigh1] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/edu/total/stu");

        setPrimary(res?.data?.studentsPrimary[0]?.total_students_primary);
        setSecondary(res?.data?.studentsSecondary[0]?.total_students_secondary);
        let ind = res?.data?.studentsInd[0]?.total_students_ind;
        let com = res?.data?.studentsCom[0]?.total_students_com;
        let agr = res?.data?.studentsArg[0]?.total_students_arg;
        let h = res?.data?.studentsHigh[0].total_students_high;
        let total = ind + com + agr + h;
        console.log(ind);
        console.log(com);
        console.log(agr);
        console.log(h);
        console.log(total);

        setHigh(total);

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/edu/total/tea");
        //console.log(res);
        setPrimary1(
          res?.data?.teachersPrimary[0]?.total_teachers_female +
            res?.data?.teachersPrimary[0]?.total_teachers_female_private +
            res?.data?.teachersPrimary[0]?.total_teachers_female_public +
            res?.data?.teachersPrimary[0]?.total_teachers_female_rural +
            res?.data?.teachersPrimary[0]?.total_teachers_female_urban +
            res?.data?.teachersPrimary[0]?.total_teachers_male +
            res?.data?.teachersPrimary[0]?.total_teachers_male_private +
            res?.data?.teachersPrimary[0]?.total_teachers_male_public +
            res?.data?.teachersPrimary[0]?.total_teachers_male_rural +
            res?.data?.teachersPrimary[0]?.total_teachers_male_urban
        );
        setSecondary1(
          res?.data?.teachersSecondary[0]?.total_teachers_female +
            res?.data?.teachersSecondary[0]?.total_teachers_female_private +
            res?.data?.teachersSecondary[0]?.total_teachers_female_public +
            res?.data?.teachersSecondary[0]?.total_teachers_female_rural +
            res?.data?.teachersSecondary[0]?.total_teachers_female_urban +
            res?.data?.teachersSecondary[0]?.total_teachers_male +
            res?.data?.teachersSecondary[0]?.total_teachers_male_private +
            res?.data?.teachersSecondary[0]?.total_teachers_male_public +
            res?.data?.teachersSecondary[0]?.total_teachers_male_rural +
            res?.data?.teachersSecondary[0]?.total_teachers_male_urban
        );

        setHigh1(
          res?.data?.teachersHigh[0]?.total_teachers_female +
            res?.data?.teachersHigh[0]?.total_teachers_female_private +
            res?.data?.teachersHigh[0]?.total_teachers_female_public +
            res?.data?.teachersHigh[0]?.total_teachers_female_rural +
            res?.data?.teachersHigh[0]?.total_teachers_female_urban +
            res?.data?.teachersHigh[0]?.total_teachers_male +
            res?.data?.teachersHigh[0]?.total_teachers_male_private +
            res?.data?.teachersHigh[0]?.total_teachers_male_public +
            res?.data?.teachersHigh[0]?.total_teachers_male_rural +
            res?.data?.teachersHigh[0]?.total_teachers_male_urban
        );

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const arr = [
    {
      year: "2021",
      stage: "????????????????????",
      teachers: primary1,
      students: primary,
      avg: `1 To ${Math.round(primary / primary1)}`,
    },

    {
      year: "2021",
      stage: "??????????????????",
      teachers: secondary1,
      students: secondary,
      avg: `1 To ${Math.round(secondary / secondary1)}`,
    },

    {
      year: "2021",
      stage: "???????????????? ",
      teachers: high1,
      students: high,
      avg: `1 To ${Math.round(high / high1)}`,
    },
  ];

  const columnsDefs = [
    {
      headerName: "???????? ?????? ????????",
      field: "avg",
      sortable: true,
      filter: true,
      width: 170,
    },
    {
      headerName: "?????? ????????????",
      field: "students",
      sortable: true,
      filter: true,
      width: 100,
    },
    {
      headerName: "?????? ????????????????",
      field: "teachers",
      sortable: true,
      filter: true,
      width: 100,
    },
    {
      headerName: "??????????",
      field: "year",
      sortable: true,
      filter: true,
      width: 100,
    },

    {
      headerName: "??????????????",
      field: "stage",
      sortable: true,
      filter: true,
      width: 100,
    },
  ];

  return (
    <>
      <Typography variant="h6" style={{ textAlign: "right" }}>
        2021 ?????? ???????????? ?????? ????????
      </Typography>
      <div className="ag-theme-alpine" style={{ height: 200 }}>
        <AgGridReact
          rowData={arr}
          columnDefs={columnsDefs}
          rowSelection="multiple"
          animateRows={true}
        />
      </div>
    </>
  );
};

export default Teachers;
