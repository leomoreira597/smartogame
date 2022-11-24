package com.arccorp.smartgame.controller.response

data class ProductResponse(

    var id: Int? = null,

    var name: String,

    var description: String,

    var image: String,

    var price: Double,

    var plataform: String
)
