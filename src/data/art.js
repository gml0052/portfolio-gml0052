
export default {
    fetchArt: () => new Promise( (resolve, reject) => resolve( [
        {
            title: "Title",
            subtitle: "Subtitle",
            description: "Description",
            medium: [ {
                type: 'acrylic'
            } ],
            imgPath: "'../assets/0.jpg'",
        } ] ) )
}