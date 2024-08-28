import './App.css';

import { FaChessKing } from "react-icons/fa";
import { FaChessPawn } from "react-icons/fa";
import { FaChessRook } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa";
import { FaChessBishop } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";
import { FaRegChessPawn } from "react-icons/fa6";
import { FaRegChessRook } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaRegChessBishop } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      
      <table>
        <tr class="ev">
        <td><FaChessRook/></td>
            <td><FaChessKnight /></td>
            <td><FaChessBishop /></td>
            <td><FaChessQueen /></td>
            <td><FaChessKing /></td>
            <td><FaChessBishop /></td>
            <td><FaChessKnight /></td>
            <td><FaChessRook/></td>

        </tr>
        <tr class="od">
        <td> <FaChessPawn /></td>
            <td> <FaChessPawn /></td>
            <td> <FaChessPawn/></td>
            <td> <FaChessPawn /></td>
            <td> <FaChessPawn /></td>
            <td> <FaChessPawn /></td>
            <td> <FaChessPawn /></td>
            <td> <FaChessPawn/></td>

        </tr>
        <tr class="ev">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="od">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="ev">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="od">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="ev">
        <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>
            <td><FaRegChessPawn /></td>


        </tr>
        <tr class="od">
        <td><FaRegChessRook /></td>
            <td>< FaRegChessKnight /></td>
            <td><FaRegChessBishop /></td>
            <td><FaRegChessKing /></td>
            <td><FaRegChessQueen /></td>
            <td><FaRegChessBishop /></td>
            <td><FaRegChessKnight /></td>
            <td><FaRegChessRook /></td>

        </tr>
    </table>
    </div>
  );
}

export default App;
