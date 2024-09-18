import React from "react";

export class Dynamic extends React.Component {
    constructor() {
        super();
        this.state = {
            data: '',
            list: ["Bánh", "Kẹo", "Đồ ăn"],
            dataEdit: '',
            editIndex: null,
        };
    }

    getData = (event) => {
        let newData = event.target.value
        this.setState({
            data: newData
        });
    };

    add = () => {
        let newData = [...this.state.list, this.state.data]
        this.setState({
            list: newData,
        })
    };

    showEdit = (index) => {
        let InputDisplay = this.state.list[index]
        this.setState({
            dataEdit: InputDisplay,
            editIndex: index,
        });
    };

    edit = () => {
        if (this.state.editIndex !== null) {
            const newList = [...this.state.list];
            newList[this.state.editIndex] = this.state.dataEdit;
            this.setState({
                list: newList,
                dataEdit: '',
                editIndex: null,
            });
        }
    };

    delete = (index) => {
        const newList = this.state.list.filter((_, i) => i !== index);
        this.setState({ list: newList });
    };

    render() {
        return (
            <>
                <input
                    placeholder="Nhập sản phẩm"
                    value={this.state.data}
                    onChange={this.getData}
                />
                <h3>Dữ liệu nhập: {this.state.data}</h3>
                <button onClick={this.add}>Thêm</button> <br />
                <input
                    placeholder="Nhập dữ liệu sửa"
                    value={this.state.dataEdit}
                    onChange={(event) => this.setState({ dataEdit: event.target.value })}
                />
                <button onClick={this.edit}>Sửa</button>
                <h1>Danh sách sản phẩm:</h1>
                {
                    this.state.list.map((item, index) => (
                        <h3 key={index}>
                            {index} - {item}
                            <button onClick={() => this.showEdit(index)}>Edit</button>
                            <button onClick={() => this.delete(index)}>Delete</button>
                        </h3>
                    ))
                }
            </>
        );
    }
}
