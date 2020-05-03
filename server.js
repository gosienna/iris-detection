let express = require("express");
let app = express();

app.use(express.static("./static"));
const PORT=process.env.PORT||5000;
app.listen(PORT, function() {
    console.log("Listening on port 81");
});
