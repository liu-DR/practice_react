export interface columnsTableType {
    key: string;
    name?: string;
    age?: number;
    tel?: string;
    phone?: number;
    address?: string;
    children?: DataType[];
    title?: string;
    dataIndex?: string;
    render?: React.ReactNode;
    onCell?: React.ReactNode
}