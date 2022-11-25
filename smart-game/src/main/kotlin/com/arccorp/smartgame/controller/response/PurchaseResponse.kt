package com.arccorp.smartgame.controller.response

import com.arccorp.smartgame.models.ProductModel

data class PurchaseResponse(
    var id: Int? = null,
    var product: ProductModel
)
