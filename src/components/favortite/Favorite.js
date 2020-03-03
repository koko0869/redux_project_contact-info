// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const FavoriteBlock = styled.div`
//   h3 {
//     margin: 0;
//     margin-bottom: 1rem;
//   }
// `;

// const Favorite = ({ infos }) => {
//   const rows = (infos = infos.filter(info => {
//     return (info.favorite === false) !== true;
//   })).map((info, index) => {
//     return info.name, info.phone;
//   });

//   return (
//     <FavoriteBlock>
//       <h3>즐겨찾기</h3>
//       <div>{rows}</div>
//       <Link to="/">연락처로 이동</Link>
//     </FavoriteBlock>
//   );
// };

// export default Favorite;

///////

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const useStyles = makeStyles({
  root: {
    maxWidth: 400
  },
  table: {
    minWidth: 400
  }
});

const Top = styled.div`
  margin-top: 2rem;
  text-align: right;
  margin-right: 1rem;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

function createData(username, phone) {
  return { username, phone };
}

export default function AcccessibleTable({ infos }) {
  const rows = (infos = infos.filter(info => {
    return (info.favorite === false) !== true;
  })).map((info, index) => {
    return createData(info.username, info.phone);
  });

  const classes = useStyles();

  return (
    <div align="center">
      <TableContainer className={classes.root} component={Paper}>
        <h3>즐겨찾기</h3>
        <Top>
          <Link to="/">연락처</Link>
        </Top>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell align="right">전화번호</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.username}>
                <TableCell component="th" scope="row">
                  {row.username}
                </TableCell>
                <TableCell align="right">{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
