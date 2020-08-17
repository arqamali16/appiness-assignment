/**
 * @author Mohammed Arqam Ali Saad
 * Employees Table Render
 */
import React, { Component } from 'react';
import Table from '../Common/Table';

/** Employees Component */
class Employees extends Component<TypesNS.ITableProps> {
	/** Render */
	render() {
		const { columns, headers } = this.props;
		return <Table headers={headers} columns={columns} />;
	}
}

export default Employees;
