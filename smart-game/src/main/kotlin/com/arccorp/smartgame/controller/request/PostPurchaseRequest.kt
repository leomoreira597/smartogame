package com.arccorp.smartgame.controller.request

import com.fasterxml.jackson.annotation.JsonAlias

data class PostPurchaseRequest(
    @JsonAlias("productId")
    var product: Int
)
