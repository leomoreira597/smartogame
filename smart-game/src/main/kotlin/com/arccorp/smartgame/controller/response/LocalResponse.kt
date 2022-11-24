package com.arccorp.smartgame.controller.response

import com.arccorp.smartgame.models.ProductModel

data class LocalResponse(
    var id: Int? = null,

    var name: String,

    var product: ProductModel? = null
)
