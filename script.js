document.getElementById('uploadArea').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', handleFileSelect);

document.getElementById('uploadArea').addEventListener('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.style.backgroundColor = '#e8f0fe';
});

document.getElementById('uploadArea').addEventListener('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.style.backgroundColor = '';
});

document.getElementById('uploadArea').addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.style.backgroundColor = '';
    const files = e.dataTransfer.files;
    if (files.length) handleFileSelect({ target: { files } });
});

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        document.getElementById('loading').style.display = 'block';
        document.getElementById('resultArea').style.display = 'none';
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('uploadedImage').style.display = 'block';
            document.getElementById('uploadedImage').innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);
        // Simulate upload processing
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('resultArea').style.display = 'block';
            // Simulate user details
            const dummyUserDetails = `
                <p><strong>Number Plate:</strong> XYZ 1234</p>
                <p><strong>Owner Name:</strong>ABCDEFGH</p>
                <p><strong>Address:</strong> 123 XXXXX</p>
                <p><strong>Vehicle Type:</strong> ABCD</p>
            `;
            document.getElementById('imageDetails').innerHTML = dummyUserDetails;
        }, 2000); 
    } else {
        alert('Please upload a valid image file.');
    }
}
