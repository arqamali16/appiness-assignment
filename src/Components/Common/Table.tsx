/**
 * @author Mohammed Arqam Ali Saad
 * Employee table
 */
import React, { Component } from 'react';
import _ from 'lodash';

/** Employees Component */
class Employees extends Component<TypesNS.ITableProps> {
	/** Header */
	renderRow = (row: string, rowIndex: number) => {
		return (
			<th key={`row-${rowIndex}`} className='Cell-Header'>
				{row}
			</th>
		);
	};

	/** render headings */
	theadMarkup = (<tr key='heading'>{_.map(this.props.headers, this.renderRow)}</tr>);

	/** Render Rows */
	tbodyMarkup = _.map(this.props.columns, (eachRow, index) => {
		return (
			<tr>
				{_.map(_.keys(eachRow), (each) => (
					<td className='Cell'>{_.get(eachRow, [each])}</td>
				))}
			</tr>
		);
	});

	/** Render */
	render() {
		return (
			<table className='Table'>
				<thead>{this.theadMarkup}</thead>
				<tbody>{this.tbodyMarkup}</tbody>
			</table>
		);
	}
}

export default Employees;
