import '../App.css'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import ReadOnlyRow from './ReadOnlyRow'
import EditableRow from './EditableRow'
import React from "react";
import axios from 'axios';

// function  Main() {
class Main extends React.Component {

    // const [name, setName] = useState("");

    // const handleChange = event => {
    //     setName(event.target.value);
    // };
    //
    // //INSERT DATA
    // const handleSubmit = event => {
    //     event.preventDefault();
    //
    //     axios.post(`http://127.0.0.1:3000/posts`, {name: name})
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //         })
    // };

    state = {
        name: '',
        posts: [],
        id: '',
        isClicked: false,
        editId: null,
        setEditId: null,
        addFormData: '',
        setAddFormData: '',
        editFormData: '',
        setEditFormData: ''
    };

    componentDidMount() {
        axios.get(`http://127.0.0.1:3000/posts`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
                console.log(posts);

                console.log(posts);
            })
    }

    handleChange = event => {
        this.setState(
            {
                name: event.target.value
            });
    };

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`http://127.0.0.1:3000/posts`, { name: this.state.name })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    handleEditClick = (event, name) => {
        event.preventDefault();
        console.log('clicked');
        console.log(name._id);
        this.setState(
            {
                editId: name._id,
                setEditId: name._id,
                name: name.name,
                setEditFormData: name.name
            });
    };

    handleCancelClick = () => {
        this.setState(
            {
                editId: null,
                setEditId: null
            });
    };

    removeName = (event, id) => {
        event.preventDefault();
        axios.delete(`http://127.0.0.1:3000/posts/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    handleUpdateSubmit = (event,name) => {
        event.preventDefault();

        axios.post(`http://127.0.0.1:3000/posts/${name._id}`, { name: name.name })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="Main">
                    <main>
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-6">
                                <h4 className="mb-3">Favorite Anime Characters</h4>
                                <form className="needs-validation" noValidate onSubmit={this.handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="firstName" className="form-label">Name</label>
                                            <input type="text" className="form-control" name="name" placeholder=""
                                                   required
                                                // onChange={(event) => {setName(event.target.value);}}
                                                //    value={name}
                                                   onChange={this.handleChange}
                                            />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>

                                    </div>

                                    <button className="w-25 btn btn-primary btn-lg mt-3" type="submit">ENTER</button>
                                </form>

                            </div>
                            <div className="col-md-6 col-lg-6">
                                <h4 className="mb-3">Result</h4>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.posts.map(name =>
                                            <React.Fragment>
                                                {this.state.editId === name._id ?
                                                    (<EditableRow name = {name} handleCancelClick = {this.handleCancelClick} handleUpdateSubmit={this.handleUpdateSubmit}/>)
                                                    :
                                                    (<ReadOnlyRow name = {name} handleEditClick = {this.handleEditClick} removeName={this.removeName}/>
                                                    )}
                                            </React.Fragment>
                                        )}
                                    </tbody>
                                </table>

                                {/*<ul>*/}
                                {/*    { this.state.posts.map(post => <li>{post.name}</li>)}*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </main>
                    <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
// }

export default Main;
