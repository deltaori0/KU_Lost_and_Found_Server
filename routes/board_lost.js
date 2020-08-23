//분실물 게시판
var express = require('express');
var router = express.Router();
const LostPost = require('../models/lostpost');

router.get("/", async (req, res) => {
    try {
      const boardlost = await LostPost.find();
      //시간순정렬 추가하기
      res.json(boardlost)
    } catch (err) {
      res.json({ message: err });
    }
  });

module.exports = router;