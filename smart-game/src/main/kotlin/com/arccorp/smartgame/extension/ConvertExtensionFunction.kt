package com.arccorp.smartgame.extension

import com.arccorp.smartgame.controller.request.PostPurchaseRequest
import com.arccorp.smartgame.controller.response.LocalResponse
import com.arccorp.smartgame.controller.response.ProductResponse
import com.arccorp.smartgame.controller.response.PurchaseResponse
import com.arccorp.smartgame.models.LocalModel
import com.arccorp.smartgame.models.ProductModel
import com.arccorp.smartgame.models.PurchaseModel

fun ProductModel.toResponse(): ProductResponse{
    return ProductResponse(
        id = this.id,
        name = this.name,
        description = this.description,
        image = this.image,
        price = this.price,
        plataform = this.plataform
    )
}

fun LocalModel.toResponse():LocalResponse{
    return LocalResponse(
        id = this.id,
        name = this.name,
        product = this.product
    )
}

fun PostPurchaseRequest.toPurshaseModel(product: ProductModel): PurchaseModel{
    return PurchaseModel(
        product = product
    )
}

fun PurchaseModel.toResponse():PurchaseResponse{
    return  PurchaseResponse(
        id = this.id,
        product = this.product
    )
}