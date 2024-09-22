const mime = require('mime-types'); // Add this package for MIME type detection

exports.processData = (req, res) => {
    const { data, file_b64 } = req.body;

    // Separate numbers and alphabets from the input
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    // Find highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 
        ? [lowercaseAlphabets.reduce((a, b) => a > b ? a : b)] 
        : [];

    // File handling logic
    let fileValid = false;
    let fileMimeType = '';
    let fileSizeKB = 0;

    if (file_b64) {
        try {
            const buffer = Buffer.from(file_b64, 'base64');
            fileSizeKB = (buffer.length / 1024).toFixed(2); // Calculate file size in KB
            fileMimeType = mime.lookup(buffer) || 'application/octet-stream'; // Get MIME type
            fileValid = true;
        } catch (error) {
            fileValid = false; // Invalid base64 data
        }
    }

    // Return response with the processed data
    res.json({
        is_success: true,
        user_id: "Lakshya Raj Vijay",
        email: "lv3194@srmist.edu.in",
        roll_number: "RA2111003011629",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet,
        file_valid: fileValid,
        file_mime_type: fileMimeType,
        file_size_kb: fileSizeKB
    });
};

exports.getOperationCode = (req, res) => {
    res.json({ operation_code: 1 });
};
