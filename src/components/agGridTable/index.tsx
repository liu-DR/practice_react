import react, { useState, useEffect, useRef, useMemo } from 'react'
import dayjs from 'dayjs'
import { cloneDeep }  from 'lodash'
import { AgGridReact } from 'ag-grid-react'
import {
    Button,
    Input,
    DatePicker
} from 'antd'

const colmn: any = [
    { headerName: '姓名', field: 'name' }, 
    { headerName: '年龄', field: 'age' }, 
    { headerName: '时间', field: 'time' }, 
]

const CellRender = (props) => {
    return (
        <span>
            <Input value={props?.value} onChange={(e) => props.onCellValueChanged({ value: e?.target?.value, props })} />
        </span>
    )
}

const AgGridTable = () => {
    const gridRef = useRef(null)
    const [gridApi, setGridApi] = useState<any>(null)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [dataSource, setDataSource] = useState([])
    const [defaultData, setDefaultData] = useState([])

    useEffect(() => {
        let list: any = []

        for (let i = 0; i < 10; i++) {
            list.push({
                name: `张三${i}`,
                age: i,
                time: dayjs(new Date()).format('YYYY-MM-DD')
            })
        }
        setDataSource(cloneDeep(list))
        setDefaultData(cloneDeep(list))
    },[])

    const onCellValueChanged = (params) => {
        console.log(params,'params');
        const { value, props } = params
        if(props && props.setValue) {
            props.setValue(value)
        }
    }
    
    const columns = useMemo(() => {
        const numberCol = {
            headerName: '序号',
            field: 'number',
            pinned: 'left',
            width: 70,
            valueGetter: (params) => {
                return params?.node ? params.node.rowIndex + 1 : null
            }
        }
        const deep = (data) => {
            data.forEach(each => {
                if(each.children) {
                    each.children = deep(each.children)
                } else {
                    each.editable = isEdit;
                    each.cellRendererParams = {
                        onCellValueChanged: onCellValueChanged,
                        defaultData
                    };
                    each.cellRenderer = CellRender;
                    each.cellDataType = false
                }
            })
            return data
        }

        const newColumnDefs = deep(colmn)

        return [numberCol, ...newColumnDefs]
    },[isEdit])

    const onGridReady = (params: any) => {
        setGridApi(params.api);
        params.api.sizeColumnsToFit();
    }

    return (
        <div>
            <p>
                <Button type='primary' onClick={() => setIsEdit(!isEdit)}>{isEdit ? '取消' : '编辑'}</Button>
            </p>
            <div style={{ width: '100%', height: 400 }} className="ag-theme-alpine">
                <AgGridReact
                    ref={gridRef}
                    onGridReady={onGridReady}
                    rowData={dataSource}
                    columnDefs={columns}
                    onCellValueChanged={onCellValueChanged}
                    suppressClickEdit={true}
                />
            </div>
        </div>
    )
}

export default AgGridTable