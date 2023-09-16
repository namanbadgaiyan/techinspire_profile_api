const Profiles = require("../models/profiles");

const getAllProducts = async (req, res) => {
    const { collage_branch, collage_name , collage_year } = req.query;
    const queryObject = {};

    if( collage_branch ){
        queryObject.collage_branch = { $regex: collage_branch, $options: "a"}
    }
    if( collage_year ){
        queryObject.collage_year = { $regex: collage_year, $options: "2"}
    }
    if( collage_name ){
        queryObject.collage_name = { $regex: collage_name, $options: "L"}
    }

    const Mydata = await Profiles.find(queryObject);
    res.status(200).json({ Mydata });
}

const getAllProductsTesting = async (req, res) => {
    const Mydata = await Profiles.find({});
    res.status(200).json({ Mydata });
}

module.exports = {getAllProducts , getAllProductsTesting};
