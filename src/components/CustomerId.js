import { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { TableCell } from '@mui/material';

class Customer extends Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.id} alt="pa"></img></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                
            </TableRow>
        )
    }
}

export default Customer;