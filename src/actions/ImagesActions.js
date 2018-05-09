import firebase from 'firebase';

export function createImage() {
    const image = event.target.files[0];
    const name = Date.now() 

    firebase.storage().ref()
        .child(`images/teste`)
        .put(image)
}

export function getImages() {
    firebase.storage().ref()
            .child(`images/teste`)
            .getDownloadURL()
            .then(url => {
                console.log(url)
            })
}
