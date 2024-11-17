import React from 'react';
import { Table } from 'antd';

const UserTable = ({ users }) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role'
        }
    ];

    return <Table dataSource={users} columns={columns} rowKey="id" />;
};

export default UserTable;
