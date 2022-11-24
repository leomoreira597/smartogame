package com.arccorp.smartgame.controller

import com.arccorp.smartgame.controller.request.PostPurchaseRequest
import com.arccorp.smartgame.extension.toPurshaseModel
import com.arccorp.smartgame.service.PurchaseService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("purchase")
class PurchaseController(
    private val purchaseService: PurchaseService
) {
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun create(@RequestBody product: PostPurchaseRequest){
        val prodAdd = purchaseService.findById(product.product)
        purchaseService.create(product.toPurshaseModel(prodAdd))
    }
}