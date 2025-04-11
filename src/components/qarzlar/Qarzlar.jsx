import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useTheme } from "../ThemeContext/ThemeContext";
import { theme } from "antd";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
function createData(
  id,
  name,
  KimEkanligi,
  QarizMiqdori,
  TelfonRaqami,
  QarzMiqdori
) {
  return {
    id,
    name,
    KimEkanligi,
    QarizMiqdori,
    TelfonRaqami,
    QarzMiqdori,
  };
}

function Row(props) {
  const { darkMode } = useTheme();
  const { row } = props;

  return (
    <React.Fragment>
      <TableRow className="border-b">
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell align="right">{row.KimEkanligi}</TableCell>
        <TableCell align="right">{row.QarizMiqdori}</TableCell>
        <TableCell align="right">{row.TelfonRaqami}</TableCell>
        <TableCell align="right">{row.QarzMiqdori}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    KimEkanligi: PropTypes.string.isRequired,
    TelfonRaqami: PropTypes.number.isRequired,
    QarizMiqdori: PropTypes.number.isRequired,
    QarzMiqdori: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    1,
    "Alksjgb;lakdfbsk;odfkl;i",
    "Do‘konchi",
    50000,
    "+998901234567",
    30000,
    <FaRegEdit className="text-black text-2xl cursor-pointer" />
  ),
  
];

function CollapsibleTable() {
  return (
    <TableContainer component={Paper} className="shadow-lg rounded-lg">
      <Table aria-label="collapsible table">
        <TableHead className="bg-[#2766ec]">
          <TableRow className="flex items-center">
            <TableCell />
            <TableCell sx={{ color: "#fff" }} className="font-bold">
              ID
            </TableCell>
            <TableCell sx={{ color: "#fff" }} className="font-bold">
              Ism
            </TableCell>
            <TableCell
              sx={{ color: "#fff" }}
              align="right"
              className="font-bold text-white"
            >
              Kim Ekanligi
            </TableCell>
            <TableCell
              sx={{ color: "#fff" }}
              align="right"
              className="font-bold"
            >
              Qariz Miqdori
            </TableCell>
            <TableCell
              sx={{ color: "#fff" }}
              align="right"
              className="font-bold"
            >
              Telfon Raqami
            </TableCell>
            <TableCell
              sx={{ color: "#fff" }}
              align="right"
              className="font-bold"
            >
              Qarz Miqdori
            </TableCell>
            <TableCell
              sx={{ color: "#fff" }}
              align="right"
              className="font-bold"
            >
              O'zgartirish
              {/* <FaRegEdit className="text-white text-2xl cursor-pointer" /> */}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function Qarzlar() {
  const { darkMode } = useTheme();
  return (
    <div className="max-w-[1300px] mx-auto p-4">
      <div>
        <div>
          <div className="flex items-center justify-between mb-6">
            <h1
              className={`text-4xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Qarzlar
            </h1>
            <div className="flex items-center gap-2 w-[350px] cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <TbShoppingBagPlus className="text-2xl" />
              <Link to="/qoshish">
                <h2 className="text-lg font-semibold">Qarz qo'shish</h2>
              </Link>
            </div>
          </div>
          <div className="flex justify-between mb-6 gap-5">
            <div className="relative flex rounded-lg shadow-sm w-full">
              <input
                type="text"
                className="text-black text-3xl py-3 px-4 ps-11 block w-full border border-gray-200 rounded-s-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Qidiruv"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button
                type="button"
                className="py-3 px-4 inline-flex justify-center w-96 items-center gap-x-2 text-sm font-semibold rounded-e-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
            {/* <select className="text-black py-3 px-4 w-96 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
              <option>Ism</option>
              <option>Ish joyi</option>
              <option>Info</option>
            </select> */}
          </div>
          <CollapsibleTable />
        </div>
      </div>
    </div>
  );
}
