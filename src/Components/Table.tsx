import React from 'react';

const Table = (props: any) => {
	const { columns, data } = props;

	// rendering a perticular row element
	const getRow = (data: any) => {
		const row = columns.map((each: any) => <td>{each.render ? each.render : data[each.index]}</td>);
		return <tr>{row}</tr>;
	};

	return (
		<table>
			<tr>
				{columns.map((ele: any) => (
					<th>{ele.title}</th>
				))}
			</tr>
			{data.map((each: any) => getRow(each))}
		</table>
	);
};

export default Table;
