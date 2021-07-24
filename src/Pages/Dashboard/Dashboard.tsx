import React, { PureComponent } from 'react';
import Table from '../../Components/Table';

const columns = [
	{
		title: 'ID',
		index: 'id',
		key: 'id',
	},
	{
		title: 'Name',
		index: 'name',
		key: 'name',
	},
	{
		title: 'Age',
		index: 'age',
		key: 'age',
	},
	{
		title: 'Gender',
		index: 'gender',
		key: 'gender',
	},
	{
		title: 'Email',
		index: 'email',
		key: 'email',
	},
	{
		title: 'Phone',
		index: 'phoneNo',
		key: 'phoneNo',
	},
];

const Dashboard = (props: any) => {
	const { users } = props;
	return (
		<div>
			<header className='header'>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLAmPxAdg-UP8VsU_CelBt1Cwl1mHNbmSv1LZJuMcjanrUk2TI4a_0deLEZPb5nLyHGw&usqp=CAU'
					alt='Avatar'
					className='avatar'
				/>
			</header>
			<div className='dashboard-layout'>
				<Table columns={columns} data={users} />
			</div>
		</div>
	);
};

export default Dashboard;
