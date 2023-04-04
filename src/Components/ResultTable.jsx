import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTheme } from "../Context/ThemeContext";
import Tippy from "@tippyjs/react";

const ResultTable = ({ data }) => {
    const { theme } = useTheme();

  const styleCell = {
    color: theme.titleColor,
    textAlign: "center",
  };

  return (
    <div className="table">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styleCell}>WPM</TableCell>
              <TableCell style={styleCell}>Accuracy</TableCell>
              <Tippy content="correct / incorrect / extra / missed"><TableCell style={styleCell}>Characters</TableCell></Tippy>
              <TableCell style={styleCell}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((i) => (
              <TableRow>
                <TableCell style={styleCell}>{i.wpm}</TableCell>
                <TableCell style={styleCell}>{i.accuracy}</TableCell>
                <TableCell style={styleCell}>{i.characters}</TableCell>
                <TableCell style={styleCell}>
                  {i.timeStamp.toDate().toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ResultTable;
