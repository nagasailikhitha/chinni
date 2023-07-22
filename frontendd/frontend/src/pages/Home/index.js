import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

function createData(no, MovieName, Description, Year, Rating,MoreDetails) {
  return {no, MovieName, Description, Year, Rating,MoreDetails  };
}


const rows = [
    createData('1','Aakasam nee Haddura',"Ayoung man from a remote village, dreams of launching his own airline service",2020,"4.8","Clickhere"),
    createData('2',"Dangal"," India's first world-class female wrestlers",2016,"4.6","Clickhere"),
    createData('3', "Karthikeya2","Karthikeya, a doctor, must retrieve a mythological treasure and clear his name.",2022,"4.9","Clickhere"),
    createData('4',"Major","who was killed in action in the 2008 Mumbai attacks",2022,"4.5","Clickhere"),
  createData('5', "MissionMangal", "About Mars Orbiter Mission", 2019, 5,"Clickhere"),
  createData("6", "Naa peru surya na illu India", "Motto of country can live in peace and prosper",2018,"4.3","Clickhere"),
  createData('7', "RRR", "Battles against the British empire", 2022, 5,"Clickhere"),

  createData('8', "SitaRamam", "Afreen sets off to fulfil her grandfather's wish of delivering a letter from Ram to Sita", 2022, 5,"Clickhere"),
];

export default function Home() {
    const navigate = useNavigate();
    const onMovies = (e) => {
        e.preventDefault();
        navigate('/Movies')}
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" >no</TableCell>
            <TableCell align="center">MovieName</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center" >MoreDetails</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.no}
              </TableCell>
              <TableCell align="center">{row.MovieName}</TableCell>
              <TableCell align="center">{row.Description}</TableCell>
              <TableCell align="center">{row.Year}</TableCell>
              <TableCell align="center">{row.Rating}</TableCell>
              <TableCell align="center" onClick={onMovies} > <Link href="#">{row.MoreDetails}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}