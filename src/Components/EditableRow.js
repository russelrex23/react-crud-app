import React from 'react';
import axios from "axios";

const EditableRow = ({name, handleEditClick, handleCancelClick, handleUpdateSubmit}) => {
    return (
            <tr>
                <th>
                    <div style={{float:"left"}}>
                        <input type="text" defaultValue={name.name}/>
                    </div>
                    <div style={{float:"right"}}>
                        <button type="submit" className="btn btn-primary me-2"
                                onClick={(event) => handleUpdateSubmit(event, name)}>Save</button>
                        <button type="button" className="btn btn-danger"
                                onClick={handleCancelClick}>Cancel</button>
                    </div>
                </th>
            </tr>
    );
};

export default EditableRow;
