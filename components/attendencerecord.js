
import { View, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import React,{useState} from 'react';
import axios from 'axios';



const Attendencerecord= ({navigation,route}) => {
  const[attendancedata, setAttendancedata] = useState();
  axios.post('https://8000-anshulakotiya-sihgail-o32qjuu43i7.ws-us38.gitpod.io/attendanceRecord/', {
    emp_no:route.params.userno,

  },
   { 
    })
  .then(response => {  
      // If request is good...
      console.log(response.data);
   })
  .catch((error) => {
      console.log('error ' + error);
   });

  const CONTENT = {
    tableHead: ['Name', 'Employee Number', 'Mobile', 'Date', ' Time'],
    tableData: [
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
    ],
  };
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[1, 2, 1, 1]}
          style={styles.head}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
          />
          <Rows
            data={CONTENT.tableData}
            flexArr={[2, 1, 1]}
            style={styles.row}
          />
        </TableWrapper>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: 'orange' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});


export default Attendencerecord