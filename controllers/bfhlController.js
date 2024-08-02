exports.processData = (req, res) => {
    const { data } = req.body;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)] : [];

    res.json({
        is_success: true,
        user_id: "Lakshya Raj Vijay",
        email: "lv3194@srmist.edu.in",
        roll_number: "RA2111003011629",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
};

exports.getOperationCode = (req, res) => {
    res.json({ operation_code: 1 });
};