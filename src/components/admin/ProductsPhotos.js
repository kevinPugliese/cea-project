import React, { Component } from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { createImage } from '../../actions/ImagesActions';
import firebase from 'firebase';

class ProductsPhotos extends Component {

    constructor(props) {
        super(props);
        this.state = {files: [], img: []}
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const self = this;
        
        firebase.database().ref(`/productsPhotos/${id}`)
            .once('value')
            .then(snapshot => {
                let val = _.values(snapshot.val());
                console.log(val)
                
                val.forEach(child => {
                    child.forEach(name => {
                        firebase.storage().ref()
                            .child(`images/${name}`)
                            .getDownloadURL()
                            .then(url => {
                                let temp = this.state.img;
                                temp.push([url, name])
                                this.setState({ img: temp });
                            })
                    })
                });
            })
    }

    uploadFile(e) {
        this.setState({ files: e.target.files });
    }

    removeImg(name) {
        firebase.storage().ref()
            .child(`images/${name}`)
            .delete()
            .then(e => this.setState({img: this.state.img.filter(item => item[1] !== name)}));
    }

    renderImgs() {
        console.log(this.state.img);
        return _.map(this.state.img, item => {
            return (
                <li key={item[0]}>
                    <img src={item[0]} style={{width: '100px'}}/>
                    <button onClick={e => this.removeImg(item[1])}>Remover</button>
                </li>
            );
        });
    }

    render() {
        const { id } = this.props.match.params;

        return (
            <div>
                <Header />
                <p>Produtos fotos</p>
                <input type='file' name='fotos' multiple onChange={this.uploadFile.bind(this)} />
                <button onClick={e => this.props.createImage(id, this.state.files)}>Salvar</button>
                {this.renderImgs()}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    productSave: state.ProductsReducers.productSave,
    items: state.ProductsReducers.items
});

export default connect(mapStateToProps, { createImage })(ProductsPhotos);
