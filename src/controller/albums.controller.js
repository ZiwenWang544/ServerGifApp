const albumModel = require('../models/albums.model')

const getAllAlbums = async (req, res, next) => {
    try {

        const allAlbums = await albumModel.find({})
        res.status(200).send({status:true,data:allAlbums})
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message })
    }
  }

  const getAlbumByID = async (req, res, next) => {
    const { id } = req.params
    try {
      const album = await albumModel.findById(id).lean().exec()
  
      res.status(200).send({ status: true, data: album })
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message })
    }
  }

  module.exports = {
    getAllAlbums
  }