import React from 'react';
import axios from "axios";


const ReadOnlyRow = ({name, handleEditClick, removeName}) => {
    return (
        <tr>
            <th>
                <div style={{float:"left"}}>
                    {name.name}
                </div>
                <div style={{float:"right"}}>
                    <button type="button" className="btn btn-primary me-2"
                            onClick={(event) => handleEditClick(event,name)}>Edit</button>
                    <button type="button" className="btn btn-danger"
                            onClick={(event) => removeName(event, name._id)}>Delete</button>
                </div>
            </th>
        </tr>
    );
};

export default ReadOnlyRow;
