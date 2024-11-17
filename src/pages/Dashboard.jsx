import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from '../components/userTable';
import { fetchUsers } from '../redux/actions/userActions';

const Dashboard = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>User Management Dashboard</h1>
            <UserTable users={users} />
        </div>
    );
};

export default Dashboard;
