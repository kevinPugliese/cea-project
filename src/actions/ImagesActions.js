import firebase from 'firebase';

export function createImage(id, images) {
    return dispatch => {
        let namePhotos = [];
        let photos = [];
        for (let i=0; i<images.length; i++) {
            let name = `${Date.now()}${i}`;
            namePhotos[`photo${i}`] = name;
            photos.push(name);
        }
        
        firebase.database().ref(`/productsPhotos/${id}`)
            .push(photos)
            .then(value => {
                for (let i=0; i<images.length; i++) {
                    firebase.storage().ref()
                        .child(`images/${photos[i]}`)
                        .put(images[i]);
                }
                dispatch({type: ''});
            })  
    }
}

export function getImages(id) {
    // firebase.database().ref(`/productsPhotos/${id}`)
    //     .once('value')
    //     .then(snapshot => {
    //         let val = _.first(_.values(snapshot.val()));
            
    //         val.forEach(name => {
    //             firebase.storage().ref()
    //                 .child(`images/${name}`)
    //                 .getDownloadURL()
    //                 .then(url => {
    //                     this.state.img.push(url);
    //                 })
    //         });
    //     })


    
}

export function removeImages(name) {
    firebase.storage.ref()
        .child(`images/${name}`)
        .removeImages()
        .then(e => console.log(e));
}