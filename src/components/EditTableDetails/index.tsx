import React, { useMemo, useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Button } from 'antd';
import { BaseTable } from 'ali-react-table'

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

function TableBody({ tbodyProps }) {
    const [form] = Form.useForm();
    // tbodyProps <tbody> 元素的 props
    return (
        <Form form={form} component={false}>
            <tbody {...tbodyProps} />
        </Form>
    )
}

const EditableRow = ({ row, rowIndex, trProps }) => {
    return <tr {...trProps}/>
}

const Cell = ({ row, rowIndex, column, colIndex, tdProps }) => {

    console.log(column,'column');
    console.log(row,'row');
    console.log(tdProps,'tdProps');
    
    
    const {
        editing,
        inputType,
        code,
        name
    } = column

    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
        <td {...tdProps}>
            {editing ? (
                <Form.Item
                    name={code}
                    style={{ margin: 0 }}
                    rules={[
                    {
                        required: true,
                        message: `Please Input ${name}!`,
                    },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (<span>{row[code]}</span>)
            }
        </td>
    )
}

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const columns = [
    {
      name: '姓名',
      code: 'name',
      width: 120,
      editable: true,
      lock: true
    },
    {
      name: '年龄',
      code: 'age',
      width: 120,
      editable: true,
    },
    {
      name: '地址',
      code: 'address',
      width: 120,
      editable: true,
    }
  ];

  const mergedColumns = useMemo(() => 
    columns.map((col) => {
        if (!col.editable) {
          return col;
        }
        return {
            ...col,
            inputType: col.code === 'age' ? 'number' : 'text',
            editing: isEdit,
        };
      }),
      [isEdit]
    )

  return (
    <div>
        <Button onClick={() => setIsEdit(!isEdit)}>{isEdit ? '取消' : '编辑'}</Button>
        <BaseTable
            style={{ width: 300, height: 300, overflow: 'auto' }}
            components={{
                Row: EditableRow,
                Cell: Cell,
            }}
            dataSource={data}
            columns={mergedColumns}
            useVirtual={{
                vertical: true
            }}
        />
    </div>
  );
};

export default App;