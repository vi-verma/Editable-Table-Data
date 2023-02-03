import { Button, Input, Table } from 'antd';
import React, { useState } from 'react';

const initdataSource = [
  {
    key: '1',
    name: 'Vivek',
    type: 'student'
  },
  {
    key: '2',
    name: 'John',
    type: 'Teacher'
  },
  {
    key: '3',
    name: 'doe',
    type: 'Teacher'
  },
];


const EditableRowTable = () => {
  const [dataSource, setDetaSource] = useState(initdataSource);
  const [editingRow, setEditingRow] = useState('');

  const onInputChange = (key, index) => (e) => {

    console.log(key, index, e)
    const newData = [...dataSource];
        newData[index][key] = e.target.value;
    setDetaSource(newData);
};


  const columns = [
    {
        dataIndex: "name",
        title: "Name"
    },
    {
        dataIndex: 'type',
        title: 'Type',
        render:(text, record, index)=>{
          if(editingRow === record.key){
            return(
              <Input value={text} onChange={onInputChange("type", index)} />
            )
          } else{
            return<p>{text}</p>
          }
        }
    },
    {
      title: 'Action',
      render:(_, record)=> {
        return(
          <>
          <Button 
          type="link" 
          onClick={()=> setEditingRow(record.key)}>
            Edit
          </Button>
          <Button
          type="link"
          onClick={()=> (console.log(dataSource),setEditingRow(null))}
          >Save
          </Button>
          </>
        )
      }
    }
  ];


  return (
    <div>
            <Table
                rowKey="id"
                columns={columns}
                dataSource={dataSource}
                pagination={false}
            />
    </div>
  )
}

export default EditableRowTable