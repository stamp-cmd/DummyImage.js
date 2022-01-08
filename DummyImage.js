document.onreadystatechange = () => {
    // Check if DOM content is ready
    if (document.readyState === "interactive") {
        // Get all img tags
        var Image_Tags = document.getElementsByTagName("img");

        for (let index = 0; index < Image_Tags.length; index++) {
            let Image = Image_Tags[index]; // Image from index of Image_Tags

            if (Image.src === `${window.location.href}#dummy`) {
                // Get image width, height
                let width = Image.clientWidth;
                let height = Image.clientHeight;

                // Set image src to dummyimage.com/<width>x<height>
                Image.src = `https://www.dummyimage.com/${width}x${height}`;
            }
        }
    }
};