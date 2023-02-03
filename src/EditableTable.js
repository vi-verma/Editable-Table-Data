import { Input, Table, Button } from "antd";
import { useState, useEffect } from "react";
import { ColumnProps } from "antd/lib/table";
import 'antd/dist/reset.css';
import TypeAhead from "./TypeAhead";

const dataSource = [
    {
        id: "1",
        type: 'hulk',
        name: "Vivek",
        contact: 9834343434,
        salary: 10
    },
    {
        id: "2",
        type: '',
        name: "John",
        contact: 8989898989,
        salary: 13
    }
];

const EditableTable = () => {
    const [tableData, setTableData] = useState(dataSource);

    const onInputChange = (key, index) => (e) => {
        const newData = [...tableData];

        if(key === 'type'){
            newData[index][key] = e;
        }else{
            newData[index][key] = Number(e.target.value);

        }
        setTableData(newData);
    };

    const onConfirm = () => {
        console.log(tableData);
    };


    const columns = [
        {
            dataIndex: "name",
            title: "Name"
        },
        {
            dataIndex: 'type',
            title: 'Type',
            render: (text, record, index) => (
                <TypeAhead onSelect={onInputChange("type",index)} defaultValue={text} />
            )
        },
        {
            dataIndex: "contact",
            title: "Contact",
            render: (text, record, index) => (
                <Input value={text} onChange={onInputChange("contact", index)} />
            )
        },
        {
            dataIndex: "salary",
            title: "Salary",
            render: (text, record, index) => (
                <Input value={text} onChange={onInputChange("salary", index)} />
            )
        },
    ];

    return (
        <div style={{ padding: 20 }}>
            <Table
                rowKey="id"
                columns={columns}
                dataSource={tableData}
                pagination={false}
            />
            
            <div >
                <Button type="primary" onClick={onConfirm}>
                    Save Data
                </Button>
            </div>
        </div>
    );
};

export default EditableTable;
