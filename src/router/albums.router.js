const albumRouter = require('express').Router()
const albumsController = require('../controller/albums.controller')

albumRouter
.get('/',albumsController.getAllAlbums)



module.exports = albumRouter